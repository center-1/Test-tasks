
document.addEventListener('DOMContentLoaded', () => { 
  const scrollItems = document.querySelectorAll('.scroll-item');
  const scrollAnimation = () => {
    let windowCenter = (window.innerHeight / 2) + window.scrollY;

    scrollItems.forEach(el => {
      let scrollOffset = el.offsetTop + (el.offsetHeight / 2);
      if (windowCenter >= scrollOffset) {
        el.classList.add('animation-class');
      } else {
        el.classList.remove('animation-class');
      };
    });
  };

  scrollAnimation();
  window.addEventListener('scroll', () => {
    scrollAnimation();
  });

});

