
// library Swiper.js 
// Train block (slider) 

document.addEventListener('DOMContentLoaded', () => {

  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    initialSlide: 0,
    cssMode: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    mousewheel: true,
    keyboard: true,
  });

});
