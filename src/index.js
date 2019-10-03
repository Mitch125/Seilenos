import { elements, clickable } from './base';
import { contact } from './contact';
import { about } from './about';
import { menu } from './menu';

elements.main.appendChild(about);
elements.about.classList.add('active');
const contentChoices = [about, menu, contact];

function turnActiveStateOff() {
  const tabs = document.querySelectorAll('.tabby');
  tabs.forEach(tab => {
    tab.classList.remove('active');
  });
}

function refreshMain() {
  elements.main.removeChild(elements.main.lastChild);
}
function displayContent(option) {
  elements.main.appendChild(contentChoices[option]);
}

clickable.forEach(e => {
  e.addEventListener('click', () => {
    refreshMain();
    displayContent(e.value);
    turnActiveStateOff();
    e.classList.add('active');
  });
});
