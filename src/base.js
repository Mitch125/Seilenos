const elements = {
  content: document.querySelector('.content'),
  header: document.createElement('header'),
  headerLogo: document.createElement('div'),
  img: document.createElement('img'),
  main: document.createElement('main'),
  about: document.createElement('div'),
  menu: document.createElement('div'),
  contact: document.createElement('div'),
  tabSelector: document.createElement('tabSelector'),
  footer: document.createElement('footer'),
  footerSpan: document.createElement('span')
};
const clickable = [elements.menu, elements.contact, elements.about];

const base = (() => {
  // Header
  elements.header.classList.add('header');
  elements.headerLogo.classList.add('headerLogo');

  elements.header.appendChild(elements.headerLogo);
  elements.content.appendChild(elements.header);

  // Main
  elements.main.classList.add('main');
  elements.about.classList.add('about', 'tabby');
  elements.about.textContent = 'about';
  elements.about.value = 0;
  elements.menu.classList.add('menu', 'tabby');
  elements.menu.textContent = 'menu';
  elements.menu.value = 1;
  elements.contact.classList.add('contact', 'tabby');
  elements.contact.textContent = 'contact';
  elements.contact.value = 2;
  elements.tabSelector.appendChild(elements.about);
  elements.tabSelector.appendChild(elements.menu);
  elements.tabSelector.appendChild(elements.contact);
  elements.main.appendChild(elements.tabSelector);
  elements.content.appendChild(elements.main);

  // Footer
  elements.footer.classList.add('footer');
  elements.footerSpan.textContent = '/ Made by Mitch /';
  elements.footer.appendChild(elements.footerSpan);
  elements.content.appendChild(elements.footer);
})();

export { elements, clickable, base };
