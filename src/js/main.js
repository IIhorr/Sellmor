window.addEventListener('DOMContentLoaded', () => {
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
