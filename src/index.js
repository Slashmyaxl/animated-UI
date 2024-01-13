import './styles.css';
import { moveToSlide, sliderListeners } from './imgcarousel';

const menuItems = document.querySelectorAll('.item');

menuItems.forEach((item) => {
  const menu = item.firstElementChild;
  if (menu) {
    item.addEventListener('mouseover', makeVisible);
    item.addEventListener('mouseleave', () => {
      menu.classList.remove('visible');
    });
  }
});

function makeVisible (e) {
  const menu = e.target.firstElementChild;
  if (!menu) return;
  menu.classList.add('visible');
}

moveToSlide(1);
sliderListeners();
