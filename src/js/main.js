import Forms from './modules/form';
import smoothScrolling from './modules/smoothScrolling';
import burger from './modules/burger';

window.addEventListener('DOMContentLoaded', () => {
  new Forms('.form').init();
  smoothScrolling('.nav__item[data-goto]');
  burger('.burger', '.nav__list', '.burger__list');
  const swiper = new Swiper('.swiper-container', {
    spaceBetween: 10,
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
});
