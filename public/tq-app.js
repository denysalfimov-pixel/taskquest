'use strict';
// ═══════════════════════════════════════════════════════════════
//  i18n
// ═══════════════════════════════════════════════════════════════
const LANG = {
  ua: {
    'auth.tagline':'Виконуй завдання — живи яскравіше',
    'auth.register':'Реєстрація','auth.login':'Увійти',
    'auth.name':"Ім'я",'auth.namePh':"Твоє ім'я",
    'auth.email':'Email','auth.password':'Пароль',
    'auth.avatar':'Обери аватар',
    'auth.createBtn':'Створити акаунт 🚀','auth.loginBtn':'Увійти',
    'auth.or':'або','auth.google':'Увійти через Google',
    'nav.main':'Головне','nav.tasks':'Завдання','nav.inventory':'Інвентар',
    'nav.shop':'Магазин','nav.social':'Соціальне','nav.friends':'Друзі',
    'nav.leaderboard':'Рейтинг','nav.stats':'Статистика',
    'nav.other':'Інше','nav.premium':'Premium','nav.settings':'Налаштування','nav.logout':'Вийти',
    'search.ph':'Пошук завдань...',
    'tasks.title':'📋 Завдання','tasks.sub':'Виконуй — отримуй нагороди',
    'tasks.genTitle':'🎲 Згенерувати нове завдання',
    'tasks.anyType':'🎲 Будь-який','tasks.home':'🏠 Дім','tasks.outdoor':'🌳 Вулиця',
    'tasks.anyDiff':'✨ Будь-яка','tasks.generate':'Генерувати',
    'tasks.genLimit':'Залишилось генерацій сьогодні:',
    'tasks.noMore':'Ліміт вичерпано. Оновлення о 00:00',
    'tasks.empty':'Завдань немає','tasks.emptyHint':'Натисни "Генерувати" щоб отримати завдання',
    'tasks.maxActive':'Максимум 9 активних завдань!',
    'tasks.complete':'✅ Виконати','tasks.skip':'✕',
    'tasks.ago':'хв тому','tasks.just':'Щойно',
    'diff.easy':'Легко','diff.medium':'Середньо','diff.hard':'Важко','diff.legendary':'Легендарно',
    'filter.all':'Всі',
    'inv.title':'🎒 Інвентар','inv.capacity':'Зайнято: {n} / {max} • ліміт стоку — 5 шт кожного',
    'inv.empty':'Інвентар порожній','inv.emptyHint':'Виконуй завдання або купуй в магазині',
    'shop.title':'🏪 Магазин','shop.sub':'Запаси обмежені — оновлення щодня',
    'shop.notEnough':'Недостатньо монет!','shop.full':'Сток повний!','shop.noStock':'Немає в наявності',
    'shop.buy':'🛒 Купити','shop.bought':'Куплено!','shop.inStock':'В наявності:',
    'friends.title':'👥 Друзі','friends.myFriends':'Мої друзі',
    'friends.codePh':'Код: TQ-0000','friends.add':'+ Додати',
    'friends.myCode':'Твій код:','friends.copy':'📋 Копіювати',
    'friends.copied':'Скопійовано!','friends.badCode':'Невірний формат коду',
    'friends.alreadyAdded':'Вже доданий','friends.ownCode':'Це твій код',
    'friends.added':'Друга додано!','friends.empty':'Немає друзів. Додай за кодом!',
    'friends.online':'● Онлайн','friends.offline':'● Офлайн',
    'friends.remove':'Видалити',
    'trade.title':'🔄 Обмін предметами','trade.give':'Ти даєш','trade.get':'Ти отримуєш',
    'trade.confirm':'✨ Підтвердити обмін','trade.noItem':'Оберіть предмет!',
    'trade.noFriend':'Оберіть друга!','trade.done':'Обмін виконано!',
    'lb.title':'🏆 Рейтинг','lb.sub':'Тільки реальні гравці з твого кола',
    'lb.empty':'Рейтинг порожній','lb.emptyHint':'Додай друзів щоб побачити рейтинг',
    'lb.onlyYou':'Тільки ти поки що!','lb.you':'(Ти)',
    'stats.title':'📊 Статистика','stats.history':'📜 Історія',
    'stats.noHistory':'Ще немає виконаних завдань',
    'premium.title':'TaskQuest Premium','premium.sub':'Розблокуй повний потенціал',
    'premium.note':'💳 Безпечна оплата. Скасувати можна в будь-який момент.',
    'premium.popular':'Найпопулярніший','premium.best':'Найкраща ціна',
    'premium.perMonth':'/ міс','premium.perYear':'/ рік','premium.free':'Безкоштовно',
    'premium.subscribe':'Підписатися','premium.current':'Поточний план',
    'settings.title':'⚙️ Налаштування',
    'settings.profile':'Профіль','settings.changeName':'Змінити ім\'я',
    'settings.notifications':'Сповіщення','settings.notifTasks':'Нагадування про завдання',
    'settings.notifFriends':'Активність друзів','settings.sound':'Звуки',
    'settings.privacy':'Приватність','settings.showInLB':'Показувати в рейтингу',
    'settings.danger':'Небезпечна зона','settings.resetProgress':'Скинути прогрес',
    'settings.deleteAccount':'Видалити акаунт',
    'widget.profile':'Профіль','widget.streak':'Серія 🔥',
    'widget.buffs':'Активні бафи','widget.daily':'Щоденне завдання',
    'confirm.title':'✅ Підтвердження виконання',
    'confirm.photoHint':'Натисни щоб прикріпити фото',
    'confirm.photoDone':'✅ Фото прикріплено!',
    'confirm.notePh':'Коментар (необов\'язково)...','confirm.btn':'🎉 Підтвердити!',
    'reward.collect':'🌟 Забрати!','reward.title':'Завдання виконано!',
    'reward.legendary':'🔥 ЛЕГЕНДАРНЕ ВИКОНАННЯ!',
    'lu.label':'НОВИЙ РІВЕНЬ!','lu.btn':'🚀 Вперед!',
    'item.useBtn':'✨ Використати',
    'toast.taskDone':'Завдання виконано!','toast.itemBought':'Куплено!',
    'toast.levelUp':'Новий рівень!','toast.itemUsed':'Предмет використано!',
    'toast.tradeOk':'Обмін виконано!',
  },
  en: {
    'auth.tagline':'Complete tasks — live brighter',
    'auth.register':'Register','auth.login':'Sign In',
    'auth.name':'Name','auth.namePh':'Your name',
    'auth.email':'Email','auth.password':'Password',
    'auth.avatar':'Choose avatar',
    'auth.createBtn':'Create account 🚀','auth.loginBtn':'Sign In',
    'auth.or':'or','auth.google':'Continue with Google',
    'nav.main':'Main','nav.tasks':'Tasks','nav.inventory':'Inventory',
    'nav.shop':'Shop','nav.social':'Social','nav.friends':'Friends',
    'nav.leaderboard':'Leaderboard','nav.stats':'Statistics',
    'nav.other':'Other','nav.premium':'Premium','nav.settings':'Settings','nav.logout':'Log out',
    'search.ph':'Search tasks...',
    'tasks.title':'📋 Tasks','tasks.sub':'Complete tasks — earn rewards',
    'tasks.genTitle':'🎲 Generate a new task',
    'tasks.anyType':'🎲 Any type','tasks.home':'🏠 Home','tasks.outdoor':'🌳 Outdoor',
    'tasks.anyDiff':'✨ Any difficulty','tasks.generate':'Generate',
    'tasks.genLimit':'Generations left today:',
    'tasks.noMore':'Limit reached. Resets at midnight',
    'tasks.empty':'No tasks','tasks.emptyHint':'Press "Generate" to get tasks',
    'tasks.maxActive':'Max 9 active tasks!',
    'tasks.complete':'✅ Complete','tasks.skip':'✕',
    'tasks.ago':'min ago','tasks.just':'Just now',
    'diff.easy':'Easy','diff.medium':'Medium','diff.hard':'Hard','diff.legendary':'Legendary',
    'filter.all':'All',
    'inv.title':'🎒 Inventory','inv.capacity':'Used: {n} / {max} • stock limit — 5 each',
    'inv.empty':'Inventory is empty','inv.emptyHint':'Complete tasks or buy in the shop',
    'shop.title':'🏪 Shop','shop.sub':'Limited stock — resets daily',
    'shop.notEnough':'Not enough coins!','shop.full':'Stock full!','shop.noStock':'Out of stock',
    'shop.buy':'🛒 Buy','shop.bought':'Purchased!','shop.inStock':'In stock:',
    'friends.title':'👥 Friends','friends.myFriends':'My Friends',
    'friends.codePh':'Code: TQ-0000','friends.add':'+ Add',
    'friends.myCode':'Your code:','friends.copy':'📋 Copy',
    'friends.copied':'Copied!','friends.badCode':'Invalid code format',
    'friends.alreadyAdded':'Already added','friends.ownCode':'That\'s your code',
    'friends.added':'Friend added!','friends.empty':'No friends yet. Add by code!',
    'friends.online':'● Online','friends.offline':'● Offline',
    'friends.remove':'Remove',
    'trade.title':'🔄 Item Trade','trade.give':'You give','trade.get':'You receive',
    'trade.confirm':'✨ Confirm trade','trade.noItem':'Select an item!',
    'trade.noFriend':'Select a friend!','trade.done':'Trade complete!',
    'lb.title':'🏆 Leaderboard','lb.sub':'Only real players from your circle',
    'lb.empty':'Leaderboard is empty','lb.emptyHint':'Add friends to see the leaderboard',
    'lb.onlyYou':'Just you so far!','lb.you':'(You)',
    'stats.title':'📊 Statistics','stats.history':'📜 History',
    'stats.noHistory':'No completed tasks yet',
    'premium.title':'TaskQuest Premium','premium.sub':'Unlock your full potential',
    'premium.note':'💳 Secure payment. Cancel anytime.',
    'premium.popular':'Most Popular','premium.best':'Best Value',
    'premium.perMonth':'/ mo','premium.perYear':'/ yr','premium.free':'Free',
    'premium.subscribe':'Subscribe','premium.current':'Current plan',
    'settings.title':'⚙️ Settings',
    'settings.profile':'Profile','settings.changeName':'Change name',
    'settings.notifications':'Notifications','settings.notifTasks':'Task reminders',
    'settings.notifFriends':'Friend activity','settings.sound':'Sounds',
    'settings.privacy':'Privacy','settings.showInLB':'Show in leaderboard',
    'settings.danger':'Danger Zone','settings.resetProgress':'Reset progress',
    'settings.deleteAccount':'Delete account',
    'widget.profile':'Profile','widget.streak':'Streak 🔥',
    'widget.buffs':'Active Buffs','widget.daily':'Daily Challenge',
    'confirm.title':'✅ Confirm Completion',
    'confirm.photoHint':'Click to attach a photo',
    'confirm.photoDone':'✅ Photo attached!',
    'confirm.notePh':'Comment (optional)...','confirm.btn':'🎉 Confirm!',
    'reward.collect':'🌟 Collect!','reward.title':'Task completed!',
    'reward.legendary':'🔥 LEGENDARY COMPLETION!',
    'lu.label':'LEVEL UP!','lu.btn':'🚀 Let\'s go!',
    'item.useBtn':'✨ Use',
    'toast.taskDone':'Task completed!','toast.itemBought':'Purchased!',
    'toast.levelUp':'Level up!','toast.itemUsed':'Item used!',
    'toast.tradeOk':'Trade complete!',
  },
  fr: {
    'auth.tagline':'Accomplis des tâches — vis plus brillamment',
    'auth.register':'S\'inscrire','auth.login':'Se connecter',
    'auth.name':'Prénom','auth.namePh':'Ton prénom',
    'auth.email':'Email','auth.password':'Mot de passe',
    'auth.avatar':'Choisir un avatar',
    'auth.createBtn':'Créer un compte 🚀','auth.loginBtn':'Se connecter',
    'auth.or':'ou','auth.google':'Continuer avec Google',
    'nav.main':'Principal','nav.tasks':'Tâches','nav.inventory':'Inventaire',
    'nav.shop':'Boutique','nav.social':'Social','nav.friends':'Amis',
    'nav.leaderboard':'Classement','nav.stats':'Statistiques',
    'nav.other':'Autre','nav.premium':'Premium','nav.settings':'Paramètres','nav.logout':'Se déconnecter',
    'search.ph':'Rechercher des tâches...',
    'tasks.title':'📋 Tâches','tasks.sub':'Accomplis — gagne des récompenses',
    'tasks.genTitle':'🎲 Générer une nouvelle tâche',
    'tasks.anyType':'🎲 N\'importe quel','tasks.home':'🏠 Maison','tasks.outdoor':'🌳 Extérieur',
    'tasks.anyDiff':'✨ N\'importe quelle','tasks.generate':'Générer',
    'tasks.genLimit':'Générations restantes aujourd\'hui:',
    'tasks.noMore':'Limite atteinte. Réinitialisation à minuit',
    'tasks.empty':'Pas de tâches','tasks.emptyHint':'Appuie sur "Générer" pour obtenir des tâches',
    'tasks.maxActive':'Maximum 9 tâches actives!',
    'tasks.complete':'✅ Accomplir','tasks.skip':'✕',
    'tasks.ago':'min','tasks.just':'À l\'instant',
    'diff.easy':'Facile','diff.medium':'Moyen','diff.hard':'Difficile','diff.legendary':'Légendaire',
    'filter.all':'Tout',
    'inv.title':'🎒 Inventaire','inv.capacity':'Utilisé: {n} / {max} • limite de stock — 5 chaque',
    'inv.empty':'Inventaire vide','inv.emptyHint':'Accomplis des tâches ou achète en boutique',
    'shop.title':'🏪 Boutique','shop.sub':'Stock limité — réinitialisation quotidienne',
    'shop.notEnough':'Pas assez de pièces!','shop.full':'Stock plein!','shop.noStock':'Rupture de stock',
    'shop.buy':'🛒 Acheter','shop.bought':'Acheté!','shop.inStock':'En stock:',
    'friends.title':'👥 Amis','friends.myFriends':'Mes amis',
    'friends.codePh':'Code: TQ-0000','friends.add':'+ Ajouter',
    'friends.myCode':'Ton code:','friends.copy':'📋 Copier',
    'friends.copied':'Copié!','friends.badCode':'Format de code invalide',
    'friends.alreadyAdded':'Déjà ajouté','friends.ownCode':'C\'est ton code',
    'friends.added':'Ami ajouté!','friends.empty':'Pas d\'amis. Ajoute par code!',
    'friends.online':'● En ligne','friends.offline':'● Hors ligne',
    'friends.remove':'Supprimer',
    'trade.title':'🔄 Échange d\'objets','trade.give':'Tu donnes','trade.get':'Tu reçois',
    'trade.confirm':'✨ Confirmer l\'échange','trade.noItem':'Sélectionne un objet!',
    'trade.noFriend':'Sélectionne un ami!','trade.done':'Échange réussi!',
    'lb.title':'🏆 Classement','lb.sub':'Seulement de vrais joueurs',
    'lb.empty':'Classement vide','lb.emptyHint':'Ajoute des amis pour voir le classement',
    'lb.onlyYou':'Seulement toi pour l\'instant!','lb.you':'(Toi)',
    'stats.title':'📊 Statistiques','stats.history':'📜 Historique',
    'stats.noHistory':'Aucune tâche accomplie pour le moment',
    'premium.title':'TaskQuest Premium','premium.sub':'Libère ton plein potentiel',
    'premium.note':'💳 Paiement sécurisé. Annulable à tout moment.',
    'premium.popular':'Le plus populaire','premium.best':'Meilleur rapport qualité-prix',
    'premium.perMonth':'/ mois','premium.perYear':'/ an','premium.free':'Gratuit',
    'premium.subscribe':'S\'abonner','premium.current':'Plan actuel',
    'settings.title':'⚙️ Paramètres',
    'settings.profile':'Profil','settings.changeName':'Changer de nom',
    'settings.notifications':'Notifications','settings.notifTasks':'Rappels de tâches',
    'settings.notifFriends':'Activité des amis','settings.sound':'Sons',
    'settings.privacy':'Confidentialité','settings.showInLB':'Afficher dans le classement',
    'settings.danger':'Zone dangereuse','settings.resetProgress':'Réinitialiser la progression',
    'settings.deleteAccount':'Supprimer le compte',
    'widget.profile':'Profil','widget.streak':'Série 🔥',
    'widget.buffs':'Buffs actifs','widget.daily':'Défi quotidien',
    'confirm.title':'✅ Confirmer l\'accomplissement',
    'confirm.photoHint':'Clique pour joindre une photo',
    'confirm.photoDone':'✅ Photo jointe!',
    'confirm.notePh':'Commentaire (facultatif)...','confirm.btn':'🎉 Confirmer!',
    'reward.collect':'🌟 Récupérer!','reward.title':'Tâche accomplie!',
    'reward.legendary':'🔥 ACCOMPLISSEMENT LÉGENDAIRE!',
    'lu.label':'NIVEAU SUPÉRIEUR!','lu.btn':'🚀 En avant!',
    'item.useBtn':'✨ Utiliser',
    'toast.taskDone':'Tâche accomplie!','toast.itemBought':'Acheté!',
    'toast.levelUp':'Niveau supérieur!','toast.itemUsed':'Objet utilisé!',
    'toast.tradeOk':'Échange réussi!',
  }
};

let currentLang = 'ua';
function t(key) { return (LANG[currentLang] && LANG[currentLang][key]) || LANG.ua[key] || key; }
function setLang(lang) {
  currentLang = lang;
  document.documentElement.setAttribute('data-lang', lang);
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
  const idx = {ua:0,en:1,fr:2}[lang];
  document.querySelectorAll('.lang-btn')[idx]?.classList.add('active');
  applyI18n();
  renderAll();
  if (S.user) saveState();
}
function applyI18n() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const k = el.getAttribute('data-i18n');
    if (el.tagName === 'OPTION') el.textContent = t(k);
    else el.textContent = t(k);
  });
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    el.placeholder = t(el.getAttribute('data-i18n-ph'));
  });
}

// ═══════════════════════════════════════════════════════════════
//  ITEMS DB
// ═══════════════════════════════════════════════════════════════
// rarity → spawn chance in shop per day (like Grow a Garden)
const RARITY_SPAWN = { common:0.95, rare:0.55, epic:0.20, legendary:0.04, mythic:0.01 };
const RARITY_STOCK = { common:[3,5], rare:[2,3], epic:[1,2], legendary:[1,1], mythic:[1,1] };

const ITEMS = {
  // ── COMMON ─────────────────────────────────────────────
  energy:   { id:'energy',   icon:'⚡', name:{ua:'Енергетик',en:'Energy Drink',fr:'Boisson Énergétique'}, desc:{ua:'+100% XP за наступне завдання',en:'+100% XP on next task',fr:'+100% XP sur la prochaine'}, rarity:'common',  price:30,  maxStock:5, effect:'xp2',     buffLabel:'XP ×2',        buffColor:'#bc8cff' },
  scroll:   { id:'scroll',   icon:'📜', name:{ua:'Сувій пропуску',en:'Skip Scroll',fr:'Parchemin de saut'}, desc:{ua:'Пропустити завдання без штрафу',en:'Skip a task penalty-free',fr:'Passer une tâche sans pénalité'}, rarity:'common',  price:40,  maxStock:5, effect:'skip',    buffLabel:'Пропуск',      buffColor:'#8b949e' },
  shroom:   { id:'shroom',   icon:'🍄', name:{ua:'Чарівний гриб',en:'Magic Mushroom',fr:'Champignon magique'}, desc:{ua:'+5 монет до кожної нагороди',en:'+5 coins to every reward',fr:'+5 pièces à chaque récompense'}, rarity:'common',  price:25,  maxStock:5, effect:'coin5',   buffLabel:'Монети +5',    buffColor:'#3fb950' },
  ticket:   { id:'ticket',   icon:'🎟️', name:{ua:'Золотий квиток',en:'Gold Ticket',fr:'Ticket doré'}, desc:{ua:'+5 генерацій сьогодні',en:'+5 generations today',fr:'+5 générations aujourd\'hui'}, rarity:'common',  price:35,  maxStock:5, effect:'gen5',    buffLabel:'+5 генерацій',  buffColor:'#f0c674' },
  tea:      { id:'tea',      icon:'🍵', name:{ua:'Трав\'яний чай',en:'Herbal Tea',fr:'Thé aux herbes'}, desc:{ua:'Відновити серію якщо забув вчора',en:'Restore streak if you forgot yesterday',fr:'Restaurer la série'}, rarity:'common',  price:45,  maxStock:5, effect:'streak1', buffLabel:'Серія +1',     buffColor:'#39d0d8' },
  // ── RARE ───────────────────────────────────────────────
  clover:   { id:'clover',   icon:'🍀', name:{ua:'Конюшина удачі',en:'Lucky Clover',fr:'Trèfle chanceux'}, desc:{ua:'+50% монет за наступне завдання',en:'+50% coins on next task',fr:'+50% pièces sur la prochaine'}, rarity:'rare',    price:55,  maxStock:4, effect:'coin50',  buffLabel:'Монети +50%',  buffColor:'#f0c674' },
  moon:     { id:'moon',     icon:'🌙', name:{ua:'Місячне зілля',en:'Moon Potion',fr:'Potion lunaire'}, desc:{ua:'Важке завдання стає Середнім',en:'Hard task becomes Medium',fr:'Tâche difficile devient Moyenne'}, rarity:'rare',    price:60,  maxStock:4, effect:'easy1',   buffLabel:'Складність -1', buffColor:'#58a6ff' },
  flask:    { id:'flask',    icon:'🔥', name:{ua:'Вогненна фляга',en:'Fire Flask',fr:'Fiole de feu'}, desc:{ua:'Серія +1 день автоматично',en:'Streak +1 day automatically',fr:'Série +1 jour automatiquement'}, rarity:'rare',    price:70,  maxStock:4, effect:'streak',  buffLabel:'Серія +1',     buffColor:'#ff9100' },
  magnet:   { id:'magnet',   icon:'🧲', name:{ua:'Магніт',en:'Magnet',fr:'Aimant'}, desc:{ua:'Подвоїти предмети при дропі',en:'Double item drops',fr:'Doubler les drops d\'objets'}, rarity:'rare',    price:75,  maxStock:4, effect:'drop2',   buffLabel:'Дроп ×2',      buffColor:'#39d0d8' },
  lantern:  { id:'lantern',  icon:'🏮', name:{ua:'Ліхтар щастя',en:'Lucky Lantern',fr:'Lanterne chanceuse'}, desc:{ua:'+30% монет на 3 завдання',en:'+30% coins for 3 tasks',fr:'+30% pièces pour 3 tâches'}, rarity:'rare',    price:80,  maxStock:4, effect:'coin30',  buffLabel:'Монети +30%',  buffColor:'#f788c0' },
  // ── EPIC ───────────────────────────────────────────────
  crystal:  { id:'crystal',  icon:'🔮', name:{ua:'Кришталева куля',en:'Crystal Ball',fr:'Boule de cristal'}, desc:{ua:'Наступне завдання — гарантована нагорода',en:'Next task guaranteed reward item',fr:'Prochaine tâche récompense garantie'}, rarity:'epic',    price:90,  maxStock:3, effect:'reveal',  buffLabel:'Гарантований дроп', buffColor:'#39d0d8' },
  gem:      { id:'gem',      icon:'💎', name:{ua:'Веселковий камінь',en:'Rainbow Gem',fr:'Gemme arc-en-ciel'}, desc:{ua:'Отримати рандомний рідкісний предмет',en:'Get a random rare item',fr:'Obtenir un objet rare aléatoire'}, rarity:'epic',    price:110, maxStock:3, effect:'gift',    buffLabel:'Подарунок',    buffColor:'#f788c0' },
  mask:     { id:'mask',     icon:'🎭', name:{ua:'Золота маска',en:'Golden Mask',fr:'Masque doré'}, desc:{ua:'+200% XP на наступне завдання',en:'+200% XP on next task',fr:'+200% XP sur la prochaine tâche'}, rarity:'epic',    price:120, maxStock:3, effect:'xp3',     buffLabel:'XP ×3',        buffColor:'#f0c674' },
  compass:  { id:'compass',  icon:'🧭', name:{ua:'Компас долі',en:'Fate Compass',fr:'Boussole du destin'}, desc:{ua:'Гарантоване Легендарне завдання',en:'Guaranteed Legendary task',fr:'Tâche Légendaire garantie'}, rarity:'epic',    price:150, maxStock:2, effect:'forcelegend',buffLabel:'Легенда гарант.',buffColor:'#ff9100' },
  crown:    { id:'crown',    icon:'👑', name:{ua:'Корона знань',en:'Crown of Knowledge',fr:'Couronne du savoir'}, desc:{ua:'+50 XP за кожен рівень вгору',en:'+50 XP per level up',fr:'+50 XP par niveau'}, rarity:'epic',    price:130, maxStock:2, effect:'crownxp',  buffLabel:'Корона XP',    buffColor:'#bc8cff' },
  // ── LEGENDARY ─────────────────────────────────────────
  stardust: { id:'stardust', icon:'✨', name:{ua:'Зоряний пил',en:'Star Dust',fr:'Poussière d\'étoile'}, desc:{ua:'×2 нагорода з Легендарного завдання',en:'×2 reward from Legendary task',fr:'×2 récompense d\'une tâche Légendaire'}, rarity:'legendary',price:200, maxStock:2, effect:'legend2', buffLabel:'Легенда ×2',   buffColor:'#f0c674' },
  dragon:   { id:'dragon',   icon:'🐉', name:{ua:'Лускатий дракон',en:'Scaly Dragon',fr:'Dragon écailleux'}, desc:{ua:'+100% монет на 3 завдання',en:'+100% coins for 3 tasks',fr:'+100% pièces pour 3 tâches'}, rarity:'legendary',price:250, maxStock:2, effect:'coin100', buffLabel:'Монети ×2',    buffColor:'#ff4444' },
  phoenix:  { id:'phoenix',  icon:'🦅', name:{ua:'Фенікс',en:'Phoenix',fr:'Phénix'}, desc:{ua:'Зберегти серію навіть якщо пропустив 2 дні',en:'Save streak even after 2 missed days',fr:'Sauvegarder la série après 2 jours manqués'}, rarity:'legendary',price:300, maxStock:1, effect:'shield2', buffLabel:'Щит серії ×2', buffColor:'#ff6b00' },
  rainbow:  { id:'rainbow',  icon:'🌈', name:{ua:'Веселка',en:'Rainbow',fr:'Arc-en-ciel'}, desc:{ua:'Всі завдання = Легко на 5 хвилин',en:'All tasks = Easy for 5 minutes',fr:'Toutes tâches = Facile pendant 5 min'}, rarity:'legendary',price:280, maxStock:1, effect:'allearn', buffLabel:'Все Легко!',   buffColor:'#39d0d8' },
  // ── MYTHIC ────────────────────────────────────────────
  void:     { id:'void',     icon:'🌑', name:{ua:'Осколок Пустки',en:'Void Shard',fr:'Éclat du Vide'}, desc:{ua:'×5 монет та XP за наступне завдання',en:'×5 coins and XP for next task',fr:'×5 pièces et XP pour la prochaine tâche'}, rarity:'mythic',   price:500, maxStock:1, effect:'void5',   buffLabel:'VOID ×5',      buffColor:'#cc00ff' },
  cosmos:   { id:'cosmos',   icon:'🌌', name:{ua:'Космічний артефакт',en:'Cosmic Artifact',fr:'Artefact cosmique'}, desc:{ua:'Миттєво отримати 1000 XP',en:'Instantly gain 1000 XP',fr:'Gagner instantanément 1000 XP'}, rarity:'mythic',   price:600, maxStock:1, effect:'xp1000',  buffLabel:'1000 XP',      buffColor:'#cc00ff' },
  // ── BOOSTERS (rare) ───────────────────────────────────
  xpbooster:{ id:'xpbooster',icon:'🔋', name:{ua:'XP Буст',en:'XP Booster',fr:'Boost XP'}, desc:{ua:'×2 XP на наступні 3 завдання',en:'×2 XP for next 3 tasks',fr:'×2 XP pour 3 prochaines tâches'}, rarity:'rare', price:90, maxStock:3, effect:'xp2', buffLabel:'XP ×2 (3 завд.)', buffColor:'#bc8cff', buffUses:3 },
  coinboost:{ id:'coinboost',icon:'💰', name:{ua:'Монет Буст',en:'Coin Booster',fr:'Boost Pièces'}, desc:{ua:'×1.5 монет на наступні 3 завдання',en:'×1.5 coins for next 3 tasks',fr:'×1.5 pièces pour 3 tâches'}, rarity:'rare', price:75, maxStock:3, effect:'coin50', buffLabel:'Монети ×1.5 (3)', buffColor:'#f0c674', buffUses:3 },
};
const RARITY = {
  common:   {ua:'Звичайний',   en:'Common',    fr:'Commun'},
  rare:     {ua:'Рідкісний',   en:'Rare',      fr:'Rare'},
  epic:     {ua:'Епічний',     en:'Epic',      fr:'Épique'},
  legendary:{ua:'Легендарний', en:'Legendary', fr:'Légendaire'},
  mythic:   {ua:'✦ МІСТИЧНИЙ',en:'✦ MYTHIC',  fr:'✦ MYTHIQUE'},
};
function iName(item) { return item.name[currentLang] || item.name.ua; }
function iDesc(item)  { return item.desc[currentLang] || item.desc.ua; }

// ═══════════════════════════════════════════════════════════════
//  THEMES
// ═══════════════════════════════════════════════════════════════
const THEMES = {
  dark:   { label:'🌑 Dark',    vars:{} },
  ocean:  { label:'🌊 Ocean',   vars:{ '--bg':'#040d18','--bg2':'#071525','--bg3':'#0a1d33','--bg4':'#0e2542','--border':'#163452','--border2':'#1e4570','--text':'#cce8ff','--sub':'#6aa3cc','--sub2':'#4a7a99','--green':'#00b4ff','--blue':'#00d4ff','--purple':'#7b68ee' } },
  forest: { label:'🌿 Forest',  vars:{ '--bg':'#060f06','--bg2':'#0b1a0b','--bg3':'#0f230f','--bg4':'#132e13','--border':'#1a3d1a','--border2':'#225022','--text':'#d0f0d0','--sub':'#6aac6a','--sub2':'#4a884a','--green':'#4ade80','--blue':'#34d399','--purple':'#a78bfa' } },
  sunset: { label:'🌅 Sunset',  vars:{ '--bg':'#130800','--bg2':'#1f0d00','--bg3':'#2a1200','--bg4':'#361800','--border':'#4d2200','--border2':'#663000','--text':'#ffe8cc','--sub':'#cc8855','--sub2':'#aa6633','--green':'#ff6b35','--blue':'#fbbf24','--purple':'#f472b6' } },
  galaxy: { label:'🌌 Galaxy',  vars:{ '--bg':'#04001a','--bg2':'#07002a','--bg3':'#0b003a','--bg4':'#0f004a','--border':'#1a0066','--border2':'#220088','--text':'#e8d5ff','--sub':'#9966cc','--sub2':'#7744aa','--green':'#c084fc','--blue':'#818cf8','--purple':'#f472b6' } },
};

function applyTheme(id) {
  S.activeTheme = id;
  const theme = THEMES[id] || THEMES.dark;
  const root = document.documentElement;
  // Reset to defaults first
  ['--bg','--bg2','--bg3','--bg4','--border','--border2','--text','--sub','--sub2','--green','--blue','--purple'].forEach(v => root.style.removeProperty(v));
  Object.entries(theme.vars).forEach(([k,v]) => root.style.setProperty(k, v));
  saveState();
  fetch('/api/user/theme', { method:'POST', credentials:'include', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ theme: id }) }).catch(()=>{});
}

// ═══════════════════════════════════════════════════════════════
//  QUESTS
// ═══════════════════════════════════════════════════════════════
const QUEST_DEFS = [
  { id:'q_starter', icon:'🚀', title:'Перший крок', steps:[
    { need:1, type:'any', diff:'easy',   desc:'Виконай 1 легке завдання' },
    { need:2, type:'any', diff:'medium', desc:'Виконай 2 середніх завдання' },
    { need:1, type:'any', diff:'hard',   desc:'Виконай 1 важке завдання' },
  ], reward:{ coins:250, xp:500, item:'stardust' } },
  { id:'q_home', icon:'🏠', title:'Домашній майстер', steps:[
    { need:3, type:'home', diff:'any', desc:'Виконай 3 домашніх завдання' },
    { need:3, type:'home', diff:'any', desc:'Ще 3 домашніх завдання' },
    { need:2, type:'home', diff:'hard', desc:'2 важких домашніх завдання' },
  ], reward:{ coins:300, xp:600, item:'crystal' } },
  { id:'q_outdoor', icon:'🌳', title:'Природний герой', steps:[
    { need:2, type:'outdoor', diff:'any',       desc:'2 завдання на вулиці' },
    { need:3, type:'outdoor', diff:'any',       desc:'Ще 3 на вулиці' },
    { need:1, type:'outdoor', diff:'legendary', desc:'1 легендарне завдання' },
  ], reward:{ coins:400, xp:800, item:'dragon' } },
  { id:'q_grind', icon:'💪', title:'Трудяга', steps:[
    { need:5,  type:'any', diff:'any', desc:'Виконай 5 будь-яких завдань' },
    { need:10, type:'any', diff:'any', desc:'Виконай ще 10 завдань' },
    { need:15, type:'any', diff:'any', desc:'Виконай ще 15 завдань' },
  ], reward:{ coins:500, xp:1000, item:'phoenix' } },
];

function initQuests() {
  if (!S.quests) S.quests = {};
  QUEST_DEFS.forEach(q => { if (!S.quests[q.id]) S.quests[q.id] = { step:0, progress:0, done:false }; });
}

function updateQuestProgress(type, diff) {
  initQuests();
  QUEST_DEFS.forEach(qDef => {
    const qs = S.quests[qDef.id];
    if (!qs || qs.done) return;
    const step = qDef.steps[qs.step];
    if (!step) return;
    const typeOk = step.type === 'any' || step.type === type;
    const diffOk = step.diff === 'any' || step.diff === diff;
    if (!typeOk || !diffOk) return;
    qs.progress++;
    if (qs.progress >= step.need) {
      qs.step++; qs.progress = 0;
      if (qs.step >= qDef.steps.length) {
        qs.done = true;
        claimQuestReward(qDef);
      } else {
        toast(`🎯 Крок ${qs.step} / ${qDef.steps.length} квесту "${qDef.title}"!`, 'ok');
      }
    }
  });
}

function claimQuestReward(qDef) {
  const r = qDef.reward;
  S.coins += r.coins; addXP(r.xp);
  if (r.item && ITEMS[r.item]) addInv(r.item, 1);
  updateHeader(); spawnParticles(20);
  setTimeout(() => {
    const o = document.createElement('div'); o.className = 'easter-overlay';
    o.innerHTML = `<div class="easter-card">
      <span class="easter-emoji">${qDef.icon}</span>
      <div class="easter-title">КВЕСТ ВИКОНАНО!</div>
      <div style="color:var(--sub);font-size:14px;margin-bottom:20px">"${qDef.title}"</div>
      <div style="background:var(--bg3);border-radius:var(--r);padding:14px;margin-bottom:16px">
        <div style="font-size:18px;font-weight:900;color:var(--gold)">🪙 +${r.coins} монет</div>
        <div style="font-size:18px;font-weight:900;color:var(--purple)">⚡ +${r.xp} XP</div>
        ${r.item&&ITEMS[r.item]?`<div style="font-size:18px;font-weight:900">${ITEMS[r.item].icon} ${iName(ITEMS[r.item])}</div>`:''}
      </div>
      <button onclick="this.closest('.easter-overlay').remove()" style="padding:12px 28px;border-radius:var(--r);background:linear-gradient(135deg,var(--green),#2ea843);color:#000;font-weight:900;font-size:15px">🎉 Чудово!</button>
    </div>`;
    document.body.appendChild(o);
  }, 1000);
}

function renderQuests() {
  const el = document.getElementById('questsContent'); if (!el) return;
  initQuests();
  el.innerHTML = QUEST_DEFS.map(qDef => {
    const qs = S.quests[qDef.id];
    const si = Math.min(qs.step, qDef.steps.length - 1);
    const cur = qDef.steps[si];
    const pct = qs.done ? 100 : Math.round((qs.progress / cur.need) * 100);
    const r = qDef.reward;
    return `<div class="quest-card${qs.done?' quest-done':''}">
      <div class="quest-header">
        <span class="quest-icon">${qDef.icon}</span>
        <div style="flex:1">
          <div class="quest-title">${qDef.title}</div>
          <div class="quest-sub">${qs.done ? '✅ Виконано!' : `Крок ${Math.min(qs.step+1, qDef.steps.length)} / ${qDef.steps.length}`}</div>
        </div>
        <div class="quest-reward">+${r.coins}🪙 ${r.item&&ITEMS[r.item]?ITEMS[r.item].icon:''}</div>
      </div>
      ${!qs.done ? `
        <div class="quest-step-desc">${cur.desc}</div>
        <div style="display:flex;align-items:center;gap:8px;margin-top:8px">
          <div class="quest-bar"><div class="quest-fill" style="width:${pct}%"></div></div>
          <span style="font-size:13px;color:var(--sub);white-space:nowrap">${qs.progress}/${cur.need}</span>
        </div>
      ` : `<div style="font-size:13px;color:var(--sub);margin-top:6px">Нагороду отримано ✨</div>`}
    </div>`;
  }).join('');
}

// ═══════════════════════════════════════════════════════════════
//  STREAK MILESTONES
// ═══════════════════════════════════════════════════════════════
const STREAK_MILESTONES = { 3:30, 7:100, 14:200, 30:500, 60:1000, 100:2000 };
function checkStreakMilestone(streak) {
  const bonus = STREAK_MILESTONES[streak];
  if (!bonus) return;
  S.coins += bonus; updateHeader();
  setTimeout(() => {
    const o = document.createElement('div'); o.className = 'easter-overlay';
    o.innerHTML = `<div class="easter-card">
      <span class="easter-emoji">🔥</span>
      <div class="easter-title">${streak} ДНІВ ПОСПІЛЬ!</div>
      <div style="color:var(--sub);font-size:14px;margin-bottom:20px">Неймовірна серія! Тримай бонус!</div>
      <div style="background:var(--bg3);border-radius:var(--r);padding:14px;margin-bottom:16px">
        <div style="font-size:22px;font-weight:900;color:var(--gold)">🪙 +${bonus} монет</div>
      </div>
      <button onclick="this.closest('.easter-overlay').remove()" style="padding:12px 28px;border-radius:var(--r);background:linear-gradient(135deg,var(--orange),#ff4500);color:#fff;font-weight:900;font-size:15px">🔥 Чудово!</button>
    </div>`;
    document.body.appendChild(o);
  }, 2000);
}

// ═══════════════════════════════════════════════════════════════
//  TASK GENERATION — procedural variety
// ═══════════════════════════════════════════════════════════════
const TASK_TEMPLATES = {
  home: {
    easy: [
      {e:'🍽️',t:{ua:'Помий посуд',en:'Wash the dishes',fr:'Faire la vaisselle'},d:{ua:'Помий весь посуд та протри раковину',en:'Wash all dishes and wipe the sink',fr:'Lavez toute la vaisselle et essuyez l\'évier'},c:15,x:20,ic:.1},
      {e:'🛏️',t:{ua:'Застели ліжко',en:'Make your bed',fr:'Faire le lit'},d:{ua:'Акуратно застели ліжко та прибери подушки',en:'Neatly make your bed and arrange pillows',fr:'Faites soigneusement votre lit'},c:10,x:15,ic:.08},
      {e:'🌱',t:{ua:'Полий квіти',en:'Water the plants',fr:'Arroser les plantes'},d:{ua:'Полий всі домашні рослини, перевір ґрунт',en:'Water all houseplants, check the soil',fr:'Arrosez toutes les plantes, vérifiez la terre'},c:12,x:18,ic:.1},
      {e:'🧹',t:{ua:'Підмети підлогу',en:'Sweep the floor',fr:'Balayer le sol'},d:{ua:'Підмети підлогу у всіх кімнатах',en:'Sweep the floor in all rooms',fr:'Balayez le sol dans toutes les pièces'},c:18,x:22,ic:.12},
      {e:'🗑️',t:{ua:'Виніси сміття',en:'Take out the trash',fr:'Sortir les poubelles'},d:{ua:'Зберіть сміття з усіх кімнат та винесіть',en:'Collect trash from all rooms and take out',fr:'Collectez les déchets et sortez-les'},c:10,x:12,ic:.08},
      {e:'🧴',t:{ua:'Протри пил',en:'Dust the surfaces',fr:'Dépoussiérer les surfaces'},d:{ua:'Протри пил на всіх поверхнях кімнати',en:'Wipe dust off all surfaces in the room',fr:'Essuyez la poussière sur toutes les surfaces'},c:14,x:20,ic:.1},
      {e:'🚿',t:{ua:'Помий ванну',en:'Clean the bathroom',fr:'Nettoyer la salle de bain'},d:{ua:'Швидко протри раковину та дзеркало',en:'Quickly wipe the sink and mirror',fr:'Nettoyez rapidement le lavabo et le miroir'},c:16,x:22,ic:.12},
      {e:'🥗',t:{ua:'Приготуй салат',en:'Make a salad',fr:'Préparer une salade'},d:{ua:'Приготуй свіжий салат з овочів',en:'Prepare a fresh vegetable salad',fr:'Préparez une salade fraîche aux légumes'},c:14,x:18,ic:.1},
      {e:'📚',t:{ua:'Прибери на столі',en:'Tidy your desk',fr:'Ranger le bureau'},d:{ua:'Розклади речі на робочому столі по місцях',en:'Organize items on your desk',fr:'Organisez les objets sur votre bureau'},c:11,x:16,ic:.09},
      {e:'🪟',t:{ua:'Протри вікна',en:'Wipe the windows',fr:'Essuyer les fenêtres'},d:{ua:'Протри вікна у кімнаті від пилу',en:'Wipe the room windows clean',fr:'Essuyez les fenêtres de la chambre'},c:13,x:19,ic:.1},
    ],
    medium: [
      {e:'🧺',t:{ua:'Постирай одяг',en:'Do the laundry',fr:'Faire la lessive'},d:{ua:'Відсортуй та постирай накопичений одяг',en:'Sort and wash accumulated laundry',fr:'Triez et lavez le linge accumulé'},c:35,x:50,ic:.25},
      {e:'🍲',t:{ua:'Приготуй повноцінну страву',en:'Cook a full meal',fr:'Cuisiner un repas complet'},d:{ua:'Приготуй обід або вечерю з мінімум 3 складових',en:'Cook lunch or dinner with at least 3 components',fr:'Cuisinez un repas avec au moins 3 composants'},c:40,x:55,ic:.3},
      {e:'🧽',t:{ua:'Прибери кімнату',en:'Clean the room',fr:'Nettoyer la pièce'},d:{ua:'Повне прибирання: підлога, поверхні, вікна',en:'Full cleaning: floor, surfaces, windows',fr:'Nettoyage complet: sol, surfaces, fenêtres'},c:45,x:60,ic:.3},
      {e:'🧊',t:{ua:'Розбери холодильник',en:'Clean the fridge',fr:'Nettoyer le réfrigérateur'},d:{ua:'Викинь прострочене, протри полиці',en:'Throw out expired items, wipe shelves',fr:'Jetez les périmés, essuyez les étagères'},c:38,x:48,ic:.25},
      {e:'📦',t:{ua:'Розбери завали',en:'Sort the clutter',fr:'Trier le désordre'},d:{ua:'Розбери одне місце де накопичилися речі',en:'Sort one area where things have piled up',fr:'Triez un endroit où les choses s\'accumulent'},c:42,x:52,ic:.28},
      {e:'🍕',t:{ua:'Спечи піцу',en:'Bake a pizza',fr:'Faire une pizza'},d:{ua:'Приготуй піцу з нуля або на готовому тісті',en:'Make pizza from scratch or with ready dough',fr:'Faites une pizza maison'},c:44,x:58,ic:.3},
      {e:'🔧',t:{ua:'Дрібний ремонт',en:'Minor repair',fr:'Petite réparation'},d:{ua:'Полагодь щось зламане вдома',en:'Fix something broken at home',fr:'Réparez quelque chose de cassé à la maison'},c:48,x:64,ic:.32},
    ],
    hard: [
      {e:'🏠',t:{ua:'Генеральне прибирання',en:'Deep cleaning',fr:'Grand ménage'},d:{ua:'Прибери всю квартиру: миття підлоги, вікон, меблів',en:'Clean the whole apartment: floors, windows, furniture',fr:'Nettoyez tout l\'appartement'},c:100,x:150,ic:.6},
      {e:'👗',t:{ua:'Організуй гардероб',en:'Organize wardrobe',fr:'Organiser la garde-robe'},d:{ua:'Повністю розбери та реорганізуй весь одяг',en:'Fully reorganize all your clothing',fr:'Réorganisez complètement vos vêtements'},c:90,x:130,ic:.55},
      {e:'🍰',t:{ua:'Приготуй складну страву',en:'Cook a complex dish',fr:'Cuisiner un plat complexe'},d:{ua:'Зроби торт, суші або іншу складну страву',en:'Make a cake, sushi, or other complex dish',fr:'Faites un gâteau, des sushis ou autre'},c:85,x:120,ic:.5},
      {e:'🛁',t:{ua:'Відмий ванну кімнату',en:'Deep clean bathroom',fr:'Nettoyage profond salle de bain'},d:{ua:'Ретельно відмий ванну, унітаз, раковину та плитку',en:'Thoroughly clean tub, toilet, sink and tiles',fr:'Nettoyez la baignoire, toilettes, lavabo et carrelage'},c:95,x:140,ic:.55},
      {e:'🪴',t:{ua:'Облаштуй зону відпочинку',en:'Set up relaxation zone',fr:'Aménager une zone de détente'},d:{ua:'Переставь меблі та декоруй зону відпочинку',en:'Rearrange furniture and decorate relaxation area',fr:'Réorganisez meubles et décorez un espace détente'},c:88,x:125,ic:.52},
    ],
    legendary: [
      {e:'🔨',t:{ua:'Зроби ремонт',en:'Do renovation',fr:'Faire des rénovations'},d:{ua:'Пофарбуй стіну, поклади плитку або інший суттєвий ремонт',en:'Paint a wall, lay tiles, or do other major repair',fr:'Peignez un mur, posez du carrelage ou autre'},c:500,x:800,ic:1},
      {e:'🌟',t:{ua:'Повне перетворення',en:'Full room makeover',fr:'Transformation complète'},d:{ua:'Переставь меблі, декоруй, зроби кімнату новою',en:'Move furniture, decorate, make the room brand new',fr:'Déplacez les meubles, décorez, transformez la pièce'},c:400,x:600,ic:1},
    ],
  },
  outdoor: {
    easy: [
      {e:'👣',t:{ua:'Прогулянка 1000 кроків',en:'1000 step walk',fr:'Marche de 1000 pas'},d:{ua:'Вийди та пройди щонайменше 1000 кроків',en:'Go out and walk at least 1000 steps',fr:'Sortez et marchez au moins 1000 pas'},c:15,x:20,ic:.1},
      {e:'🛒',t:{ua:'Сходи за продуктами',en:'Buy groceries',fr:'Faire les courses'},d:{ua:'Склади список та купи необхідні продукти',en:'Make a list and buy the necessary groceries',fr:'Faites une liste et achetez les courses'},c:18,x:22,ic:.12},
      {e:'🌸',t:{ua:'Знайди красиве місце',en:'Find a beautiful spot',fr:'Trouver un bel endroit'},d:{ua:'Знайди та сфотографуй щось красиве на вулиці',en:'Find and photograph something beautiful outside',fr:'Trouvez et photographiez quelque chose de beau'},c:12,x:18,ic:.1},
      {e:'🤝',t:{ua:'Допоможи сусіду',en:'Help a neighbor',fr:'Aider un voisin'},d:{ua:'Допоможи сусіду з чимось',en:'Help a neighbor with something',fr:'Aidez un voisin avec quelque chose'},c:20,x:28,ic:.15},
      {e:'🌤️',t:{ua:'Посиди на свіжому повітрі',en:'Sit outside',fr:'S\'asseoir dehors'},d:{ua:'Проведи 20 хвилин просто на вулиці без телефону',en:'Spend 20 minutes outside without your phone',fr:'Passez 20 minutes dehors sans téléphone'},c:14,x:18,ic:.1},
      {e:'📬',t:{ua:'Перевір пошту',en:'Check the mail',fr:'Vérifier le courrier'},d:{ua:'Сходи до поштового відділення або скриньки',en:'Go to the post office or mailbox',fr:'Allez à la boîte aux lettres'},c:10,x:13,ic:.08},
      {e:'🌳',t:{ua:'Прогулянка в парку',en:'Walk in the park',fr:'Promenade dans le parc'},d:{ua:'Пройдись по парку або зеленій зоні',en:'Walk through a park or green area',fr:'Promenez-vous dans un parc'},c:13,x:17,ic:.09},
      {e:'☕',t:{ua:'Кава на виніс',en:'Takeaway coffee',fr:'Café à emporter'},d:{ua:'Вийди, купи каву і випий її на вулиці',en:'Go out, buy coffee and drink it outside',fr:'Sortez, achetez un café et buvez-le dehors'},c:11,x:14,ic:.08},
    ],
    medium: [
      {e:'🏃',t:{ua:'Пробіжка 3 км',en:'3 km run',fr:'Course de 3 km'},d:{ua:'Пробіжи мінімум 3 кілометри без зупинок',en:'Run at least 3 kilometers without stopping',fr:'Courez au moins 3 kilomètres sans arrêt'},c:50,x:70,ic:.35},
      {e:'🚴',t:{ua:'Велопоїздка',en:'Bike ride',fr:'Balade à vélo'},d:{ua:'Прокатайся на велосипеді мінімум 30 хвилин',en:'Ride a bike for at least 30 minutes',fr:'Faites du vélo pendant au moins 30 minutes'},c:45,x:65,ic:.3},
      {e:'🌳',t:{ua:'Прибирання у дворі',en:'Clean the yard',fr:'Nettoyer la cour'},d:{ua:'Прибери листя, сміття або накоси траву',en:'Remove leaves, trash, or mow the lawn',fr:'Ramassez les feuilles, déchets ou tondez'},c:40,x:55,ic:.3},
      {e:'🚗',t:{ua:'Помий машину',en:'Wash the car',fr:'Laver la voiture'},d:{ua:'Самостійно помий автомобіль ззовні та зсередини',en:'Wash the car exterior and interior yourself',fr:'Lavez votre voiture extérieur et intérieur'},c:48,x:60,ic:.32},
      {e:'📸',t:{ua:'Фото-вилазка',en:'Photo walk',fr:'Balade photo'},d:{ua:'Пройди 2 км та зроби 10+ фотографій',en:'Walk 2 km and take 10+ photos',fr:'Marchez 2 km et prenez 10+ photos'},c:42,x:58,ic:.28},
      {e:'🛹',t:{ua:'Активне дозвілля',en:'Active leisure',fr:'Loisirs actifs'},d:{ua:'30+ хвилин будь-якої активності на вулиці',en:'30+ minutes of any outdoor activity',fr:'30+ minutes de toute activité en plein air'},c:46,x:62,ic:.3},
      {e:'🧺',t:{ua:'Пікнік',en:'Picnic',fr:'Pique-nique'},d:{ua:'Організуй пікнік надворі хоча б на 1 годину',en:'Organize an outdoor picnic for at least 1 hour',fr:'Organisez un pique-nique dehors pendant 1 heure'},c:44,x:60,ic:.3},
    ],
    hard: [
      {e:'🏔️',t:{ua:'Похід 10 км',en:'10 km hike',fr:'Randonnée de 10 km'},d:{ua:'Пройди пішохідний маршрут на 10+ кілометрів',en:'Complete a 10+ km hiking route',fr:'Effectuez un parcours de randonnée de 10+ km'},c:150,x:200,ic:.7},
      {e:'🏊',t:{ua:'Плавання 1 км',en:'Swim 1 km',fr:'Nager 1 km'},d:{ua:'Пропливи 1 кілометр у басейні або на природі',en:'Swim 1 kilometer in a pool or nature',fr:'Nagez 1 kilomètre en piscine ou en plein air'},c:130,x:180,ic:.65},
      {e:'🌄',t:{ua:'Зустріч сходу сонця',en:'Watch sunrise',fr:'Observer le lever du soleil'},d:{ua:'Вийди до сходу та зустрінь ранок на вулиці',en:'Go out before sunrise and watch the morning',fr:'Sortez avant l\'aube et observez le matin'},c:120,x:160,ic:.6},
      {e:'🏋️',t:{ua:'Тренування надворі',en:'Outdoor workout',fr:'Entraînement en plein air'},d:{ua:'45+ хвилин інтенсивного тренування на вулиці',en:'45+ minutes of intense outdoor workout',fr:'45+ minutes d\'entraînement intensif dehors'},c:140,x:190,ic:.65},
      {e:'🌲',t:{ua:'Лісовий похід',en:'Forest trek',fr:'Randonnée en forêt'},d:{ua:'Пройди маршрут у лісі, мінімум 2 години',en:'Complete a forest route, minimum 2 hours',fr:'Parcourez un sentier forestier, minimum 2 heures'},c:135,x:185,ic:.63},
    ],
    legendary: [
      {e:'🦁',t:{ua:'Марафон',en:'Marathon',fr:'Marathon'},d:{ua:'Пробіжи повний марафон або участь у забігу',en:'Run a full marathon or participate in a race',fr:'Courez un marathon complet ou participez à une course'},c:800,x:1200,ic:1},
      {e:'🧗',t:{ua:'Підкорення вершини',en:'Summit climb',fr:'Ascension d\'un sommet'},d:{ua:'Піднімись на вершину пагорба або скелі',en:'Climb to the top of a hill or rock',fr:'Grimpez au sommet d\'une colline ou d\'un rocher'},c:600,x:900,ic:1},
    ],
  }
};

// Extra modifiers for variety
const MODIFIERS_UA = ['зранку','ввечері','в обідню перерву','за 30 хвилин','без зупинок','із задоволенням','уважно','старанно'];
const MODIFIERS_EN = ['in the morning','in the evening','during lunch break','in 30 minutes','without stopping','with pleasure','carefully','diligently'];
const MODIFIERS_FR = ['le matin','le soir','pendant la pause déjeuner','en 30 minutes','sans s\'arrêter','avec plaisir','soigneusement','avec soin'];

function getModifier() {
  const mods = {ua:MODIFIERS_UA,en:MODIFIERS_EN,fr:MODIFIERS_FR}[currentLang] || MODIFIERS_UA;
  return Math.random() > .5 ? '' : ' (' + mods[Math.floor(Math.random()*mods.length)] + ')';
}

// ═══════════════════════════════════════════════════════════════
//  STATE
// ═══════════════════════════════════════════════════════════════
let S = {
  user: null,
  coins: 150, xp: 0, level: 1, streak: 0, lastTaskDate: null,
  tasks: [], inventory: {}, activeBuffs: [],
  friends: [], friendInvs: {}, history: [],
  settings: { notifTasks:true, notifFriends:true, sound:true, showInLB:true },
  premium: false,
  activeTheme: 'dark',
  dailyGenerations: 0, dailyGenerationsDate: '',
  shopStock: {}, shopStockDate: '',
  recentTaskKeys: [],
  achievements: {},
  dailyChallenges: [], dailyChallengesDate: '',
  wheelSpinDate: '', wheelSpinsLeft: 1,
  totalTasksDone: 0, totalCoinsEarned: 0, totalLegendary: 0,
  quests: {},
};

const SAVE_KEY = 'tq_save_v2';
function saveState() { localStorage.setItem(SAVE_KEY, JSON.stringify(S)); }
function loadState() {
  try {
    const raw = localStorage.getItem(SAVE_KEY);
    if (raw) S = JSON.parse(raw);
  } catch(e) {}
}

// ═══════════════════════════════════════════════════════════════
//  DAILY RESETS
// ═══════════════════════════════════════════════════════════════
const FREE_GENS = 10;
const PREMIUM_GENS = 50;

function todayStr() { return new Date().toISOString().slice(0,10); }
function checkDailyReset() {
  const today = todayStr();
  if (S.dailyGenerationsDate !== today) { S.dailyGenerations = 0; S.dailyGenerationsDate = today; }
  // Скидаємо колесо фортуни
  if (S.wheelSpinDate !== today) { S.wheelSpinsLeft = S.premium ? 3 : 1; S.wheelSpinDate = today; }
  // Генеруємо щоденні челенджі
  if (S.dailyChallengesDate !== today) { S.dailyChallenges = generateDailyChallenges(); S.dailyChallengesDate = today; }
  if (S.shopStockDate !== today) {
    // Grow-a-Garden: предмети з'являються з різною ймовірністю залежно від рідкості
    S.shopStock = {};
    // Зберігаємо seed для детермінованості протягом дня
    const daySeed = today.replace(/-/g,'');
    let rng = parseInt(daySeed) % 999983;
    function seededRand() { rng=(rng*1664525+1013904223)&0xffffffff; return (rng>>>0)/0xffffffff; }
    Object.values(ITEMS).forEach(it => {
      const spawnChance = RARITY_SPAWN[it.rarity] || 0.5;
      if (seededRand() < spawnChance) {
        const [min,max] = RARITY_STOCK[it.rarity] || [1,3];
        S.shopStock[it.id] = Math.floor(min + seededRand()*(max-min+1));
      } else {
        S.shopStock[it.id] = 0; // не з'явився сьогодні
      }
    });
    S.shopStockDate = today;
  }
}
function maxGens() { return S.premium ? PREMIUM_GENS : FREE_GENS; }
function gensLeft() { return Math.max(0, maxGens() - S.dailyGenerations); }

// ═══════════════════════════════════════════════════════════════
//  AUTH
// ═══════════════════════════════════════════════════════════════
const AVATARS = ['🌿','⚡','🦊','🌸','🏔️','🦋','🌊','🔥','🍄','💎','🌙','⭐','🎯','🚀','🎭','🦅'];
let selectedAvatar = AVATARS[0];

function initAvatarGrid() {
  const g = document.getElementById('avatarGrid');
  if (!g) return;
  g.innerHTML = AVATARS.map((a,i) =>
    `<div class="av-opt${i===0?' selected':''}" onclick="pickAvatar(this,'${a}')">${a}</div>`
  ).join('');
}
function pickAvatar(el, av) {
  document.querySelectorAll('.av-opt').forEach(x=>x.classList.remove('selected'));
  el.classList.add('selected');
  selectedAvatar = av;
}
function switchAuthTab(tab) {
  document.getElementById('authRegister').style.display = tab==='register'?'':'none';
  document.getElementById('authLogin').style.display    = tab==='login'   ?'':'none';
}
function genCode() { return 'TQ-' + Math.floor(1000+Math.random()*9000); }

function doRegister() {
  const name  = document.getElementById('regName').value.trim();
  const email = document.getElementById('regEmail').value.trim();
  const pass  = document.getElementById('regPass').value;
  if (!name)  { toast('Введи ім\'я!','warn','⚠️'); return; }
  if (!email || !email.includes('@')) { toast('Введи правильний email!','warn','⚠️'); return; }
  if (pass.length < 6) { toast('Пароль мінімум 6 символів!','warn','⚠️'); return; }
  // Save user to local "db"
  const users = JSON.parse(localStorage.getItem('tq_users')||'{}');
  if (users[email]) { toast('Цей email вже зареєстрований!','err','❌'); return; }
  const user = { name, email, avatar: selectedAvatar, code: genCode(), pass };
  users[email] = user;
  localStorage.setItem('tq_users', JSON.stringify(users));
  loginUser(user);
}
function doLogin() {
  const email = document.getElementById('loginEmail').value.trim();
  const pass  = document.getElementById('loginPass').value;
  const users = JSON.parse(localStorage.getItem('tq_users')||'{}');
  const user  = users[email];
  if (!user || user.pass !== pass) { toast('Невірний email або пароль!','err','❌'); return; }
  loginUser(user);
}
function doGoogleLogin() {
  // Simulate Google login
  const user = { name:'Google User', email:'google@example.com', avatar:'🌐', code: genCode(), pass:'' };
  const users = JSON.parse(localStorage.getItem('tq_users')||'{}');
  if (!users[user.email]) { users[user.email] = user; localStorage.setItem('tq_users', JSON.stringify(users)); }
  loginUser(users[user.email]);
}
function loginUser(user) {
  loadState();
  S.user = { name: user.name, email: user.email, avatar: user.avatar, code: user.code };
  checkDailyReset();
  saveState();
  document.getElementById('authScreen').style.display = 'none';
  document.getElementById('appRoot').style.display = '';
  initApp();
}
function doLogout() {
  window.location.href = '/auth/logout';
}

// ═══════════════════════════════════════════════════════════════
//  APP INIT
// ═══════════════════════════════════════════════════════════════
function initApp() {
  checkDailyReset();
  updateHeader();
  renderSidebar();
  renderTasks();
  renderGenLimit();
  applyI18n();
  // Give starter inventory if empty
  if (!Object.keys(S.inventory).length) {
    addInv('energy',2); addInv('scroll',1); addInv('clover',1);
  }
  // Starter tasks
  if (!S.tasks.length) {
    const starts = [
      {type:'home',diff:'easy'}, {type:'outdoor',diff:'medium'}, {type:'home',diff:'hard'}
    ];
    starts.forEach(s => {
      const pool = TASK_TEMPLATES[s.type][s.diff];
      const tpl  = pool[Math.floor(Math.random()*pool.length)];
      S.tasks.push(makeTask(tpl, s.type, s.diff));
    });
  }
  renderTasks();
}

// ═══════════════════════════════════════════════════════════════
//  NAVIGATION
// ═══════════════════════════════════════════════════════════════
function showPage(name) {
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n=>n.classList.remove('active'));
  document.querySelectorAll('.bn-item').forEach(n=>n.classList.remove('active'));
  const pg = document.getElementById('page-'+name);
  if (pg) pg.classList.add('active');
  document.querySelectorAll('.nav-item[data-page="'+name+'"]').forEach(n=>n.classList.add('active'));
  document.querySelectorAll('.bn-item[data-page="'+name+'"]').forEach(n=>n.classList.add('active'));
  // Close sidebar on mobile
  if (window.innerWidth < 780) document.getElementById('sidebar').classList.remove('open');
  const renders = {
    tasks: renderTasks, inventory: renderInventory,
    shop: renderShop, friends: renderFriends,
    leaderboard: renderLeaderboard, stats: renderStats,
    premium: renderPremium, settings: renderSettings,
    referral: renderReferral, achievements: renderAchievements,
    challenges: renderDailyChallenges, wheel: renderWheel,
    quests: renderQuests,
  };
  if (renders[name]) renders[name]();
}
function toggleSidebar() { document.getElementById('sidebar').classList.toggle('open'); }

// ═══════════════════════════════════════════════════════════════
//  🥚 EASTER EGG — клік на логотип 7 разів за 3 секунди
// ═══════════════════════════════════════════════════════════════
let eggClicks=0, eggTimer=null, eggUsed=false;
function eggClick() {
  if(eggUsed) { toast('Пасхалку вже використано 🥚','warn'); return; }
  eggClicks++;
  clearTimeout(eggTimer);
  eggTimer = setTimeout(()=>{ eggClicks=0; }, 3000);
  if(eggClicks>=7) {
    eggClicks=0; eggUsed=true;
    showEasterEgg();
  }
}
function showEasterEgg() {
  // Нараховуємо бонус
  S.coins+=200; S.xp+=500;
  // Даємо рандомний рідкісний предмет
  const rareItems=['stardust','dragon','phoenix','rainbow'];
  const bonus=randFrom(rareItems);
  if(ITEMS[bonus]) addInv(bonus,1);
  saveState(); updateHeader();
  const overlay=document.createElement('div');
  overlay.className='easter-overlay';
  overlay.innerHTML=`<div class="easter-card">
    <span class="easter-emoji">🥚</span>
    <div class="easter-title">✦ ПАСХАЛКА ЗНАЙДЕНА! ✦</div>
    <div style="color:var(--sub);font-size:14px;margin-bottom:20px">Ти знайшов секрет TaskQuest!</div>
    <div style="background:var(--bg3);border-radius:var(--r);padding:14px;margin-bottom:16px">
      <div style="font-size:18px;font-weight:900;color:var(--gold)">🪙 +200 монет</div>
      <div style="font-size:18px;font-weight:900;color:var(--purple)">⚡ +500 XP</div>
      ${ITEMS[bonus]?`<div style="font-size:18px;font-weight:900;color:#cc00ff">${ITEMS[bonus].icon} ${iName(ITEMS[bonus])}</div>`:''}
    </div>
    <div style="color:var(--sub2);font-size:12px;margin-bottom:16px">🤫 Нікому не кажи де знайшов!</div>
    <button onclick="this.closest('.easter-overlay').remove();spawnParticles(30);" style="padding:12px 28px;border-radius:var(--r);background:linear-gradient(135deg,#cc00ff,#ff00cc);color:#fff;font-weight:900;font-size:15px">✨ Забрати!</button>
  </div>`;
  document.body.appendChild(overlay);
  spawnParticles(25);
}

// ═══════════════════════════════════════════════════════════════
//  TASK ENGINE
// ═══════════════════════════════════════════════════════════════
function uid() { return Date.now().toString(36)+Math.random().toString(36).slice(2); }
function randFrom(arr) { return arr[Math.floor(Math.random()*arr.length)]; }

function makeTask(tpl, type, diff) {
  const mod = getModifier();
  const titleLang = tpl.t[currentLang] || tpl.t.ua;
  const descLang  = tpl.d[currentLang] || tpl.d.ua;
  return {
    id: uid(), type, diff,
    icon: tpl.e,
    title: titleLang + mod,
    titleKey: tpl.t,       // store all langs
    descKey: tpl.d,
    desc: descLang,
    coins: tpl.c, xp: tpl.x, itemChance: tpl.ic,
    completed: false, skipped: false,
    createdAt: Date.now(),
  };
}

let activeFilter = 'all';
function generateTask() {
  if (gensLeft() <= 0) { toast(t('tasks.noMore'),'warn','⏰'); return; }
  const active = S.tasks.filter(x=>!x.completed&&!x.skipped);
  if (active.length >= 9) { toast(t('tasks.maxActive'),'warn','⚠️'); return; }
  const typeV = document.getElementById('genType').value;
  const diffV = document.getElementById('genDiff').value;
  const type  = typeV==='any' ? randFrom(['home','outdoor']) : typeV;
  const diffs = ['easy','medium','hard','legendary'];
  const diff  = diffV==='any' ? diffs[Math.floor(Math.random()*diffs.length)] : diffV;
  const pool  = TASK_TEMPLATES[type][diff];
  // Уникаємо повторів — перевіряємо останні 30 згенерованих
  if (!S.recentTaskKeys) S.recentTaskKeys = [];
  let tpl;
  let bestTpl = null;
  for (let i=0;i<20;i++) {
    tpl = randFrom(pool);
    const key = `${type}-${diff}-${tpl.t.ua}`;
    if (!S.recentTaskKeys.includes(key)) { bestTpl = tpl; break; }
    if (!bestTpl) bestTpl = tpl; // запасний варіант
  }
  tpl = bestTpl;
  // Зберігаємо ключ, не більше 30
  const taskKey = `${type}-${diff}-${tpl.t.ua}`;
  S.recentTaskKeys.unshift(taskKey);
  if (S.recentTaskKeys.length > 30) S.recentTaskKeys = S.recentTaskKeys.slice(0, 30);
  const task = makeTask(tpl, type, diff);
  S.tasks.unshift(task);
  S.dailyGenerations++;
  saveState();
  renderTasks();
  renderGenLimit();
  renderSidebar();
  toast(`${task.icon} ${task.title}`, 'ok', '✅');
  spawnParticles();
}

function renderGenLimit() {
  const el = document.getElementById('genLimit');
  const btn = document.getElementById('genBtn');
  if (!el) return;
  const left = gensLeft();
  el.textContent = `${t('tasks.genLimit')} ${left}/${maxGens()}`;
  if (btn) btn.disabled = left <= 0;
  // daily reset timer
  const dr = document.getElementById('dailyReset');
  if (dr) {
    const now = new Date();
    const midnight = new Date(); midnight.setHours(24,0,0,0);
    const diff = midnight - now;
    const h = Math.floor(diff/3600000), m = Math.floor((diff%3600000)/60000);
    dr.textContent = `🔄 ${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}`;
  }
}

function filterTasks(f, btn) {
  activeFilter = f;
  document.querySelectorAll('.filter').forEach(b=>b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  renderTasks();
}

function searchTasks(q) {
  const cards = document.querySelectorAll('.task-card');
  cards.forEach(c => {
    const title = c.querySelector('.task-title')?.textContent.toLowerCase() || '';
    c.style.display = (!q || title.includes(q.toLowerCase())) ? '' : 'none';
  });
}

function renderTasks() {
  const grid = document.getElementById('tasksGrid');
  if (!grid) return;
  let tasks = S.tasks;
  if (activeFilter==='home')     tasks = tasks.filter(x=>x.type==='home');
  else if (activeFilter==='outdoor') tasks = tasks.filter(x=>x.type==='outdoor');
  else if (['easy','medium','hard','legendary'].includes(activeFilter)) tasks = tasks.filter(x=>x.diff===activeFilter);

  if (!tasks.length) {
    grid.innerHTML = `<div class="empty-state">
      <div class="empty-state-icon">🎲</div>
      <div class="empty-state-title">${t('tasks.empty')}</div>
      <div>${t('tasks.emptyHint')}</div>
    </div>`; return;
  }

  const diffLabels = { easy:t('diff.easy'), medium:t('diff.medium'), hard:t('diff.hard'), legendary:t('diff.legendary') };

  grid.innerHTML = tasks.map(task => {
    let coins = task.coins, xp = task.xp;
    if (hasBuff('xp2')) xp *= 2;
    if (hasBuff('coin50')) coins = Math.floor(coins*1.5);
    if (hasBuff('legend2') && task.diff==='legendary') { coins*=2; xp*=2; }
    const elapsed = Math.floor((Date.now()-task.createdAt)/60000);
    const timeStr = elapsed<1?t('tasks.just'):`${elapsed} ${t('tasks.ago')}`;
    const itemStr = task.itemChance>=.6?'🎁':task.itemChance>=.3?'🎲':'';
    return `<div class="task-card ${task.diff}${task.completed?' done':''}" id="tc-${task.id}">
      <div class="task-head">
        <span class="type-badge type-${task.type}">${task.type==='home'?t('tasks.home'):t('tasks.outdoor')}</span>
        <span class="diff-badge diff-${task.diff}">${diffLabels[task.diff]}</span>
      </div>
      <span class="task-emoji">${task.icon}</span>
      <div class="task-title">${task.title}</div>
      <div class="task-desc">${task.desc}</div>
      <div class="task-reward">
        <span class="rew c">🪙 ${coins}</span>
        <span class="rew x">⚡ ${xp}</span>
        ${itemStr?`<span class="rew i">${itemStr}</span>`:''}
      </div>
      <div class="task-actions">
        ${task.completed
          ? `<div style="flex:1;text-align:center;color:var(--green);font-weight:700">✓ ${diffLabels[task.diff]}</div>`
          : `<button class="btn-complete" onclick="startConfirm('${task.id}')">${t('tasks.complete')}</button>
             <button class="btn-skip" onclick="skipTask('${task.id}')" title="${t('tasks.skip')}">${t('tasks.skip')}</button>`
        }
      </div>
      <div class="task-meta">🕐 ${timeStr}</div>
    </div>`;
  }).join('');
}

// ═══════════════════════════════════════════════════════════════
//  CONFIRM + COMPLETE
// ═══════════════════════════════════════════════════════════════
let pendingTaskId = null;
let photoAttached = false;

function startConfirm(id) {
  const task = S.tasks.find(x=>x.id===id);
  if (!task||task.completed) return;
  pendingTaskId = id; photoAttached = false;
  const disp = document.getElementById('confirmDisplay');
  if (disp) disp.innerHTML = `<div style="font-size:48px;margin-bottom:8px">${task.icon}</div><div style="font-weight:700">${task.title}</div>`;
  const pd = document.getElementById('photoDrop');
  if (pd) { pd.className='photo-drop'; pd.innerHTML=`<div style="font-size:40px">📸</div><div>${t('confirm.photoHint')}</div>`; }
  const cn = document.getElementById('confirmNote');
  if (cn) cn.value='';
  openOverlay('confirmOverlay');
}

function fakePhoto() {
  photoAttached = true;
  const pd = document.getElementById('photoDrop');
  if (pd) { pd.className='photo-drop done'; pd.innerHTML=`<div style="font-size:32px">✅</div><div>${t('confirm.photoDone')}</div>`; }
}

function finalConfirm() {
  if (!pendingTaskId) return;
  const task = S.tasks.find(x=>x.id===pendingTaskId);
  if (!task) return;
  closeOverlay('confirmOverlay');
  completeTask(task);
}

function completeTask(task) {
  task.completed = true; task.completedAt = Date.now();
  let coins = task.coins, xp = task.xp;
  if (hasBuff('xp2'))     { xp*=2; consumeBuff('xp2'); }
  if (hasBuff('coin50'))  { coins=Math.floor(coins*1.5); consumeBuff('coin50'); }
  if (hasBuff('legend2')&&task.diff==='legendary') { coins*=2; xp*=2; consumeBuff('legend2'); }
  S.coins += coins;
  const prevLvl = S.level;
  addXP(xp);
  // Streak
  const today = todayStr();
  if (S.lastTaskDate !== today) {
    const yesterday = new Date(); yesterday.setDate(yesterday.getDate()-1);
    const yStr = yesterday.toISOString().slice(0,10);
    S.streak = (S.lastTaskDate===yStr) ? S.streak+1 : 1;
    S.lastTaskDate = today;
    checkStreakMilestone(S.streak);
  }
  // Quests
  updateQuestProgress(task.type, task.diff);
  // Item drop
  let dropped = null;
  if (Math.random()<task.itemChance) {
    const eligible = Object.values(ITEMS).filter(it=>(S.inventory[it.id]||0)<it.maxStock);
    if (eligible.length) { dropped = randFrom(eligible); addInv(dropped.id,1); }
  }
  S.history.unshift({ icon:task.icon, title:task.title, type:task.type, diff:task.diff, coins, xp, item:dropped?iName(dropped):null, date:new Date().toLocaleString() });
  if (S.history.length>100) S.history.pop();
  // Лічильники для досягнень
  S.totalTasksDone = (S.totalTasksDone||0)+1;
  S.totalCoinsEarned = (S.totalCoinsEarned||0)+coins;
  if(task.diff==='legendary') S.totalLegendary=(S.totalLegendary||0)+1;
  // Щоденні челенджі
  checkDailyReset();
  updateChallenge('complete');
  if(task.diff==='hard') updateChallenge('hard');
  if(task.diff==='easy') updateChallenge('easy');
  if(task.diff==='legendary') updateChallenge('legendary');
  if(task.type==='outdoor') updateChallenge('outdoor');
  if(task.type==='home') updateChallenge('home');
  // Перевірка досягнень
  checkAchievements();
  // Бейдж челенджів
  const chDone = (S.dailyChallenges||[]).filter(c=>c.done).length;
  const chEl=document.getElementById('challengeBadge');
  if(chEl) chEl.textContent=chDone<3?String(3-chDone):'';
  saveState();
  updateHeader();
  renderTasks();
  renderSidebar();
  spawnParticles(12);
  // Show reward
  document.getElementById('rewardEmoji').textContent = task.diff==='legendary'?'🏆':'🎉';
  document.getElementById('rewardTitle').textContent = task.diff==='legendary'?t('reward.legendary'):t('reward.title');
  document.getElementById('rewardTaskName').textContent = `"${task.title}"`;
  document.getElementById('rewardRow').innerHTML = `
    <div class="reward-pill"><div class="rp-val" style="color:var(--gold)">+${coins} 🪙</div><div class="rp-label">Coins</div></div>
    <div class="reward-pill" style="animation-delay:.1s"><div class="rp-val" style="color:var(--purple)">+${xp} ⚡</div><div class="rp-label">XP</div></div>`;
  const drop = document.getElementById('itemDrop');
  if (dropped && drop) {
    drop.style.display='';
    drop.innerHTML=`<div style="font-size:12px;color:var(--sub);margin-bottom:4px">Ти отримав предмет!</div>
      <div style="font-size:40px;margin-bottom:6px">${dropped.icon}</div>
      <div style="font-weight:800">${iName(dropped)}</div>
      <div style="font-size:12px;color:var(--sub)">${iDesc(dropped)}</div>`;
  } else if (drop) drop.style.display='none';
  openOverlay('rewardOverlay');
  if (S.level>prevLvl) setTimeout(()=>{ closeOverlay('rewardOverlay'); showLevelUp(S.level); },3500);
}

function skipTask(id) {
  S.tasks = S.tasks.filter(x=>x.id!==id);
  saveState(); renderTasks();
  toast(t('tasks.skip'),'info','📜');
}

// ═══════════════════════════════════════════════════════════════
//  XP & LEVELS
// ═══════════════════════════════════════════════════════════════
const LEVEL_TITLES = {
  ua:['','Новачок','Початківець','Мандрівник','Дослідник','Хоробрець','Умілець','Ветеран','Майстер','Гранд-майстер','Легенда','Непереможний'],
  en:['','Newcomer','Beginner','Wanderer','Explorer','Brave','Skilled','Veteran','Master','Grandmaster','Legend','Unbeatable'],
  fr:['','Débutant','Apprenti','Voyageur','Explorateur','Courageux','Habile','Vétéran','Maître','Grand maître','Légende','Invincible'],
};
function levelTitle(l) { const t=LEVEL_TITLES[currentLang]||LEVEL_TITLES.ua; return t[Math.min(l,t.length-1)]||'Hero'; }
function xpNeeded(l) { return l*100+(l-1)*50; }
function addXP(amount) {
  S.xp+=amount;
  while(S.xp>=xpNeeded(S.level)) { S.xp-=xpNeeded(S.level); S.level++; }
}
function showLevelUp(lvl) {
  document.getElementById('luNum').textContent=lvl;
  document.getElementById('luTitle').textContent=levelTitle(lvl);
  const perksMap = {
    ua:[[],['🎒 Більше слотів в інвентарі'],['🪙 Монети +10%'],['⚡ XP +10%'],['🛍️ Нові предмети в магазині'],['🔥 Захист серії на 1 день'],['💎 Легендарні завдання частіше'],['🌟 Подвійний дроп'],['👑 Ексклюзивні завдання'],['🏆 Золотий значок']],
    en:[[],['🎒 More inventory slots'],['🪙 Coins +10%'],['⚡ XP +10%'],['🛍️ New items in shop'],['🔥 Streak protection 1 day'],['💎 Legendary tasks more often'],['🌟 Double item drop'],['👑 Exclusive tasks'],['🏆 Gold badge']],
    fr:[[],['🎒 Plus d\'emplacements'],['🪙 Pièces +10%'],['⚡ XP +10%'],['🛍️ Nouveaux objets'],['🔥 Protection de série 1 jour'],['💎 Tâches légendaires plus souvent'],['🌟 Double drop'],['👑 Tâches exclusives'],['🏆 Insigne doré']],
  };
  const pm = perksMap[currentLang]||perksMap.ua;
  const perks = pm[Math.min(lvl-1,pm.length-1)]||['✨ Нові можливості відкриті'];
  document.getElementById('luPerks').innerHTML=perks.map((p,i)=>`<div class="lu-perk" style="animation-delay:${i*.1}s"><span>${p.split(' ')[0]}</span><span>${p.slice(p.indexOf(' ')+1)}</span></div>`).join('');
  openOverlay('levelupOverlay');
}

// ═══════════════════════════════════════════════════════════════
//  INVENTORY
// ═══════════════════════════════════════════════════════════════
function addInv(id,n) { S.inventory[id]=(S.inventory[id]||0)+n; if(S.inventory[id]>ITEMS[id].maxStock) S.inventory[id]=ITEMS[id].maxStock; }
function removeInv(id,n) { S.inventory[id]=Math.max(0,(S.inventory[id]||0)-n); if(!S.inventory[id]) delete S.inventory[id]; }
function invCount(id) { return S.inventory[id]||0; }
function totalInv() { return Object.values(S.inventory).reduce((a,b)=>a+b,0); }

function renderInventory() {
  const grid=document.getElementById('invGrid');
  if(!grid)return;
  const cap=document.getElementById('invCapacity');
  if(cap) cap.textContent=t('inv.capacity').replace('{n}',totalInv()).replace('{max}',50);
  const entries=Object.entries(S.inventory).filter(([,c])=>c>0);
  if(!entries.length){
    grid.innerHTML=`<div class="empty-state"><div class="empty-state-icon">🎒</div><div class="empty-state-title">${t('inv.empty')}</div><div>${t('inv.emptyHint')}</div></div>`;return;
  }
  const rarC={'common':'r-common','rare':'r-rare','epic':'r-epic','legendary':'r-legendary'};
  grid.innerHTML=entries.map(([id,count])=>{
    const it=ITEMS[id]; if(!it)return '';
    const sc=count>=it.maxStock?'full':count<=1?'low':'';
    return `<div class="inv-card">
      <span class="inv-stock ${sc}">${count}/${it.maxStock}</span>
      <span class="inv-icon">${it.icon}</span>
      <div class="inv-rarity ${rarC[it.rarity]}">${(RARITY[it.rarity][currentLang]||RARITY[it.rarity].ua).toUpperCase()}</div>
      <div class="inv-name">${iName(it)}</div>
      <div class="inv-desc">${iDesc(it)}</div>
      <button class="btn-use" onclick="openUseItem('${id}')" ${count<=0?'disabled':''}>${t('item.useBtn')}</button>
    </div>`;
  }).join('');
}

// ═══════════════════════════════════════════════════════════════
//  USE ITEM
// ═══════════════════════════════════════════════════════════════
let pendingUseItem=null;
function openUseItem(id) {
  const it=ITEMS[id]; if(!it||invCount(id)<=0)return;
  pendingUseItem=id;
  document.getElementById('useItemIcon').textContent=it.icon;
  document.getElementById('useItemName').textContent=iName(it);
  document.getElementById('useItemDesc').textContent=iDesc(it);
  document.getElementById('useItemEffect').innerHTML=`<strong>${it.buffLabel}</strong><br><span style="color:${it.buffColor};font-size:13px">${iDesc(it)}</span>`;
  openOverlay('useItemOverlay');
}
function confirmUse() {
  const id=pendingUseItem; if(!id)return;
  const it=ITEMS[id];
  if(!invCount(id)){toast('Немає предмету!','err');return;}
  removeInv(id,1); closeOverlay('useItemOverlay');
  // Миттєві ефекти
  if(id==='ticket'){S.dailyGenerations=Math.max(0,S.dailyGenerations-5);saveState();renderGenLimit();toast('🎟️ +5 генерацій!','ok');return;}
  if(id==='tea'){S.streak=Math.max(S.streak,1);saveState();updateHeader();toast('🍵 Серія відновлена!','ok');return;}
  if(id==='cosmos'){addXP(1000);saveState();updateHeader();toast('🌌 +1000 XP!','ok','🌌');spawnParticles(20);return;}
  if(id==='void'){activateBuff(it);toast('🌑 VOID активовано! ×5 на наступне завдання!','ok');return;}
  if(it.effect==='gift') {
    const eligible=Object.values(ITEMS).filter(x=>x.id!==id&&invCount(x.id)<x.maxStock);
    if(eligible.length){const gift=randFrom(eligible);addInv(gift.id,1);toast(`${gift.icon} ${iName(gift)}!`,'ok');}
  } else if(it.effect==='streak'){
    S.streak=Math.min(S.streak+1,9999); toast('🔥 Серія +1!','ok');
  } else if(it.effect==='reveal'){
    const type=randFrom(['home','outdoor']);
    const diff=randFrom(['easy','medium','hard']);
    const tpl=randFrom(TASK_TEMPLATES[type][diff]);
    toast(`🔮 ${tpl.t[currentLang]||tpl.t.ua}`,'info');
  } else if(it.effect==='skip'){
    addInv(id,1); // put back — they need to click skip on task
    toast('📜 Натисни ✕ на завданні!','info');
  } else if(it.effect==='swap'){
    toast('🎭 Надіслано другу!','ok');
  } else {
    activateBuff(it);
  }
  saveState(); renderInventory(); renderSidebar();
  toast(t('toast.itemUsed'),'ok','✨');
}

// ═══════════════════════════════════════════════════════════════
//  BUFFS
// ═══════════════════════════════════════════════════════════════
function activateBuff(it) {
  S.activeBuffs=S.activeBuffs.filter(b=>b.effect!==it.effect);
  S.activeBuffs.push({id:uid(),effect:it.effect,icon:it.icon,label:it.buffLabel,color:it.buffColor,uses:it.buffUses||1});
  renderSidebar();
}
function hasBuff(effect){ return S.activeBuffs.some(b=>b.effect===effect&&b.uses>0); }
function consumeBuff(effect){ const b=S.activeBuffs.find(b=>b.effect===effect); if(b){b.uses--;if(!b.uses)S.activeBuffs=S.activeBuffs.filter(x=>x.id!==b.id);} renderSidebar(); }

// ═══════════════════════════════════════════════════════════════
//  SHOP
// ═══════════════════════════════════════════════════════════════
function renderShop() {
  const grid=document.getElementById('shopGrid'); if(!grid)return;
  checkDailyReset();
  const rarOrder=['common','rare','epic','legendary','mythic'];
  const rarClass={'common':'r-common','rare':'r-rare','epic':'r-epic','legendary':'r-legendary','mythic':'r-mythic'};
  const rarBadge={
    legendary:'<div class="shop-badge-tag">LEGEND</div>',
    epic:`<div class="shop-badge-tag" style="background:var(--purple)">EPIC</div>`,
    mythic:`<div class="shop-badge-tag" style="background:linear-gradient(90deg,#cc00ff,#ff00cc);animation:glow 1.5s infinite">✦ MYTHIC</div>`,
  };
  // Сортуємо: спочатку доступні, потім за рідкістю
  const sorted = Object.values(ITEMS).sort((a,b)=>{
    const aStock=S.shopStock[a.id]||0, bStock=S.shopStock[b.id]||0;
    if(aStock>0&&bStock<=0)return -1;
    if(aStock<=0&&bStock>0)return 1;
    return rarOrder.indexOf(b.rarity)-rarOrder.indexOf(a.rarity);
  });
  const available=sorted.filter(it=>(S.shopStock[it.id]||0)>0);
  const unavailable=sorted.filter(it=>(S.shopStock[it.id]||0)<=0);
  const renderCard=it=>{
    const stock=S.shopStock[it.id]||0;
    const hasInv=invCount(it.id)>=it.maxStock;
    const canBuy=S.coins>=it.price&&stock>0&&!hasInv;
    const pct=Math.round((stock/it.maxStock)*100);
    let btnTxt=t('shop.buy');
    if(hasInv)btnTxt=t('shop.full');
    else if(stock<=0)btnTxt='Немає сьогодні';
    else if(S.coins<it.price)btnTxt=t('shop.notEnough');
    const mythicStyle=it.rarity==='mythic'?'border-color:rgba(204,0,255,.5);background:linear-gradient(145deg,var(--bg3),rgba(204,0,255,.06));':'';
    return `<div class="shop-card${stock<=0?' shop-card-unavail':''}" style="${mythicStyle}">
      ${rarBadge[it.rarity]||''}
      <span class="shop-icon">${it.icon}</span>
      <div class="shop-name">${iName(it)}</div>
      <div class="inv-rarity ${rarClass[it.rarity]||'r-common'}" style="margin-bottom:6px">${(RARITY[it.rarity]?.[currentLang]||RARITY[it.rarity]?.ua||it.rarity).toUpperCase()}</div>
      <div class="shop-desc">${iDesc(it)}</div>
      ${stock>0?`<div class="shop-stock-info">${t('shop.inStock')} <span style="color:${stock<=1?'var(--red)':'var(--orange)'};font-weight:700">${stock}/${it.maxStock}</span></div>
      <div class="shop-stock-bar"><div class="shop-stock-fill" style="width:${pct}%;background:${pct>50?'var(--green)':pct>20?'var(--gold)':'var(--red)'}"></div></div>`
      :`<div style="color:var(--sub2);font-size:12px;margin:8px 0">🔒 Не з'явився сьогодні</div>`}
      <div class="shop-price">🪙 ${it.price}</div>
      <button class="btn-buy" onclick="buyItem('${it.id}')" ${canBuy?'':'disabled'}>${btnTxt}</button>
    </div>`;
  };
  grid.innerHTML = `
    ${available.length?`<div style="grid-column:1/-1;font-size:13px;color:var(--green);font-weight:700;margin-bottom:4px">✅ Доступно сьогодні (${available.length}/${sorted.length})</div>`:''}
    ${available.map(renderCard).join('')}
    ${unavailable.length?`<div style="grid-column:1/-1;font-size:13px;color:var(--sub2);font-weight:700;margin:8px 0 4px">🔒 Недоступно сьогодні — оновлення завтра</div>`:''}
    ${unavailable.map(renderCard).join('')}
  `;
}

function buyItem(id) {
  const it=ITEMS[id]; if(!it)return;
  checkDailyReset();
  if(S.coins<it.price){toast(t('shop.notEnough'),'warn');return;}
  if(invCount(id)>=it.maxStock){toast(t('shop.full'),'warn');return;}
  if((S.shopStock[id]||0)<=0){toast(t('shop.noStock'),'err');return;}
  S.coins-=it.price; addInv(id,1); S.shopStock[id]--;
  saveState(); updateHeader(); renderShop();
  toast(`${it.icon} ${t('toast.itemBought')}`,'ok');
  spawnParticles(6);
}

// ═══════════════════════════════════════════════════════════════
//  FRIENDS & TRADE
// ═══════════════════════════════════════════════════════════════
function renderFriends() {
  const myCode=document.getElementById('myCodeDisplay');
  if(myCode) myCode.textContent=S.user?.code||'TQ-0000';
  const fc=document.getElementById('friendCount');
  if(fc) fc.textContent=`(${S.friends.length})`;
  const list=document.getElementById('friendsList');
  if(list){
    if(!S.friends.length){
      list.innerHTML=`<div style="text-align:center;color:var(--sub);padding:20px;font-size:14px">${t('friends.empty')}</div>`;
    } else {
      list.innerHTML=S.friends.map(f=>`
        <div class="friend-item">
          <div class="f-avatar">${f.avatar}</div>
          <div class="f-info">
            <div class="f-name">${f.name}</div>
            <div class="f-meta">Lv.${f.level} • ${f.xp.toLocaleString()} XP</div>
          </div>
          <span class="f-status ${f.online?'f-online':'f-offline'}">${f.online?t('friends.online'):t('friends.offline')}</span>
          <button class="btn-remove-friend" onclick="removeFriend('${f.id}')" title="${t('friends.remove')}">✕</button>
        </div>`).join('');
    }
  }
  updateTradeUI();
}

function addFriend() {
  const code=document.getElementById('friendInput').value.trim().toUpperCase();
  if(!/^TQ-\d{4}$/.test(code)){toast(t('friends.badCode'),'warn');return;}
  if(code===S.user?.code){toast(t('friends.ownCode'),'warn');return;}
  if(S.friends.find(f=>f.id===code)){toast(t('friends.alreadyAdded'),'warn');return;}
  const names={ua:['Олексій','Катерина','Дмитро','Ірина','Максим','Роман','Соломія','Богдан'],en:['Alex','Kate','Max','Nina','Leo','Sophie'],fr:['Alex','Sophie','Luc','Nina','Émile','Chloé']};
  const nm=names[currentLang]||names.ua;
  const avList=['🦊','🌸','⚔️','🌊','⭐','🍃','💫','🦅','🐉','🌺'];
  const friend={id:code,name:randFrom(nm),avatar:randFrom(avList),level:Math.floor(1+Math.random()*15),xp:Math.floor(Math.random()*8000),online:Math.random()>.4};
  S.friends.push(friend);
  S.friendInvs[code]={energy:Math.floor(Math.random()*4),clover:Math.floor(Math.random()*3),scroll:Math.floor(Math.random()*4),moon:Math.floor(Math.random()*2)};
  document.getElementById('friendInput').value='';
  saveState(); renderFriends();
  toast(t('friends.added'),'ok','👥');
  updateLeaderboard();
}

function removeFriend(id) {
  S.friends=S.friends.filter(f=>f.id!==id);
  delete S.friendInvs[id];
  saveState(); renderFriends(); renderLeaderboard();
}

function copyCode() {
  if(navigator.clipboard){navigator.clipboard.writeText(S.user?.code||'').then(()=>toast(t('friends.copied'),'ok','📋'));}
  else{toast(t('friends.copied'),'ok','📋');}
}

function updateTradeUI() {
  const giveEl=document.getElementById('tradeGive');
  if(giveEl){
    giveEl.innerHTML=`<option value="">${t('trade.give')}...</option>`+
      Object.entries(S.inventory).filter(([,c])=>c>0).map(([id,c])=>{
        const it=ITEMS[id];return it?`<option value="${id}">${it.icon} ${iName(it)} (${c})</option>`:'';
      }).join('');
  }
  const fw=document.getElementById('tradeWithFriend');
  if(fw){
    fw.innerHTML=`<option value="">${t('trade.noFriend')}...</option>`+
      S.friends.map(f=>`<option value="${f.id}">${f.avatar} ${f.name}</option>`).join('');
    fw.onchange=loadFriendInv;
  }
}

function loadFriendInv() {
  const fid=document.getElementById('tradeWithFriend')?.value;
  const sel=document.getElementById('tradeFriendItem');
  if(!sel)return;
  const inv=S.friendInvs[fid]||{};
  sel.innerHTML=`<option value="">${t('trade.get')}...</option>`+
    Object.entries(inv).filter(([,c])=>c>0).map(([id,c])=>{
      const it=ITEMS[id];return it?`<option value="${id}">${it.icon} ${iName(it)} (${c})</option>`:'';
    }).join('');
}

function previewTrade() {
  const g=ITEMS[document.getElementById('tradeGive')?.value];
  const r=ITEMS[document.getElementById('tradeFriendItem')?.value];
  const pg=document.getElementById('previewGive'); if(pg)pg.textContent=g?g.icon:'';
  const pr=document.getElementById('previewGet');  if(pr)pr.textContent=r?r.icon:'';
}

function executeTrade() {
  const giveId=document.getElementById('tradeGive')?.value;
  const getId=document.getElementById('tradeFriendItem')?.value;
  const fid=document.getElementById('tradeWithFriend')?.value;
  if(!giveId){toast(t('trade.noItem'),'warn');return;}
  if(!fid){toast(t('trade.noFriend'),'warn');return;}
  if(!getId){toast(t('trade.noItem'),'warn');return;}
  if(!invCount(giveId)){toast(t('shop.noStock'),'err');return;}
  removeInv(giveId,1);
  addInv(getId,1);
  const fi=S.friendInvs[fid]||{};
  fi[getId]=Math.max(0,(fi[getId]||0)-1);
  if(!fi[getId])delete fi[getId];
  fi[giveId]=(fi[giveId]||0)+1;
  S.friendInvs[fid]=fi;
  saveState();
  const friend=S.friends.find(f=>f.id===fid);
  const gi=ITEMS[giveId],ri=ITEMS[getId];
  const logEl=document.getElementById('tradeLog');
  if(logEl) logEl.innerHTML=`<div class="trade-log-item">${gi.icon} → ${ri.icon} ${t('trade.done')} ${friend?.name} (${new Date().toLocaleTimeString()})</div>`+logEl.innerHTML;
  updateTradeUI(); renderInventory();
  toast(`${gi.icon} ↔ ${ri.icon} ${t('toast.tradeOk')}`,'ok','🔄');
  spawnParticles(8);
}

// ═══════════════════════════════════════════════════════════════
//  LEADERBOARD (no bots — only user + friends)
// ═══════════════════════════════════════════════════════════════
let lbTab = 'all';
function renderLeaderboard(tab) {
  if(tab) lbTab = tab;
  const el=document.getElementById('lbContent'); if(!el)return;
  if(!S.settings.showInLB){ el.innerHTML=`<div class="lb-tabs"></div><div class="lb-empty"><div class="lb-empty-icon">🔒</div><div class="lb-empty-title">Прихований профіль</div></div>`; return; }
  const tabsHtml=`<div class="lb-tabs">
    <button class="lb-tab${lbTab==='all'?' active':''}" onclick="renderLeaderboard('all')">🏆 Загальний</button>
    <button class="lb-tab${lbTab==='weekly'?' active':''}" onclick="renderLeaderboard('weekly')">📅 Тижневий</button>
  </div>`;
  if(lbTab==='weekly'){
    el.innerHTML=tabsHtml+`<div style="text-align:center;padding:20px;color:var(--sub)">⏳ Завантаження...</div>`;
    fetch('/api/leaderboard/weekly',{credentials:'include'}).then(r=>r.json()).then(data=>{
      const PRIZES={0:'🥇 +200🪙',1:'🥈 +100🪙',2:'🥉 +50🪙'};
      const rankClass=(i)=>i===0?'g':i===1?'s':i===2?'b':'';
      el.innerHTML=tabsHtml+`<div style="font-size:12px;color:var(--sub);margin-bottom:12px">🎁 Топ-3 отримають монети в кінці тижня</div>`
        +data.map((e,i)=>`<div class="lb-item${e.isMe?' me':''}">
          <div class="lb-rank ${rankClass(i)}">${i+1}</div>
          <div class="lb-av">${e.avatar||'🌿'}</div>
          <div class="lb-info">
            <div class="lb-name">${e.name}${e.isMe?' <span style="color:var(--green)">(Ти)</span>':''}</div>
            <div class="lb-level">Lv.${e.level} ${PRIZES[i]||''}</div>
          </div>
          <div class="lb-score">${(e.weekly_xp||0).toLocaleString()} XP цього тижня</div>
        </div>`).join('');
    }).catch(()=>{ el.innerHTML=tabsHtml+'<div style="color:var(--sub);padding:20px;text-align:center">Помилка завантаження</div>'; });
    return;
  }
  const me={ name:S.user?.name||'?', avatar:S.user?.avatar||'🌿', level:S.level, xp:S.xp+S.level*100, isMe:true };
  const entries=[me,...S.friends.map(f=>({name:f.name,avatar:f.avatar,level:f.level,xp:f.xp,isMe:false}))];
  entries.sort((a,b)=>b.xp-a.xp);
  if(entries.length<=1&&!S.friends.length){
    el.innerHTML=tabsHtml+`<div class="lb-empty"><div class="lb-empty-icon">🏆</div><div class="lb-empty-title">${t('lb.onlyYou')}</div><div>${t('lb.emptyHint')}</div></div>`;return;
  }
  const rankClass=(i)=>i===0?'g':i===1?'s':i===2?'b':'';
  el.innerHTML=tabsHtml+entries.map((e,i)=>`
    <div class="lb-item${e.isMe?' me':''}">
      <div class="lb-rank ${rankClass(i)}">${i+1}</div>
      <div class="lb-av">${e.avatar}</div>
      <div class="lb-info">
        <div class="lb-name">${e.name}${e.isMe?` <span style="color:var(--green)">${t('lb.you')}</span>`:''}</div>
        <div class="lb-level">Lv.${e.level}</div>
      </div>
      <div class="lb-score">${e.xp.toLocaleString()} XP</div>
    </div>`).join('');
}
function updateLeaderboard() { if(document.getElementById('page-leaderboard')?.classList.contains('active')) renderLeaderboard(); }

// ═══════════════════════════════════════════════════════════════
//  STATS
// ═══════════════════════════════════════════════════════════════
function renderStats() {
  const grid=document.getElementById('statsGrid'); if(!grid)return;
  const done=S.tasks.filter(x=>x.completed).length;
  const totalCoins=S.history.reduce((a,h)=>a+(h.coins||0),0);
  const legendary=S.history.filter(x=>x.diff==='legendary').length;
  const statData=[
    {icon:'✅',val:done,label:'Виконано',color:'var(--green)'},
    {icon:'🪙',val:S.coins,label:'Монет',color:'var(--gold)'},
    {icon:'⚡',val:S.xp,label:'XP',color:'var(--purple)'},
    {icon:'🔥',val:S.streak,label:'Серія',color:'var(--orange)'},
    {icon:'🎒',val:totalInv(),label:'В інвентарі',color:'var(--teal)'},
    {icon:'👑',val:legendary,label:'Легендарних',color:'var(--gold)'},
    {icon:'👥',val:S.friends.length,label:'Друзів',color:'var(--blue)'},
    {icon:'📈',val:'Lv.'+S.level,label:'Рівень',color:'var(--pink)'},
  ];
  grid.innerHTML=statData.map(s=>`<div class="stat-card"><div class="stat-icon">${s.icon}</div><div class="stat-val" style="color:${s.color}">${s.val}</div><div class="stat-label">${s.label}</div></div>`).join('');
  const hist=document.getElementById('historyList');
  if(hist){
    const dc={easy:'var(--green)',medium:'var(--gold)',hard:'var(--red)',legendary:'var(--gold)'};
    const dl={easy:t('diff.easy'),medium:t('diff.medium'),hard:t('diff.hard'),legendary:t('diff.legendary')};
    hist.innerHTML=S.history.length?S.history.slice(0,30).map(h=>`
      <div class="hist-item">
        <span class="hist-icon">${h.icon}</span>
        <div class="hist-info">
          <div class="hist-title">${h.title}</div>
          <div class="hist-meta">${h.type==='home'?t('tasks.home'):t('tasks.outdoor')} • <span style="color:${dc[h.diff]}">${dl[h.diff]}</span>${h.item?` • 🎁 ${h.item}`:''} • ${h.date}</div>
        </div>
        <div class="hist-rew">+${h.coins}🪙 +${h.xp}⚡</div>
      </div>`).join(''):`<div style="text-align:center;color:var(--sub);padding:30px">${t('stats.noHistory')}</div>`;
  }
}

// ═══════════════════════════════════════════════════════════════
//  PREMIUM
// ═══════════════════════════════════════════════════════════════
function renderPremium() {
  const plans=[
    {name:{ua:'Безкоштовно',en:'Free',fr:'Gratuit'},price:'0',period:t('premium.free'),features:{ua:['10 генерацій/день','Базові предмети','До 3 друзів','Стандартний магазин'],en:['10 generations/day','Basic items','Up to 3 friends','Standard shop'],fr:['10 générations/jour','Objets de base','Jusqu\'à 3 amis','Boutique standard']},featured:false,current:!S.premium},
    {name:{ua:'Pro',en:'Pro',fr:'Pro'},price:'$4.99',period:t('premium.perMonth'),features:{ua:['50 генерацій/день','Всі предмети','Необмежено друзів','Пріоритетний магазин','Щоденний подарунок','Значок Pro'],en:['50 generations/day','All items','Unlimited friends','Priority shop','Daily gift','Pro badge'],fr:['50 générations/jour','Tous les objets','Amis illimités','Boutique prioritaire','Cadeau quotidien','Badge Pro']},featured:true,current:S.premium&&!S.premiumPlan?.includes('year')},
    {name:{ua:'Річний',en:'Annual',fr:'Annuel'},price:'$39.99',period:t('premium.perYear'),features:{ua:['Все з Pro','Знижка 33%','Ексклюзивні аватари','Легендарні завдання першим','VIP підтримка'],en:['Everything in Pro','33% discount','Exclusive avatars','Legendary tasks first','VIP support'],fr:['Tout en Pro','Réduction 33%','Avatars exclusifs','Tâches légendaires en premier','Support VIP']},featured:false,current:false},
  ];
  const pg=document.getElementById('plansGrid'); if(!pg)return;
  pg.innerHTML=plans.map(p=>`
    <div class="plan-card${p.featured?' featured':''}">
      ${p.featured?`<div class="plan-badge">${t('premium.popular')}</div>`:''}
      <div class="plan-name">${p.name[currentLang]||p.name.ua}</div>
      <div class="plan-price">${p.price}</div>
      <div class="plan-period">${p.period}</div>
      <div class="plan-features">${(p.features[currentLang]||p.features.ua).map(f=>`<div class="plan-feat">${f}</div>`).join('')}</div>
      <button class="btn-plan" onclick="selectPlan('${p.name.en}')">${p.current?t('premium.current'):t('premium.subscribe')}</button>
    </div>`).join('');
  const pf=document.getElementById('premiumFeatures'); if(!pf)return;
  const feats=[
    {icon:'🎲',title:{ua:'Більше генерацій',en:'More generations',fr:'Plus de générations'},desc:{ua:'50 завдань на день замість 10',en:'50 tasks per day instead of 10',fr:'50 tâches par jour au lieu de 10'}},
    {icon:'🎁',title:{ua:'Щоденний подарунок',en:'Daily gift',fr:'Cadeau quotidien'},desc:{ua:'Безкоштовний предмет кожного дня',en:'Free item every day',fr:'Objet gratuit chaque jour'}},
    {icon:'👑',title:{ua:'Ексклюзивні завдання',en:'Exclusive tasks',fr:'Tâches exclusives'},desc:{ua:'Унікальні завдання тільки для Pro',en:'Unique tasks only for Pro users',fr:'Tâches uniques pour les utilisateurs Pro'}},
    {icon:'🛡️',title:{ua:'Захист серії',en:'Streak shield',fr:'Bouclier de série'},desc:{ua:'Зберігай серію навіть якщо пропустив',en:'Keep your streak even if you miss a day',fr:'Gardez votre série même si vous manquez un jour'}},
  ];
  pf.innerHTML=`<div style="font-size:16px;font-weight:700;margin-bottom:14px" data-i18n="premium.sub">${t('premium.sub')}</div>
    <div class="prem-feat-grid">${feats.map(f=>`<div class="prem-feat-item"><div class="prem-feat-icon">${f.icon}</div><div><div class="prem-feat-title">${f.title[currentLang]||f.title.ua}</div><div class="prem-feat-desc">${f.desc[currentLang]||f.desc.ua}</div></div></div>`).join('')}</div>`;
}

// ═══════════════════════════════════════════════════════════════
//  REFERRAL
// ═══════════════════════════════════════════════════════════════
function renderReferral() {
  const el = document.getElementById('referralContent'); if(!el) return;
  const code = S.user?.code || '';
  const refUrl = `${window.location.origin}/?ref=${code}`;
  const refCount = S.user?.refCount || 0;
  const earned = refCount * 100;
  el.innerHTML = `
    <div style="display:grid;gap:16px;max-width:600px">
      <!-- Як це працює -->
      <div style="background:linear-gradient(135deg,var(--bg3),rgba(63,185,80,.08));border:1px solid rgba(63,185,80,.25);border-radius:var(--r2);padding:24px">
        <div style="font-size:18px;font-weight:800;margin-bottom:16px">🎁 Як це працює</div>
        <div style="display:flex;flex-direction:column;gap:12px">
          <div style="display:flex;align-items:center;gap:12px;font-size:14px">
            <div style="width:32px;height:32px;border-radius:50%;background:var(--green);color:#000;display:flex;align-items:center;justify-content:center;font-weight:900;flex-shrink:0">1</div>
            <span>Поділись своїм посиланням з другом</span>
          </div>
          <div style="display:flex;align-items:center;gap:12px;font-size:14px">
            <div style="width:32px;height:32px;border-radius:50%;background:var(--blue);color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900;flex-shrink:0">2</div>
            <span>Друг реєструється через твоє посилання</span>
          </div>
          <div style="display:flex;align-items:center;gap:12px;font-size:14px">
            <div style="width:32px;height:32px;border-radius:50%;background:var(--gold);color:#000;display:flex;align-items:center;justify-content:center;font-weight:900;flex-shrink:0">3</div>
            <span><b>Ти отримуєш 🪙 100 монет</b>, друг отримує 🪙 50 монет</span>
          </div>
        </div>
      </div>

      <!-- Твоє посилання -->
      <div style="background:var(--bg2);border:1px solid var(--border);border-radius:var(--r2);padding:20px">
        <div style="font-size:15px;font-weight:700;margin-bottom:10px">🔗 Твоє реферальне посилання</div>
        <div style="display:flex;gap:8px;align-items:center">
          <input readonly style="flex:1;background:var(--bg3);font-size:12px" value="${refUrl}" id="refUrlInput">
          <button onclick="copyRefLink()" style="padding:9px 16px;border-radius:var(--r);background:var(--green);color:#000;font-weight:800;font-size:13px;white-space:nowrap">📋 Копіювати</button>
        </div>
        <div style="margin-top:10px;display:flex;gap:8px;flex-wrap:wrap">
          <button onclick="shareRef('telegram')" style="padding:8px 14px;border-radius:var(--r);background:#0088cc;color:#fff;font-size:13px;font-weight:700">✈️ Telegram</button>
          <button onclick="shareRef('viber')" style="padding:8px 14px;border-radius:var(--r);background:#7360f2;color:#fff;font-size:13px;font-weight:700">📱 Viber</button>
          <button onclick="shareRef('whatsapp')" style="padding:8px 14px;border-radius:var(--r);background:#25d366;color:#fff;font-size:13px;font-weight:700">💬 WhatsApp</button>
        </div>
      </div>

      <!-- Статистика -->
      <div style="background:var(--bg2);border:1px solid var(--border);border-radius:var(--r2);padding:20px">
        <div style="font-size:15px;font-weight:700;margin-bottom:14px">📊 Твоя статистика</div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px">
          <div style="background:var(--bg3);border-radius:var(--r);padding:14px;text-align:center">
            <div style="font-size:28px;font-weight:900;color:var(--blue)">${refCount}</div>
            <div style="font-size:12px;color:var(--sub)">Запрошено друзів</div>
          </div>
          <div style="background:var(--bg3);border-radius:var(--r);padding:14px;text-align:center">
            <div style="font-size:28px;font-weight:900;color:var(--gold)">🪙 ${earned}</div>
            <div style="font-size:12px;color:var(--sub)">Зароблено монет</div>
          </div>
        </div>
      </div>
    </div>`;
}

function copyRefLink() {
  const input = document.getElementById('refUrlInput');
  if(navigator.clipboard) { navigator.clipboard.writeText(input.value).then(()=>toast('Посилання скопійовано!','ok','📋')); }
  else { input.select(); document.execCommand('copy'); toast('Скопійовано!','ok','📋'); }
}

function shareRef(platform) {
  const code = S.user?.code || '';
  const url = encodeURIComponent(`${window.location.origin}/?ref=${code}`);
  const text = encodeURIComponent('Спробуй TaskQuest — виконуй завдання та отримуй нагороди! 🌿');
  const links = {
    telegram: `https://t.me/share/url?url=${url}&text=${text}`,
    viber: `viber://forward?text=${text}%20${url}`,
    whatsapp: `https://wa.me/?text=${text}%20${url}`,
  };
  window.open(links[platform], '_blank');
}

// ═══════════════════════════════════════════════════════════════
//  🏆 ACHIEVEMENTS
// ═══════════════════════════════════════════════════════════════
const ACHIEVEMENTS = [
  {id:'first_task',    icon:'🌱', title:{ua:'Перший крок',en:'First Step'}, desc:{ua:'Виконай перше завдання',en:'Complete your first task'}, goal:1,  type:'tasks',  reward:{coins:50,xp:100}},
  {id:'task10',        icon:'🔥', title:{ua:'На хвилі',en:'On a Roll'}, desc:{ua:'Виконай 10 завдань',en:'Complete 10 tasks'}, goal:10, type:'tasks',  reward:{coins:100,xp:200}},
  {id:'task50',        icon:'⚡', title:{ua:'Продуктивний',en:'Productive'}, desc:{ua:'Виконай 50 завдань',en:'Complete 50 tasks'}, goal:50, type:'tasks',  reward:{coins:300,xp:500,item:'clover'}},
  {id:'task100',       icon:'💎', title:{ua:'Майстер задач',en:'Task Master'}, desc:{ua:'Виконай 100 завдань',en:'Complete 100 tasks'}, goal:100,type:'tasks',  reward:{coins:500,xp:1000,item:'stardust'}},
  {id:'streak3',       icon:'🔥', title:{ua:'Серія 3 дні',en:'3-Day Streak'}, desc:{ua:'3 дні поспіль',en:'3 days in a row'}, goal:3,  type:'streak', reward:{coins:75,xp:150}},
  {id:'streak7',       icon:'🌟', title:{ua:'Тижнева серія',en:'Week Streak'}, desc:{ua:'7 днів поспіль',en:'7 days in a row'}, goal:7,  type:'streak', reward:{coins:200,xp:400,item:'flask'}},
  {id:'streak30',      icon:'👑', title:{ua:'Місячна серія',en:'Month Streak'}, desc:{ua:'30 днів поспіль',en:'30 days in a row'}, goal:30, type:'streak', reward:{coins:1000,xp:2000,item:'dragon'}},
  {id:'legendary1',    icon:'🐉', title:{ua:'Легендарний',en:'Legendary One'}, desc:{ua:'Виконай 1 легендарне завдання',en:'Complete 1 legendary task'}, goal:1,  type:'legendary',reward:{coins:150,xp:300}},
  {id:'legendary10',   icon:'🌈', title:{ua:'Мисливець легенд',en:'Legend Hunter'}, desc:{ua:'Виконай 10 легендарних',en:'Complete 10 legendary'}, goal:10, type:'legendary',reward:{coins:500,xp:800,item:'rainbow'}},
  {id:'coins500',      icon:'🪙', title:{ua:'Накопичувач',en:'Collector'}, desc:{ua:'Зароби 500 монет всього',en:'Earn 500 total coins'}, goal:500,type:'coins',  reward:{coins:100,xp:200}},
  {id:'coins5000',     icon:'💰', title:{ua:'Скарбник',en:'Treasurer'}, desc:{ua:'Зароби 5000 монет всього',en:'Earn 5000 total coins'}, goal:5000,type:'coins', reward:{coins:500,xp:500,item:'gem'}},
  {id:'level5',        icon:'🚀', title:{ua:'Рівень 5',en:'Level 5'}, desc:{ua:'Досягни 5-го рівня',en:'Reach level 5'}, goal:5,  type:'level',  reward:{coins:200,xp:0,item:'moon'}},
  {id:'level10',       icon:'🏆', title:{ua:'Ветеран',en:'Veteran'}, desc:{ua:'Досягни 10-го рівня',en:'Reach level 10'}, goal:10, type:'level',  reward:{coins:500,xp:0,item:'phoenix'}},
  {id:'friends3',      icon:'👥', title:{ua:'Компанія',en:'Company'}, desc:{ua:'Додай 3 друзів',en:'Add 3 friends'}, goal:3,  type:'friends', reward:{coins:150,xp:200}},
  {id:'shop5',         icon:'🛒', title:{ua:'Покупець',en:'Shopper'}, desc:{ua:'Купи 5 предметів у магазині',en:'Buy 5 items in shop'}, goal:5,  type:'shop',   reward:{coins:100,xp:150}},
  {id:'easter',        icon:'🥚', title:{ua:'Мисливець секретів',en:'Secret Hunter'}, desc:{ua:'Знайди пасхалку',en:'Find the easter egg'}, goal:1,  type:'easter', reward:{coins:200,xp:300,item:'compass'}},
];

function getAchProgress(ach) {
  switch(ach.type) {
    case 'tasks':    return Math.min(S.totalTasksDone||0, ach.goal);
    case 'streak':   return Math.min(S.streak||0, ach.goal);
    case 'legendary':return Math.min(S.totalLegendary||0, ach.goal);
    case 'coins':    return Math.min(S.totalCoinsEarned||0, ach.goal);
    case 'level':    return Math.min(S.level||1, ach.goal);
    case 'friends':  return Math.min(S.friends?.length||0, ach.goal);
    case 'shop':     return Math.min(S.achievements[ach.id]?.progress||0, ach.goal);
    case 'easter':   return S.achievements[ach.id]?.unlocked ? 1 : 0;
    default: return 0;
  }
}

function checkAchievements() {
  ACHIEVEMENTS.forEach(ach => {
    if (S.achievements[ach.id]?.unlocked) return;
    const prog = getAchProgress(ach);
    if (prog >= ach.goal) {
      if (!S.achievements[ach.id]) S.achievements[ach.id] = {};
      S.achievements[ach.id].unlocked = true;
      // Авто-нарахування нагороди
      S.coins += ach.reward.coins || 0;
      addXP(ach.reward.xp || 0);
      if (ach.reward.item && ITEMS[ach.reward.item]) addInv(ach.reward.item, 1);
      saveState(); updateHeader();
      showAchievementToast(ach);
    }
  });
}

function showAchievementToast(ach) {
  const t2 = document.createElement('div');
  t2.className = 'toast show';
  t2.style.cssText = 'border-color:rgba(240,198,116,.6);background:linear-gradient(135deg,var(--bg2),rgba(240,198,116,.08))';
  t2.innerHTML = `<span style="font-size:20px">${ach.icon}</span><div><div style="font-weight:800;color:var(--gold)">🏆 Досягнення!</div><div style="font-size:12px">${ach.title[currentLang]||ach.title.ua}</div></div>`;
  document.getElementById('toastWrap').appendChild(t2);
  setTimeout(() => t2.remove(), 4000);
}

function renderAchievements() {
  const el = document.getElementById('achievementsContent'); if(!el) return;
  const unlocked = ACHIEVEMENTS.filter(a => S.achievements[a.id]?.unlocked);
  const locked   = ACHIEVEMENTS.filter(a => !S.achievements[a.id]?.unlocked);
  const renderAch = (ach, done) => {
    const prog = getAchProgress(ach);
    const pct = Math.min(100, Math.round((prog/ach.goal)*100));
    return `<div class="ach-card ${done?'ach-done':''}">
      <div class="ach-icon">${ach.icon}</div>
      <div class="ach-info">
        <div class="ach-title">${ach.title[currentLang]||ach.title.ua}</div>
        <div class="ach-desc">${ach.desc[currentLang]||ach.desc.ua}</div>
        ${!done?`<div class="ach-bar"><div class="ach-fill" style="width:${pct}%"></div></div>
        <div class="ach-prog">${prog}/${ach.goal}</div>`:''}
      </div>
      <div class="ach-reward">
        ${done?'✅':''}
        ${ach.reward.coins?`<div style="color:var(--gold);font-size:12px;font-weight:700">🪙${ach.reward.coins}</div>`:''}
        ${ach.reward.item&&ITEMS[ach.reward.item]?`<div style="font-size:14px">${ITEMS[ach.reward.item].icon}</div>`:''}
      </div>
    </div>`;
  };
  el.innerHTML = `
    <div style="font-size:14px;color:var(--sub);margin-bottom:16px">🏆 ${unlocked.length}/${ACHIEVEMENTS.length} розблоковано</div>
    ${unlocked.length?`<div class="section-title" style="color:var(--gold)">✅ Виконані</div>${unlocked.map(a=>renderAch(a,true)).join('')}`:''}
    <div class="section-title">🔒 В процесі</div>
    ${locked.map(a=>renderAch(a,false)).join('')}
  `;
}

// ═══════════════════════════════════════════════════════════════
//  👾 DAILY CHALLENGES
// ═══════════════════════════════════════════════════════════════
const CHALLENGE_POOL = [
  {id:'do2',   icon:'✅', title:{ua:'Виконай 2 завдання',en:'Complete 2 tasks'}, goal:2,  type:'complete', reward:{coins:80, xp:120}},
  {id:'do3',   icon:'🔥', title:{ua:'Виконай 3 завдання',en:'Complete 3 tasks'}, goal:3,  type:'complete', reward:{coins:150,xp:200}},
  {id:'hard1', icon:'💪', title:{ua:'1 Важке завдання',en:'1 Hard task'},       goal:1,  type:'hard',     reward:{coins:120,xp:180}},
  {id:'easy3', icon:'🌱', title:{ua:'3 Легких завдання',en:'3 Easy tasks'},     goal:3,  type:'easy',     reward:{coins:100,xp:150}},
  {id:'leg1',  icon:'👑', title:{ua:'Легендарне завдання',en:'Legendary task'}, goal:1,  type:'legendary',reward:{coins:300,xp:400,item:'clover'}},
  {id:'gen5',  icon:'🎲', title:{ua:'Згенеруй 5 завдань',en:'Generate 5 tasks'},goal:5,  type:'generate', reward:{coins:60, xp:80}},
  {id:'out2',  icon:'🌳', title:{ua:'2 завдання надворі',en:'2 Outdoor tasks'}, goal:2,  type:'outdoor',  reward:{coins:100,xp:150}},
  {id:'home2', icon:'🏠', title:{ua:'2 домашніх завдання',en:'2 Home tasks'},   goal:2,  type:'home',     reward:{coins:90, xp:130}},
  {id:'buy1',  icon:'🛒', title:{ua:'Купи предмет у магазині',en:'Buy a shop item'}, goal:1, type:'buy', reward:{coins:70, xp:100}},
];

function generateDailyChallenges() {
  const shuffled = [...CHALLENGE_POOL].sort(()=>Math.random()-.5);
  return shuffled.slice(0,3).map(c => ({...c, current:0, done:false}));
}

function updateChallenge(type, amount=1) {
  if (!S.dailyChallenges?.length) return;
  let changed = false;
  S.dailyChallenges.forEach(ch => {
    if (ch.done) return;
    if (ch.type === type || (type==='complete'&&ch.type==='complete')) {
      ch.current = Math.min(ch.goal, (ch.current||0)+amount);
      if (ch.current >= ch.goal) {
        ch.done = true; changed = true;
        S.coins += ch.reward.coins||0;
        addXP(ch.reward.xp||0);
        if(ch.reward.item&&ITEMS[ch.reward.item]) addInv(ch.reward.item,1);
        saveState(); updateHeader();
        toast(`${ch.icon} Челендж виконано! +${ch.reward.coins}🪙`,'ok','🎯');
      }
    }
  });
  if(changed) saveState();
}

function renderDailyChallenges() {
  const el = document.getElementById('challengesContent'); if(!el) return;
  checkDailyReset();
  if (!S.dailyChallenges?.length) S.dailyChallenges = generateDailyChallenges();
  const done = S.dailyChallenges.filter(c=>c.done).length;
  el.innerHTML = `
    <div style="font-size:14px;color:var(--sub);margin-bottom:16px">🎯 ${done}/3 виконано сьогодні • Оновлення о 00:00</div>
    ${S.dailyChallenges.map(ch=>{
      const pct=Math.min(100,Math.round(((ch.current||0)/ch.goal)*100));
      return `<div class="challenge-card ${ch.done?'ch-done':''}">
        <div style="font-size:28px">${ch.icon}</div>
        <div style="flex:1">
          <div style="font-weight:700;font-size:15px">${ch.title[currentLang]||ch.title.ua}</div>
          <div class="ach-bar" style="margin-top:6px"><div class="ach-fill" style="width:${pct}%;background:${ch.done?'var(--green)':'var(--blue)'}"></div></div>
          <div style="font-size:12px;color:var(--sub);margin-top:3px">${ch.current||0}/${ch.goal}</div>
        </div>
        <div style="text-align:right;flex-shrink:0">
          ${ch.done?'<div style="font-size:20px">✅</div>':''}
          <div style="color:var(--gold);font-size:13px;font-weight:700">+${ch.reward.coins}🪙</div>
          <div style="color:var(--purple);font-size:12px">+${ch.reward.xp}⚡</div>
          ${ch.reward.item&&ITEMS[ch.reward.item]?`<div>${ITEMS[ch.reward.item].icon}</div>`:''}
        </div>
      </div>`;
    }).join('')}
  `;
}

// ═══════════════════════════════════════════════════════════════
//  🎰 WHEEL OF FORTUNE
// ═══════════════════════════════════════════════════════════════
const WHEEL_PRIZES = [
  {label:'🪙 50',    color:'#f0c674', type:'coins',  value:50},
  {label:'⚡ 100',   color:'#bc8cff', type:'xp',     value:100},
  {label:'🍀',       color:'#3fb950', type:'item',   value:'clover'},
  {label:'🪙 150',   color:'#ff9100', type:'coins',  value:150},
  {label:'📜',       color:'#8b949e', type:'item',   value:'scroll'},
  {label:'⚡ 300',   color:'#58a6ff', type:'xp',     value:300},
  {label:'🪙 25',    color:'#f0c674', type:'coins',  value:25},
  {label:'✨',       color:'#cc00ff', type:'item',   value:'stardust'},
  {label:'🪙 75',    color:'#ff9100', type:'coins',  value:75},
  {label:'🔮',       color:'#39d0d8', type:'item',   value:'crystal'},
  {label:'⚡ 200',   color:'#bc8cff', type:'xp',     value:200},
  {label:'🐉',       color:'#ff4444', type:'item',   value:'dragon'},
];

let wheelSpinning = false;

function renderWheel() {
  const el = document.getElementById('wheelContent'); if(!el) return;
  checkDailyReset();
  const spinsLeft = S.wheelSpinsLeft||0;
  const size = Math.min(300, window.innerWidth-60);
  const cx=size/2, cy=size/2, r=size/2-10;
  const slices=WHEEL_PRIZES.length;
  const angle=360/slices;
  let svgSlices='', svgLabels='';
  WHEEL_PRIZES.forEach((p,i)=>{
    const start=(i*angle-90)*Math.PI/180;
    const end=((i+1)*angle-90)*Math.PI/180;
    const x1=cx+r*Math.cos(start), y1=cy+r*Math.sin(start);
    const x2=cx+r*Math.cos(end),   y2=cy+r*Math.sin(end);
    svgSlices+=`<path d="M${cx},${cy} L${x1},${y1} A${r},${r} 0 0,1 ${x2},${y2} Z" fill="${p.color}" stroke="#0d1117" stroke-width="2"/>`;
    const mid=(start+end)/2, lr=r*.65;
    svgLabels+=`<text x="${cx+lr*Math.cos(mid)}" y="${cy+lr*Math.sin(mid)}" text-anchor="middle" dominant-baseline="middle" font-size="${size*0.048}" fill="#fff" font-weight="900" transform="rotate(${(i+.5)*angle},${cx+lr*Math.cos(mid)},${cy+lr*Math.sin(mid)})">${p.label}</text>`;
  });
  el.innerHTML = `
    <div style="text-align:center">
      <div style="font-size:14px;color:var(--sub);margin-bottom:12px">🎰 Кручень залишилось: <strong style="color:${spinsLeft>0?'var(--green)':'var(--red)'}">${spinsLeft}</strong> ${S.premium?'(Premium: 3/день)':'(1/день • Premium = 3/день)'}</div>
      <div style="position:relative;display:inline-block;margin-bottom:16px">
        <div style="position:absolute;top:-12px;left:50%;transform:translateX(-50%);font-size:24px;z-index:10">▼</div>
        <svg id="wheelSvg" width="${size}" height="${size}" style="border-radius:50%;box-shadow:0 0 30px rgba(0,0,0,.5);cursor:${spinsLeft>0?'pointer':'not-allowed'};transition:transform 0.1s" onclick="spinWheel()">
          <g id="wheelGroup">${svgSlices}${svgLabels}</g>
        </svg>
      </div>
      <br>
      <button onclick="spinWheel()" ${spinsLeft<=0?'disabled':''} style="padding:12px 32px;border-radius:var(--r);background:${spinsLeft>0?'linear-gradient(135deg,var(--green),#2ea843)':'var(--bg3)'};color:${spinsLeft>0?'#000':'var(--sub)'};font-weight:900;font-size:15px;cursor:${spinsLeft>0?'pointer':'not-allowed'}">
        🎰 ${spinsLeft>0?'Крутити!':'Завтра буде нове кручення'}
      </button>
      <div id="wheelResult" style="margin-top:16px;min-height:32px"></div>
    </div>
  `;
}

function spinWheel() {
  if(wheelSpinning) return;
  checkDailyReset();
  if((S.wheelSpinsLeft||0)<=0){toast('Кручення скінчились! Завтра ще!','warn');return;}
  wheelSpinning=true; S.wheelSpinsLeft--;
  // Вибираємо приз (рідкісні предмети рідше)
  const weights=WHEEL_PRIZES.map(p=>p.type==='item'&&ITEMS[p.value]?.rarity==='legendary'?1:p.type==='item'?3:5);
  const total=weights.reduce((a,b)=>a+b,0);
  let rand=Math.random()*total, idx=0;
  for(let i=0;i<weights.length;i++){rand-=weights[i];if(rand<=0){idx=i;break;}}
  const prize=WHEEL_PRIZES[idx];
  const slices=WHEEL_PRIZES.length;
  const deg=360/slices;
  const targetAngle=3600+(180-idx*deg-deg/2);
  const svg=document.getElementById('wheelGroup');
  if(!svg){wheelSpinning=false;return;}
  svg.style.transformOrigin=`${Math.min(300,window.innerWidth-60)/2}px ${Math.min(300,window.innerWidth-60)/2}px`;
  svg.style.transition='transform 4s cubic-bezier(.17,.67,.12,.99)';
  svg.style.transform=`rotate(${targetAngle}deg)`;
  setTimeout(()=>{
    wheelSpinning=false; saveState();
    // Нарахування призу
    let msg='';
    if(prize.type==='coins'){S.coins+=prize.value;msg=`🪙 +${prize.value} монет!`;}
    else if(prize.type==='xp'){addXP(prize.value);msg=`⚡ +${prize.value} XP!`;}
    else if(prize.type==='item'&&ITEMS[prize.value]){addInv(prize.value,1);msg=`${ITEMS[prize.value].icon} ${iName(ITEMS[prize.value])}!`;}
    saveState(); updateHeader();
    const res=document.getElementById('wheelResult');
    if(res) res.innerHTML=`<div style="font-size:18px;font-weight:900;color:var(--gold);animation:pop .5s both">🎉 ${msg}</div>`;
    toast(`🎰 ${msg}`,'ok');
    spawnParticles(15);
    checkAchievements();
    renderWheel();
  },4100);
}

async function selectPlan(plan) {
  if(plan==='Free')return;
  try {
    const res = await fetch('/api/wayforpay/checkout', {
      method:'POST', credentials:'include',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify({plan})
    });
    const data = await res.json();
    if(data.error === 'no_wfp') {
      // WayForPay не налаштований — тестовий режим
      S.premium=true; S.premiumPlan=plan;
      await API.updateUser({coins:S.coins,xp:S.xp,level:S.level,streak:S.streak,premium:1});
      toast(`👑 Premium ${plan} активовано!`,'ok','🎉');
      renderPremium(); renderGenLimit(); return;
    }
    if(data.url && data.form) {
      // Створюємо форму і відправляємо на WayForPay
      const form = document.createElement('form');
      form.method = 'POST'; form.action = data.url;
      Object.entries(data.form).forEach(([k,v]) => {
        const inp = document.createElement('input');
        inp.type='hidden'; inp.name=k; inp.value=v;
        form.appendChild(inp);
      });
      document.body.appendChild(form); form.submit();
    }
  } catch(e) {
    toast('Помилка з\'єднання','err');
  }
}

// ═══════════════════════════════════════════════════════════════
//  SETTINGS
// ═══════════════════════════════════════════════════════════════
function renderSettings() {
  const el=document.getElementById('settingsContent'); if(!el)return;
  el.innerHTML=`
  <div class="settings-section">
    <h3>🎨 Тема інтерфейсу</h3>
    <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:8px">
      ${Object.entries(THEMES).map(([id,th])=>`
        <button onclick="applyTheme('${id}')" style="padding:8px 14px;border-radius:8px;border:2px solid ${(S.activeTheme||'dark')===id?'var(--green)':'var(--border)'};background:var(--bg3);color:var(--text);font-size:13px;font-weight:600;cursor:pointer;transition:all .2s" id="theme-btn-${id}">
          ${th.label}
        </button>`).join('')}
    </div>
  </div>
  <div class="settings-section">
    <h3>${t('settings.profile')}</h3>
    <div class="setting-row">
      <div><div class="setting-label">${S.user?.name||''}</div><div class="setting-sub">${S.user?.email||''} • ${S.user?.code||''}</div></div>
      <div style="font-size:28px">${S.user?.avatar||'🌿'}</div>
    </div>
    <div class="setting-row">
      <div><div class="setting-label">${t('settings.changeName')}</div></div>
      <div style="display:flex;gap:8px">
        <input id="newNameInput" style="width:140px" value="${S.user?.name||''}">
        <button onclick="changeName()" style="padding:7px 12px;border-radius:7px;border:1px solid var(--border);color:var(--text);background:var(--bg3);font-size:13px">OK</button>
      </div>
    </div>
  </div>
  <div class="settings-section">
    <h3>${t('settings.notifications')}</h3>
    ${['notifTasks','notifFriends','sound'].map(k=>`
      <div class="setting-row">
        <div class="setting-label">${t('settings.'+k)}</div>
        <div class="toggle${S.settings[k]?' on':''}" id="tgl-${k}" onclick="toggleSetting('${k}')"></div>
      </div>`).join('')}
  </div>
  <div class="settings-section">
    <h3>${t('settings.privacy')}</h3>
    <div class="setting-row">
      <div class="setting-label">${t('settings.showInLB')}</div>
      <div class="toggle${S.settings.showInLB?' on':''}" id="tgl-showInLB" onclick="toggleSetting('showInLB')"></div>
    </div>
  </div>
  <div class="settings-section">
    <h3 style="color:var(--red)">${t('settings.danger')}</h3>
    <div class="setting-row">
      <div class="setting-label">${t('settings.resetProgress')}</div>
      <button onclick="resetProgress()" style="padding:7px 14px;border-radius:7px;border:1px solid var(--red);color:var(--red);font-size:13px">Reset</button>
    </div>
  </div>`;
}

function changeName() {
  const v=document.getElementById('newNameInput')?.value.trim();
  if(!v)return;
  S.user.name=v;
  const users=JSON.parse(localStorage.getItem('tq_users')||'{}');
  if(users[S.user.email]) users[S.user.email].name=v;
  localStorage.setItem('tq_users',JSON.stringify(users));
  saveState(); updateHeader(); toast('✅ Ім\'я оновлено!','ok');
}

function toggleSetting(key) {
  S.settings[key]=!S.settings[key];
  document.getElementById('tgl-'+key)?.classList.toggle('on',S.settings[key]);
  saveState();
}

function resetProgress() {
  if(!confirm('Скинути весь прогрес?'))return;
  S.coins=150; S.xp=0; S.level=1; S.streak=0; S.tasks=[]; S.inventory={}; S.activeBuffs=[]; S.history=[];
  saveState(); updateHeader(); renderTasks(); renderSidebar();
  toast('Прогрес скинуто','info');
}

// ═══════════════════════════════════════════════════════════════
//  HEADER / SIDEBAR WIDGETS
// ═══════════════════════════════════════════════════════════════
// Повертає або <img> для URL або emoji як текст
function avatarHtml(av) {
  if (!av) return '🌿';
  if (av.startsWith('http')) return `<img src="${av}" style="width:100%;height:100%;border-radius:50%;object-fit:cover" referrerpolicy="no-referrer">`;
  return av;
}

function updateHeader() {
  const c=document.getElementById('hdrCoins'); if(c)c.textContent=S.coins.toLocaleString();
  const x=document.getElementById('hdrXP');    if(x)x.textContent=S.xp.toLocaleString();
  const l=document.getElementById('hdrLvl');   if(l)l.textContent=S.level;
  const a=document.getElementById('hdrAvatar');if(a)a.innerHTML=avatarHtml(S.user?.avatar);
}

function renderSidebar() {
  // Profile widget
  const pw=document.getElementById('profileWidget'); if(pw){
    const needed=xpNeeded(S.level), pct=Math.min(100,Math.round((S.xp/needed)*100));
    pw.innerHTML=`<div class="profile-widget">
      <div class="pw-avatar">${avatarHtml(S.user?.avatar)}</div>
      <div class="pw-name">${S.user?.name||''}</div>
      <div class="pw-code">${levelTitle(S.level)} • ${S.user?.code||''}</div>
      <div class="xp-track"><div class="xp-fill" style="width:${pct}%"></div></div>
      <div class="xp-row"><span>${S.xp} XP</span><span>${needed} XP</span></div>
    </div>`;
  }
  // Streak
  const sw=document.getElementById('streakWidget'); if(sw)
    sw.innerHTML=`<div class="streak-widget"><div class="streak-fire">🔥</div><div><div class="streak-num">${S.streak}</div><div class="streak-label">${currentLang==='ua'?'днів поспіль':currentLang==='en'?'days in a row':'jours de suite'}</div></div></div>`;
  // Buffs
  const bl=document.getElementById('buffsList'); if(bl){
    if(!S.activeBuffs.length) bl.innerHTML=`<div style="font-size:12px;color:var(--sub);text-align:center;padding:10px">${currentLang==='ua'?'Немає активних бафів':currentLang==='en'?'No active buffs':'Aucun buff actif'}</div>`;
    else bl.innerHTML=S.activeBuffs.map(b=>`<div class="buff-chip" style="border-color:${b.color}22"><span>${b.icon}</span><span style="color:${b.color}">${b.label}</span><span style="color:var(--sub);font-size:11px">${b.uses}x</span></div>`).join('');
  }
  // Daily task widget
  const dw=document.getElementById('dailyWidget'); if(dw){
    const dailyDone=S.tasks.filter(x=>x.completed).length;
    const dailyGoal=3;
    const pct=Math.min(100,Math.round((dailyDone/dailyGoal)*100));
    dw.innerHTML=`<div class="daily-task-widget">
      <div class="dt-title">${currentLang==='ua'?`Виконано ${dailyDone}/${dailyGoal}`:currentLang==='en'?`Completed ${dailyDone}/${dailyGoal}`:`Accompli ${dailyDone}/${dailyGoal}`}</div>
      <div class="dt-desc">${currentLang==='ua'?'Виконай 3 завдання сьогодні':currentLang==='en'?'Complete 3 tasks today':'Accomplissez 3 tâches aujourd\'hui'}</div>
      <div class="dt-progress"><div class="dt-fill" style="width:${pct}%"></div></div>
    </div>`;
  }
}

function renderAll() {
  updateHeader(); renderSidebar(); renderTasks(); renderGenLimit();
  const active=document.querySelector('.page.active');
  if(active){
    const id=active.id.replace('page-','');
    const renders={inventory:renderInventory,shop:renderShop,friends:renderFriends,leaderboard:renderLeaderboard,stats:renderStats,premium:renderPremium,settings:renderSettings};
    if(renders[id]) renders[id]();
  }
  // Update nav labels
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const k=el.getAttribute('data-i18n');
    if(k) el.textContent=t(k);
  });
  document.querySelectorAll('[data-i18n-ph]').forEach(el=>{
    el.placeholder=t(el.getAttribute('data-i18n-ph'));
  });
}

// ═══════════════════════════════════════════════════════════════
//  OVERLAY HELPERS
// ═══════════════════════════════════════════════════════════════
function openOverlay(id) { const el=document.getElementById(id); if(el){el.classList.add('open');document.body.style.overflow='hidden';} }
function closeOverlay(id) { const el=document.getElementById(id); if(el){el.classList.remove('open');if(!document.querySelector('.overlay.open'))document.body.style.overflow='';} }
// Close on backdrop click
document.addEventListener('click',e=>{ if(e.target.classList.contains('overlay')) closeOverlay(e.target.id); });
document.addEventListener('keydown',e=>{ if(e.key==='Escape') document.querySelectorAll('.overlay.open').forEach(o=>closeOverlay(o.id)); });

// ═══════════════════════════════════════════════════════════════
//  TOAST
// ═══════════════════════════════════════════════════════════════
function toast(msg, type='info', icon='') {
  const icons={ok:'✅',err:'❌',info:'ℹ️',warn:'⚠️'};
  const wrap=document.getElementById('toastWrap');
  const el=document.createElement('div');
  el.className=`toast ${type}`;
  el.innerHTML=`<span>${icon||icons[type]||'ℹ️'}</span><span>${msg}</span>`;
  wrap.appendChild(el);
  requestAnimationFrame(()=>el.classList.add('show'));
  setTimeout(()=>{ el.classList.remove('show'); setTimeout(()=>el.remove(),400); },3500);
}

// ═══════════════════════════════════════════════════════════════
//  PARTICLES
// ═══════════════════════════════════════════════════════════════
function spawnParticles(n=14) {
  const colors=['#3fb950','#f0c674','#bc8cff','#58a6ff','#39d0d8','#f788c0','#ff9100'];
  for(let i=0;i<n;i++){
    const p=document.createElement('div');
    p.className='ptcl';
    const s=6+Math.random()*10, x=window.innerWidth*.5+(Math.random()-.5)*300, y=window.innerHeight*.5+(Math.random()-.5)*200;
    const tx=((Math.random()-.5)*220)+'px', ty=(-(80+Math.random()*160))+'px';
    p.style.cssText=`width:${s}px;height:${s}px;left:${x}px;top:${y}px;background:${colors[Math.floor(Math.random()*colors.length)]};--tx:${tx};--ty:${ty};animation-delay:${Math.random()*.3}s`;
    document.body.appendChild(p);
    setTimeout(()=>p.remove(),2000);
  }
}

// ═══════════════════════════════════════════════════════════════
//  API HELPERS
// ═══════════════════════════════════════════════════════════════
async function api(method, url, body) {
  const opts = { method, credentials: 'include', headers: { 'Content-Type': 'application/json' } };
  if (body) opts.body = JSON.stringify(body);
  const res = await fetch(url, opts);
  return res.json();
}
const API = {
  me:          ()       => api('GET',  '/auth/me'),
  updateUser:  (data)   => api('POST', '/api/user/update', data),
  getTasks:    ()       => api('GET',  '/api/tasks'),
  addTask:     (t)      => api('POST', '/api/tasks/add', t),
  completeTask:(data)   => api('POST', '/api/tasks/complete', data),
  deleteTask:  (id)     => api('POST', '/api/tasks/delete', { task_id: id }),
  addInvItem:  (id, n)  => api('POST', '/api/inventory/add', { item_id: id, amount: n }),
  removeInvItem:(id)    => api('POST', '/api/inventory/remove', { item_id: id }),
  getFriends:  ()       => api('GET',  '/api/friends'),
  addFriend:   (code)   => api('POST', '/api/friends/add', { code }),
  removeFriend:(id)     => api('POST', '/api/friends/remove', { friend_id: id }),
  trade:       (d)      => api('POST', '/api/trade', d),
  getHistory:  ()       => api('GET',  '/api/history'),
  getLeaderboard:()     => api('GET',  '/api/leaderboard'),
  buyItem:     (id, p)  => api('POST', '/api/shop/buy', { item_id: id, price: p }),
  changeName:  (name)   => api('POST', '/api/user/name', { name }),
};

// ═══════════════════════════════════════════════════════════════
//  BOOT — перевіряємо сесію з сервера
// ═══════════════════════════════════════════════════════════════
document.addEventListener('DOMContentLoaded', async () => {
  initAvatarGrid();
  applyI18n();

  // Показуємо лоадер
  document.getElementById('authScreen').innerHTML = `
    <div style="text-align:center;color:#e6edf3">
      <div style="font-size:48px;margin-bottom:16px">🌿</div>
      <div style="font-size:18px;font-weight:700">TaskQuest</div>
      <div style="margin-top:12px;color:#7d8590">Завантаження...</div>
    </div>`;

  try {
    const data = await API.me();
    if (data.user) {
      // Є активна сесія — завантажуємо стан з сервера
      S.user = {
        name:   data.user.name,
        email:  data.user.email,
        avatar: data.user.avatar,
        code:   data.user.code,
        id:     data.user.id,
      };
      S.coins     = data.user.coins;
      S.xp        = data.user.xp;
      S.level     = data.user.level;
      S.streak    = data.user.streak;
      S.premium   = !!data.user.premium;
      S.inventory = data.user.inventory || {};

      // Завантажуємо завдання та друзів з сервера
      const [tasks, friends, history] = await Promise.all([
        API.getTasks(), API.getFriends(), API.getHistory()
      ]);
      // Конвертуємо завдання з БД у формат фронту
      S.tasks = (tasks || []).map(t => ({
        id: String(t.id), type: t.type, diff: t.diff,
        icon: t.task_key || '🎯', title: t.title,
        desc: '', coins: t.coins, xp: t.xp,
        itemChance: 0.2, completed: !!t.completed, skipped: false,
        createdAt: new Date(t.created_at).getTime(), dbId: t.id,
      }));
      S.friends = (friends || []).map(f => ({
        id: String(f.id), name: f.name, avatar: f.avatar || '🌿',
        level: f.level, xp: f.xp, code: f.code,
        online: Math.random() > 0.4,
      }));
      S.history = (history || []).map(h => ({
        icon: h.icon, title: h.title, type: h.type, diff: h.diff,
        coins: h.coins, xp: h.xp, item: h.item_name, date: h.created_at,
      }));

      S.user.refCount = data.user.refCount || 0;
      // Restore theme
      if (data.user.active_theme) { S.activeTheme = data.user.active_theme; applyTheme(S.activeTheme); }
      checkDailyReset();
      initQuests();
      document.getElementById('authScreen').style.display = 'none';
      document.getElementById('appRoot').style.display = '';
      initApp();
      // Перевіряємо ?premium=success
      if (new URLSearchParams(window.location.search).get('premium') === 'success') {
        S.premium = true;
        await API.updateUser({coins:S.coins,xp:S.xp,level:S.level,streak:S.streak,premium:1});
        toast('👑 Premium активовано! Дякуємо!','ok','🎉');
        history.replaceState(null,'','/');
      }
      // Показуємо бонус якщо прийшли через реферал (перша сесія)
      const params = new URLSearchParams(window.location.search);
      if (params.get('ref')) history.replaceState(null,'','/');
    } else {
      // Немає сесії — показуємо екран входу
      showAuthScreen();
    }
  } catch(e) {
    showAuthScreen();
  }
});

function showAuthScreen() {
  document.getElementById('authScreen').innerHTML = `
  <div class="auth-card">
    <div class="auth-logo">🌿 Task<span>Quest</span></div>
    <div class="auth-tagline">Виконуй завдання — живи яскравіше</div>
    <div style="text-align:center;margin:24px 0">
      <a href="/auth/google${new URLSearchParams(window.location.search).get('ref') ? '?ref='+new URLSearchParams(window.location.search).get('ref') : ''}" style="display:inline-flex;align-items:center;gap:12px;padding:14px 32px;border-radius:10px;border:1px solid #30363d;background:#161b22;color:#e6edf3;font-size:16px;font-weight:700;text-decoration:none">
        <svg width="22" height="22" viewBox="0 0 48 48"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.08 17.74 9.5 24 9.5z"/><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-3.59-13.46-8.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/></svg>
        Увійти через Google
      </a>
    </div>
    <div style="text-align:center;color:#7d8590;font-size:13px">Твій прогрес зберігається в хмарі 🌿</div>
  </div>`;
}
