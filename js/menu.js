const menuData = {
  'المقبلات': [
    { name: 'حمص بالطحينة', desc: 'حمص كريمي مع زيت الزيتون والبابريكا', price: '18 ر.س', img: 'https://picsum.photos/seed/food10/400/300' },
    { name: 'سلطة فتوش', desc: 'خضروات طازجة مع الخبز المحمص', price: '22 ر.س', img: 'https://picsum.photos/seed/food11/400/300' },
    { name: 'فلافل محلية', desc: 'فلافل مقرمشة مع صوص الطحينة', price: '20 ر.س', img: 'https://picsum.photos/seed/food12/400/300' },
    { name: 'متبل الباذنجان', desc: 'باذنجان مشوي مع الطحينة والرمان', price: '19 ر.س', img: 'https://picsum.photos/seed/food13/400/300' },
  ],
  'الأطباق الرئيسية': [
    { name: 'كباب مشوي', desc: 'كباب لحم بقري طازج مع الخضروات', price: '65 ر.س', img: 'https://picsum.photos/seed/food14/400/300' },
    { name: 'دجاج مشوي', desc: 'دجاج متبل بالأعشاب مشوي على الفحم', price: '55 ر.س', img: 'https://picsum.photos/seed/food15/400/300' },
    { name: 'منسف الضأن', desc: 'الطبق الوطني الأردني بالأرز واللحم', price: '85 ر.س', img: 'https://picsum.photos/seed/food16/400/300' },
    { name: 'سمك مشوي', desc: 'سمك طازج بتتبيلة الليمون والأعشاب', price: '75 ر.س', img: 'https://picsum.photos/seed/food17/400/300' },
  ],
  'المشروبات': [
    { name: 'عصير رمان طازج', desc: 'رمان مضغوط طازج يومياً', price: '18 ر.س', img: 'https://picsum.photos/seed/food18/400/300' },
    { name: 'شاي مغربي', desc: 'شاي بالنعناع الطازج والسكر', price: '12 ر.س', img: 'https://picsum.photos/seed/food19/400/300' },
    { name: 'موهيتو ليمون', desc: 'عصير ليمون منعش مع النعناع', price: '22 ر.س', img: 'https://picsum.photos/seed/food20/400/300' },
  ],
  'الحلويات': [
    { name: 'كنافة نابلسية', desc: 'كنافة بالجبن والقطر', price: '28 ر.س', img: 'https://picsum.photos/seed/food21/400/300' },
    { name: 'أم علي', desc: 'حلوى مصرية بالمكسرات والكريمة', price: '25 ر.س', img: 'https://picsum.photos/seed/food22/400/300' },
    { name: 'بقلاوة مشكلة', desc: 'تشكيلة من البقلاوة الطازجة', price: '30 ر.س', img: 'https://picsum.photos/seed/food23/400/300' },
  ],
};

const categories = Object.keys(menuData);
let activeTab = categories[0];

function renderTabs() {
  const container = document.getElementById('menuTabs');
  container.innerHTML = categories.map(cat =>
    `<button class="tab-btn${cat === activeTab ? ' active' : ''}" onclick="setTab('${cat}')">${cat}</button>`
  ).join('');
}

function renderMenu() {
  const items = menuData[activeTab] || [];
  const grid = document.getElementById('menuGrid');
  grid.innerHTML = items.map((item, i) => `
    <div class="menu-item fade-up" style="animation-delay:${i * 0.1}s">
      <img src="${item.img}" alt="${item.name}" loading="lazy">
      <div class="menu-item-body">
        <h3>${item.name}</h3>
        <p>${item.desc}</p>
        <div class="menu-item-footer">
          <span class="price">${item.price}</span>
          <button class="add-btn" onclick="addToOrder('${item.name}','${item.price}')">+ أضف للطلب</button>
        </div>
      </div>
    </div>
  `).join('');
}

function setTab(cat) { activeTab = cat; renderTabs(); renderMenu(); }

const order = [];
function addToOrder(name, price) {
  order.push({ name, price });
  showToast(`تمت إضافة ${name} للطلب! 🛒`);
}

function showToast(msg) {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.style.cssText = 'position:fixed;bottom:2rem;left:50%;transform:translateX(-50%);background:var(--accent);color:#000;padding:.75rem 1.5rem;border-radius:10px;font-weight:700;z-index:999;transition:opacity .3s';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.style.opacity = '1';
  clearTimeout(toast._t);
  toast._t = setTimeout(() => toast.style.opacity = '0', 2500);
}

window.setTab = setTab;
window.addToOrder = addToOrder;
renderTabs();
renderMenu();