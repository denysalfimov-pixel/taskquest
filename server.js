process.on('uncaughtException', (err) => { console.error('UNCAUGHT:', err); process.exit(1); });
process.on('unhandledRejection', (err) => { console.error('UNHANDLED:', err); process.exit(1); });

require('dotenv').config();
console.log('Starting TaskQuest...');
console.log('NODE_ENV:', process.env.NODE_ENV);
console.log('PORT:', process.env.PORT);

const express    = require('express');
const session    = require('express-session');
const passport   = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const Database   = require('better-sqlite3');
const SqliteStore = require('better-sqlite3-session-store')(session);
const cors       = require('cors');
const path       = require('path');

console.log('Modules loaded, opening DB...');
const app = express();
const dbPath = process.env.NODE_ENV === 'production' ? '/app/taskquest.db' : 'taskquest.db';
const db  = new Database(dbPath);
console.log('DB opened at:', dbPath);

// ── DB SETUP ──────────────────────────────────────────────
db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id          INTEGER PRIMARY KEY AUTOINCREMENT,
    google_id   TEXT UNIQUE,
    name        TEXT,
    email       TEXT UNIQUE,
    avatar      TEXT DEFAULT '🌿',
    code        TEXT UNIQUE,
    coins       INTEGER DEFAULT 150,
    xp          INTEGER DEFAULT 0,
    level       INTEGER DEFAULT 1,
    streak      INTEGER DEFAULT 0,
    premium     INTEGER DEFAULT 0,
    created_at  TEXT DEFAULT (datetime('now'))
  );
  CREATE TABLE IF NOT EXISTS inventory (
    id       INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id  INTEGER,
    item_id  TEXT,
    count    INTEGER DEFAULT 0,
    FOREIGN KEY(user_id) REFERENCES users(id)
  );
  CREATE TABLE IF NOT EXISTS tasks (
    id          INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id     INTEGER,
    task_key    TEXT,
    type        TEXT,
    diff        TEXT,
    title       TEXT,
    coins       INTEGER,
    xp          INTEGER,
    completed   INTEGER DEFAULT 0,
    created_at  TEXT DEFAULT (datetime('now')),
    FOREIGN KEY(user_id) REFERENCES users(id)
  );
  CREATE TABLE IF NOT EXISTS friends (
    id        INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id   INTEGER,
    friend_id INTEGER,
    FOREIGN KEY(user_id)   REFERENCES users(id),
    FOREIGN KEY(friend_id) REFERENCES users(id)
  );
  CREATE TABLE IF NOT EXISTS history (
    id         INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id    INTEGER,
    icon       TEXT,
    title      TEXT,
    type       TEXT,
    diff       TEXT,
    coins      INTEGER,
    xp         INTEGER,
    item_name  TEXT,
    created_at TEXT DEFAULT (datetime('now')),
    FOREIGN KEY(user_id) REFERENCES users(id)
  );
`);

// ── HELPERS ───────────────────────────────────────────────
function genCode() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let code = 'TQ-';
  for (let i = 0; i < 4; i++) code += chars[Math.floor(Math.random() * chars.length)];
  // Check uniqueness
  const exists = db.prepare('SELECT id FROM users WHERE code = ?').get(code);
  return exists ? genCode() : code;
}

// ── PASSPORT ──────────────────────────────────────────────
passport.use(new GoogleStrategy({
  clientID:     process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL:  process.env.BASE_URL + '/auth/google/callback',
}, (accessToken, refreshToken, profile, done) => {
  const email  = profile.emails?.[0]?.value || '';
  const name   = profile.displayName || 'User';
  const avatar = profile.photos?.[0]?.value || '🌿';

  let user = db.prepare('SELECT * FROM users WHERE google_id = ?').get(profile.id);
  if (!user) {
    const code = genCode();
    db.prepare(`INSERT INTO users (google_id, name, email, avatar, code)
                VALUES (?, ?, ?, ?, ?)`).run(profile.id, name, email, avatar, code);
    user = db.prepare('SELECT * FROM users WHERE google_id = ?').get(profile.id);
    // Starter inventory
    db.prepare('INSERT INTO inventory (user_id, item_id, count) VALUES (?,?,?)').run(user.id, 'energy', 2);
    db.prepare('INSERT INTO inventory (user_id, item_id, count) VALUES (?,?,?)').run(user.id, 'scroll', 1);
    db.prepare('INSERT INTO inventory (user_id, item_id, count) VALUES (?,?,?)').run(user.id, 'clover', 1);
  }
  return done(null, user);
}));

passport.serializeUser((user, done)   => done(null, user.id));
passport.deserializeUser((id, done)   => {
  const user = db.prepare('SELECT * FROM users WHERE id = ?').get(id);
  done(null, user || false);
});

// ── MIDDLEWARE ────────────────────────────────────────────
app.set('trust proxy', 1);
app.use(cors({ origin: process.env.BASE_URL, credentials: true }));
app.use(express.json());
app.use(session({
  store: new SqliteStore({ client: db }),
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
    secure: process.env.NODE_ENV === 'production',
    sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax'
  }
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, 'public')));

// ── AUTH GUARD ────────────────────────────────────────────
function auth(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.status(401).json({ error: 'Not authenticated' });
}

// ── AUTH ROUTES ───────────────────────────────────────────
app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

app.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/?error=auth' }),
  (req, res) => res.redirect('/')
);

app.get('/auth/logout', (req, res) => {
  req.logout(() => res.redirect('/'));
});

app.get('/auth/me', (req, res) => {
  if (!req.user) return res.json({ user: null });
  const inv = db.prepare('SELECT item_id, count FROM inventory WHERE user_id = ?').all(req.user.id);
  const inventory = {};
  inv.forEach(i => { if (i.count > 0) inventory[i.item_id] = i.count; });
  res.json({ user: { ...req.user, inventory } });
});

// ── USER API ──────────────────────────────────────────────
app.post('/api/user/update', auth, (req, res) => {
  const { coins, xp, level, streak, premium } = req.body;
  db.prepare(`UPDATE users SET coins=?, xp=?, level=?, streak=?, premium=? WHERE id=?`)
    .run(coins, xp, level, streak, premium ? 1 : 0, req.user.id);
  res.json({ ok: true });
});

app.post('/api/user/name', auth, (req, res) => {
  const { name } = req.body;
  if (!name || name.length > 30) return res.status(400).json({ error: 'Invalid name' });
  db.prepare('UPDATE users SET name = ? WHERE id = ?').run(name, req.user.id);
  res.json({ ok: true });
});

// ── TASKS API ─────────────────────────────────────────────
app.get('/api/tasks', auth, (req, res) => {
  const tasks = db.prepare('SELECT * FROM tasks WHERE user_id = ? ORDER BY created_at DESC LIMIT 50')
    .all(req.user.id);
  res.json(tasks);
});

app.post('/api/tasks/add', auth, (req, res) => {
  const { task_key, type, diff, title, coins, xp } = req.body;
  const result = db.prepare(`INSERT INTO tasks (user_id, task_key, type, diff, title, coins, xp)
    VALUES (?,?,?,?,?,?,?)`).run(req.user.id, task_key, type, diff, title, coins, xp);
  res.json({ id: result.lastInsertRowid });
});

app.post('/api/tasks/complete', auth, (req, res) => {
  const { task_id, coins_earned, xp_earned, item_name, icon, title, type, diff } = req.body;
  db.prepare('UPDATE tasks SET completed = 1 WHERE id = ? AND user_id = ?')
    .run(task_id, req.user.id);
  // Update stats
  const user = db.prepare('SELECT * FROM users WHERE id = ?').get(req.user.id);
  let newXP = user.xp + xp_earned;
  let newLevel = user.level;
  const xpNeeded = (l) => l * 100 + (l - 1) * 50;
  while (newXP >= xpNeeded(newLevel)) { newXP -= xpNeeded(newLevel); newLevel++; }
  db.prepare('UPDATE users SET coins = coins + ?, xp = ?, level = ? WHERE id = ?')
    .run(coins_earned, newXP, newLevel, req.user.id);
  // History
  db.prepare(`INSERT INTO history (user_id, icon, title, type, diff, coins, xp, item_name)
    VALUES (?,?,?,?,?,?,?,?)`).run(req.user.id, icon, title, type, diff, coins_earned, xp_earned, item_name || null);
  const leveled = newLevel > user.level;
  res.json({ ok: true, newLevel, leveled, newXP });
});

app.post('/api/tasks/delete', auth, (req, res) => {
  db.prepare('DELETE FROM tasks WHERE id = ? AND user_id = ?').run(req.body.task_id, req.user.id);
  res.json({ ok: true });
});

// ── INVENTORY API ─────────────────────────────────────────
app.post('/api/inventory/add', auth, (req, res) => {
  const { item_id, amount } = req.body;
  const existing = db.prepare('SELECT * FROM inventory WHERE user_id = ? AND item_id = ?')
    .get(req.user.id, item_id);
  if (existing) {
    db.prepare('UPDATE inventory SET count = count + ? WHERE user_id = ? AND item_id = ?')
      .run(amount, req.user.id, item_id);
  } else {
    db.prepare('INSERT INTO inventory (user_id, item_id, count) VALUES (?,?,?)')
      .run(req.user.id, item_id, amount);
  }
  res.json({ ok: true });
});

app.post('/api/inventory/remove', auth, (req, res) => {
  const { item_id } = req.body;
  db.prepare('UPDATE inventory SET count = MAX(0, count - 1) WHERE user_id = ? AND item_id = ?')
    .run(req.user.id, item_id);
  res.json({ ok: true });
});

// ── FRIENDS API ───────────────────────────────────────────
app.get('/api/friends', auth, (req, res) => {
  const friends = db.prepare(`
    SELECT u.id, u.name, u.avatar, u.level, u.xp, u.code
    FROM friends f JOIN users u ON f.friend_id = u.id
    WHERE f.user_id = ?`).all(req.user.id);
  res.json(friends);
});

app.post('/api/friends/add', auth, (req, res) => {
  const { code } = req.body;
  if (!code) return res.status(400).json({ error: 'No code' });
  const friend = db.prepare('SELECT * FROM users WHERE code = ?').get(code.toUpperCase());
  if (!friend) return res.status(404).json({ error: 'User not found' });
  if (friend.id === req.user.id) return res.status(400).json({ error: 'own_code' });
  const exists = db.prepare('SELECT id FROM friends WHERE user_id = ? AND friend_id = ?')
    .get(req.user.id, friend.id);
  if (exists) return res.status(400).json({ error: 'already_added' });
  db.prepare('INSERT INTO friends (user_id, friend_id) VALUES (?,?)').run(req.user.id, friend.id);
  db.prepare('INSERT INTO friends (user_id, friend_id) VALUES (?,?)').run(friend.id, req.user.id);
  res.json({ ok: true, friend: { id: friend.id, name: friend.name, avatar: friend.avatar, level: friend.level, xp: friend.xp, code: friend.code } });
});

app.post('/api/friends/remove', auth, (req, res) => {
  const { friend_id } = req.body;
  db.prepare('DELETE FROM friends WHERE user_id = ? AND friend_id = ?').run(req.user.id, friend_id);
  db.prepare('DELETE FROM friends WHERE user_id = ? AND friend_id = ?').run(friend_id, req.user.id);
  res.json({ ok: true });
});

// ── TRADE API ─────────────────────────────────────────────
app.post('/api/trade', auth, (req, res) => {
  const { friend_id, give_item, get_item } = req.body;
  // Check you have the item
  const myItem = db.prepare('SELECT count FROM inventory WHERE user_id = ? AND item_id = ?')
    .get(req.user.id, give_item);
  if (!myItem || myItem.count <= 0) return res.status(400).json({ error: 'no_item' });
  // Check friend has the item
  const theirItem = db.prepare('SELECT count FROM inventory WHERE user_id = ? AND item_id = ?')
    .get(friend_id, get_item);
  if (!theirItem || theirItem.count <= 0) return res.status(400).json({ error: 'friend_no_item' });
  // Execute trade
  db.prepare('UPDATE inventory SET count = count - 1 WHERE user_id = ? AND item_id = ?').run(req.user.id, give_item);
  db.prepare('UPDATE inventory SET count = count - 1 WHERE user_id = ? AND item_id = ?').run(friend_id, get_item);
  // Add received items
  const myGet = db.prepare('SELECT id FROM inventory WHERE user_id = ? AND item_id = ?').get(req.user.id, get_item);
  if (myGet) db.prepare('UPDATE inventory SET count = count + 1 WHERE user_id = ? AND item_id = ?').run(req.user.id, get_item);
  else db.prepare('INSERT INTO inventory (user_id, item_id, count) VALUES (?,?,1)').run(req.user.id, get_item);
  const theirGet = db.prepare('SELECT id FROM inventory WHERE user_id = ? AND item_id = ?').get(friend_id, give_item);
  if (theirGet) db.prepare('UPDATE inventory SET count = count + 1 WHERE user_id = ? AND item_id = ?').run(friend_id, give_item);
  else db.prepare('INSERT INTO inventory (user_id, item_id, count) VALUES (?,?,1)').run(friend_id, give_item);
  res.json({ ok: true });
});

// ── HISTORY API ───────────────────────────────────────────
app.get('/api/history', auth, (req, res) => {
  const history = db.prepare('SELECT * FROM history WHERE user_id = ? ORDER BY created_at DESC LIMIT 30')
    .all(req.user.id);
  res.json(history);
});

// ── LEADERBOARD ───────────────────────────────────────────
app.get('/api/leaderboard', auth, (req, res) => {
  const me = db.prepare('SELECT id, name, avatar, level, xp, code FROM users WHERE id = ?').get(req.user.id);
  const friends = db.prepare(`
    SELECT u.id, u.name, u.avatar, u.level, u.xp, u.code
    FROM friends f JOIN users u ON f.friend_id = u.id
    WHERE f.user_id = ?`).all(req.user.id);
  const all = [{ ...me, isMe: true }, ...friends.map(f => ({ ...f, isMe: false }))];
  all.sort((a, b) => (b.xp + b.level * 100) - (a.xp + a.level * 100));
  res.json(all);
});

// ── SHOP / BUY ────────────────────────────────────────────
app.post('/api/shop/buy', auth, (req, res) => {
  const { item_id, price } = req.body;
  const user = db.prepare('SELECT * FROM users WHERE id = ?').get(req.user.id);
  if (user.coins < price) return res.status(400).json({ error: 'not_enough_coins' });
  db.prepare('UPDATE users SET coins = coins - ? WHERE id = ?').run(price, req.user.id);
  const existing = db.prepare('SELECT * FROM inventory WHERE user_id = ? AND item_id = ?').get(req.user.id, item_id);
  if (existing) db.prepare('UPDATE inventory SET count = count + 1 WHERE user_id = ? AND item_id = ?').run(req.user.id, item_id);
  else db.prepare('INSERT INTO inventory (user_id, item_id, count) VALUES (?,?,1)').run(req.user.id, item_id);
  res.json({ ok: true, newCoins: user.coins - price });
});

// ── WAYFORPAY ─────────────────────────────────────────────
const crypto = require('crypto');
const WFP_MERCHANT = process.env.WFP_MERCHANT_LOGIN || '';
const WFP_SECRET   = process.env.WFP_SECRET_KEY || '';

function wfpSign(params) {
  const str = params.join(';');
  return crypto.createHmac('md5', WFP_SECRET).update(str).digest('hex');
}

app.post('/api/wayforpay/checkout', auth, (req, res) => {
  if (!WFP_MERCHANT || !WFP_SECRET) return res.json({ error: 'no_wfp' });
  const { plan } = req.body;
  const prices = { Pro: '199', Annual: '1599' }; // UAH
  const amount = prices[plan] || '199';
  const orderId = `TQ-${req.user.id}-${Date.now()}`;
  const orderDate = Math.floor(Date.now() / 1000);
  const productName = `TaskQuest Premium ${plan}`;
  const returnUrl = process.env.BASE_URL + '/?premium=success';
  const serviceUrl = process.env.BASE_URL + '/api/wayforpay/callback';

  const signString = [
    WFP_MERCHANT, returnUrl, orderId, orderDate,
    amount, 'UAH', productName, '1', amount
  ];
  const signature = wfpSign(signString);

  res.json({
    url: 'https://secure.wayforpay.com/pay',
    form: {
      merchantAccount: WFP_MERCHANT,
      merchantDomainName: 'taskquest-production-bb72.up.railway.app',
      orderReference: orderId,
      orderDate,
      amount,
      currency: 'UAH',
      productName,
      productCount: '1',
      productPrice: amount,
      returnUrl,
      serviceUrl,
      merchantSignature: signature,
    }
  });
});

app.post('/api/wayforpay/callback', express.urlencoded({ extended: true }), (req, res) => {
  const b = req.body;
  const signStr = [
    b.merchantAccount, b.orderReference, b.amount, b.currency,
    b.authCode, b.cardPan, b.transactionStatus, b.reasonCode
  ].join(';');
  const sign = crypto.createHmac('md5', WFP_SECRET).update(signStr).digest('hex');
  if (sign !== b.merchantSignature) return res.status(400).send('Bad sign');
  if (b.transactionStatus === 'Approved') {
    const userId = b.orderReference.split('-')[1];
    db.prepare('UPDATE users SET premium = 1 WHERE id = ?').run(userId);
  }
  const responseSign = crypto.createHmac('md5', WFP_SECRET)
    .update([b.orderReference, 'accept'].join(';')).digest('hex');
  res.json({ orderReference: b.orderReference, status: 'accept', time: Math.floor(Date.now()/1000), signature: responseSign });
});

// ── SERVE FRONTEND ────────────────────────────────────────
app.get('/{*splat}', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// ── START ─────────────────────────────────────────────────
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`\n🌿 TaskQuest запущено!`);
  console.log(`👉 Відкрий у браузері: http://localhost:${PORT}\n`);
});
