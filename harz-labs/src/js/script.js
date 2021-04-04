

// switch tabs Product block 
document.addEventListener('DOMContentLoaded', function(e) {
  let productLink = document.querySelectorAll('.product__link');

  productLink = Array.prototype.slice.call(productLink, 0);

  productLink.forEach(function(el, i, ar) {
    el.addEventListener('click', function(event){
      e.preventDefault();

      let tabLink = document.querySelector(el.getAttribute('href'));

      document.querySelector('.product__link .product__link--active')
        .classList.remove('product__link--active');

      document.querySelector('.product .product--active')
        .classList.remove('product--active');

      el.classList.add('product__link--active');
      tabLink.classList.add('product--active');
    })
  })
})




// counter price 
let buttonCountPlus = document.getElementById("buttonCountPlus");
let buttonCountMinus = document.getElementById("buttonCountMinus");
let count = document.getElementById("buttonCountNumber");
let count2 = document.getElementById("UnitNumber");
let number = 1;
let price = 89;

buttonCountPlus.onclick = function() {
  if (number) {
    number++;
    count.innerHTML = number;
    count2.value = number * price;
  }
};

buttonCountMinus.onclick = function() {
  if (number >= 2) {
    number--;
    count.innerHTML = number;
    count2.value = number * price;
  }
};

