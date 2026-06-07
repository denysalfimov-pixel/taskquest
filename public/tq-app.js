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
const ITEMS = {
  energy:   { id:'energy',   icon:'⚡', name:{ua:'Енергетик',en:'Energy Drink',fr:'Boisson Énergétique'}, desc:{ua:'+100% XP за наступне завдання',en:'+100% XP on next task',fr:'+100% XP sur la prochaine tâche'}, rarity:'common',  price:30,  maxStock:5, effect:'xp2',    buffLabel:'XP ×2',       buffColor:'#bc8cff' },
  clover:   { id:'clover',   icon:'🍀', name:{ua:'Конюшина удачі',en:'Lucky Clover',fr:'Trèfle chanceux'}, desc:{ua:'+50% монет за наступне',en:'+50% coins on next task',fr:'+50% pièces sur la prochaine'}, rarity:'rare',     price:50,  maxStock:5, effect:'coin50', buffLabel:'Монети +50%',buffColor:'#f0c674' },
  moon:     { id:'moon',     icon:'🌙', name:{ua:'Місячне зілля',en:'Moon Potion',fr:'Potion lunaire'}, desc:{ua:'Наступне важке = середнє',en:'Next hard task = medium',fr:'Prochaine tâche difficile = moyenne'}, rarity:'rare',     price:60,  maxStock:5, effect:'easy1',  buffLabel:'Складність -1',buffColor:'#58a6ff' },
  crystal:  { id:'crystal',  icon:'🔮', name:{ua:'Кришталева куля',en:'Crystal Ball',fr:'Boule de cristal'}, desc:{ua:'Побачити наступне завдання',en:'Preview next task',fr:'Voir la prochaine tâche'}, rarity:'epic',     price:80,  maxStock:5, effect:'reveal', buffLabel:'Перегляд',   buffColor:'#39d0d8' },
  scroll:   { id:'scroll',   icon:'📜', name:{ua:'Сувій пропуску',en:'Skip Scroll',fr:'Parchemin de saut'}, desc:{ua:'Пропустити завдання без штрафу',en:'Skip a task penalty-free',fr:'Passer une tâche sans pénalité'}, rarity:'common',  price:40,  maxStock:5, effect:'skip',   buffLabel:'Пропуск',    buffColor:'#8b949e' },
  gem:      { id:'gem',      icon:'💎', name:{ua:'Веселковий камінь',en:'Rainbow Gem',fr:'Gemme arc-en-ciel'}, desc:{ua:'Отримати рандомний подарунок',en:'Get a random gift item',fr:'Obtenir un cadeau aléatoire'}, rarity:'epic',     price:100, maxStock:3, effect:'gift',   buffLabel:'Подарунок',  buffColor:'#f788c0' },
  mask:     { id:'mask',     icon:'🎭', name:{ua:'Золота маска',en:'Golden Mask',fr:'Masque doré'}, desc:{ua:'Обміняти завдання з другом',en:'Swap task with a friend',fr:'Échanger une tâche avec un ami'}, rarity:'epic',     price:90,  maxStock:3, effect:'swap',   buffLabel:'Обмін задач', buffColor:'#f0c674' },
  flask:    { id:'flask',    icon:'🔥', name:{ua:'Вогненна фляга',en:'Fire Flask',fr:'Fiole de feu'}, desc:{ua:'Серія +1 день',en:'Streak +1 day',fr:'Série +1 jour'}, rarity:'rare',     price:70,  maxStock:5, effect:'streak', buffLabel:'Серія +1',   buffColor:'#ff9100' },
  stardust: { id:'stardust', icon:'✨', name:{ua:'Зоряний пил',en:'Star Dust',fr:'Poussière d\'étoile'}, desc:{ua:'x2 нагорода з легендарного',en:'x2 reward from legendary task',fr:'x2 récompense d\'une tâche légendaire'}, rarity:'legendary',price:200, maxStock:2, effect:'legend2',buffLabel:'Легенда ×2',buffColor:'#f0c674' },
  shroom:   { id:'shroom',   icon:'🍄', name:{ua:'Чарівний гриб',en:'Magic Mushroom',fr:'Champignon magique'}, desc:{ua:'+5 хв до часу виконання',en:'+5 min to complete time',fr:'+5 min au temps d\'exécution'}, rarity:'common',  price:25,  maxStock:5, effect:'time5',  buffLabel:'Час +5хв',   buffColor:'#3fb950' },
};
const RARITY = { common:{ua:'Звичайний',en:'Common',fr:'Commun'}, rare:{ua:'Рідкісний',en:'Rare',fr:'Rare'}, epic:{ua:'Епічний',en:'Epic',fr:'Épique'}, legendary:{ua:'Легендарний',en:'Legendary',fr:'Légendaire'} };
function iName(item) { return item.name[currentLang] || item.name.ua; }
function iDesc(item)  { return item.desc[currentLang] || item.desc.ua; }

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
  user: null,        // { name, email, avatar, code }
  coins: 150,
  xp: 0,
  level: 1,
  streak: 0,
  lastTaskDate: null,
  tasks: [],
  inventory: {},     // itemId → count
  activeBuffs: [],   // [{id,effect,uses,icon,label,color}]
  friends: [],       // [{id,name,avatar,level,xp,online}]
  friendInvs: {},    // friendId → {itemId:count}
  history: [],
  settings: { notifTasks:true, notifFriends:true, sound:true, showInLB:true },
  premium: false,
  dailyGenerations: 0,
  dailyGenerationsDate: '',
  shopStock: {},     // itemId → count (resets daily)
  shopStockDate: '',
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
  if (S.shopStockDate !== today) {
    S.shopStock = {};
    Object.values(ITEMS).forEach(it => { S.shopStock[it.id] = it.maxStock; });
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
  };
  if (renders[name]) renders[name]();
}
function toggleSidebar() { document.getElementById('sidebar').classList.toggle('open'); }

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
  // Avoid repeating last 3
  const recent = S.tasks.slice(0,3).map(x=>x.title);
  let tpl;
  for (let i=0;i<10;i++) {
    tpl = randFrom(pool);
    if (!recent.includes(tpl.t[currentLang]||tpl.t.ua)) break;
  }
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
  }
  // Item drop
  let dropped = null;
  if (Math.random()<task.itemChance) {
    const eligible = Object.values(ITEMS).filter(it=>(S.inventory[it.id]||0)<it.maxStock);
    if (eligible.length) { dropped = randFrom(eligible); addInv(dropped.id,1); }
  }
  S.history.unshift({ icon:task.icon, title:task.title, type:task.type, diff:task.diff, coins, xp, item:dropped?iName(dropped):null, date:new Date().toLocaleString() });
  if (S.history.length>100) S.history.pop();
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
  S.activeBuffs.push({id:uid(),effect:it.effect,icon:it.icon,label:it.buffLabel,color:it.buffColor,uses:1});
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
  const rar={'common':'r-common','rare':'r-rare','epic':'r-epic','legendary':'r-legendary'};
  grid.innerHTML=Object.values(ITEMS).map(it=>{
    const stock=S.shopStock[it.id]||0;
    const hasInv=invCount(it.id)>=it.maxStock;
    const canBuy=S.coins>=it.price&&stock>0&&!hasInv;
    const pct=Math.round((stock/it.maxStock)*100);
    const badge=it.rarity==='legendary'?'<div class="shop-badge-tag">LEGEND</div>':it.rarity==='epic'?`<div class="shop-badge-tag" style="background:var(--purple)">EPIC</div>`:'';
    let btnTxt=t('shop.buy');
    if(hasInv)btnTxt=t('shop.full');
    else if(stock<=0)btnTxt=t('shop.noStock');
    else if(S.coins<it.price)btnTxt=t('shop.notEnough');
    return `<div class="shop-card">
      ${badge}
      <span class="shop-icon">${it.icon}</span>
      <div class="shop-name">${iName(it)}</div>
      <div class="inv-rarity ${rar[it.rarity]}" style="margin-bottom:6px">${(RARITY[it.rarity][currentLang]||RARITY[it.rarity].ua).toUpperCase()}</div>
      <div class="shop-desc">${iDesc(it)}</div>
      <div class="shop-stock-info">${t('shop.inStock')} <span style="color:var(--orange);font-weight:700">${stock}/${it.maxStock}</span></div>
      <div class="shop-stock-bar"><div class="shop-stock-fill" style="width:${pct}%;background:${pct>50?'var(--green)':pct>20?'var(--gold)':'var(--red)'}"></div></div>
      <div class="shop-price">🪙 ${it.price}</div>
      <button class="btn-buy" onclick="buyItem('${it.id}')" ${canBuy?'':'disabled'}>${btnTxt}</button>
    </div>`;
  }).join('');
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
function renderLeaderboard() {
  const el=document.getElementById('lbContent'); if(!el)return;
  const me={ name:S.user?.name||'?', avatar:S.user?.avatar||'🌿', level:S.level, xp:S.xp+S.level*100, isMe:true };
  if(!S.settings.showInLB){ el.innerHTML=`<div class="lb-empty"><div class="lb-empty-icon">🔒</div><div class="lb-empty-title">Прихований профіль</div></div>`; return; }
  const entries=[me,...S.friends.map(f=>({name:f.name,avatar:f.avatar,level:f.level,xp:f.xp,isMe:false}))];
  entries.sort((a,b)=>b.xp-a.xp);
  if(entries.length<=1&&!S.friends.length){
    el.innerHTML=`<div class="lb-empty"><div class="lb-empty-icon">🏆</div><div class="lb-empty-title">${t('lb.onlyYou')}</div><div>${t('lb.emptyHint')}</div></div>`;return;
  }
  const rankClass=(i)=>i===0?'g':i===1?'s':i===2?'b':'';
  el.innerHTML=entries.map((e,i)=>`
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

      checkDailyReset();
      document.getElementById('authScreen').style.display = 'none';
      document.getElementById('appRoot').style.display = '';
      initApp();
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
      <a href="/auth/google" style="display:inline-flex;align-items:center;gap:12px;padding:14px 32px;border-radius:10px;border:1px solid #30363d;background:#161b22;color:#e6edf3;font-size:16px;font-weight:700;text-decoration:none">
        <svg width="22" height="22" viewBox="0 0 48 48"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.08 17.74 9.5 24 9.5z"/><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-3.59-13.46-8.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/></svg>
        Увійти через Google
      </a>
    </div>
    <div style="text-align:center;color:#7d8590;font-size:13px">Твій прогрес зберігається в хмарі 🌿</div>
  </div>`;
}
