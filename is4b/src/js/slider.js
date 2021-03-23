
document.addEventListener('DOMContentLoaded', () => {

  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    initialSlide: 1,
    cssMode: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    mousewheel: true,
    keyboard: true,
  });

});  // DOMContentLoaded 
