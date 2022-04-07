// caresol with jaquery

$(".owl-carousel-rulls").owlCarousel({
  loop: true,
  margin: 27,
  nav: true,
  dots: false,
  navText: [
    `<svg><use xlink:href="img/icons.svg#icon-arrow_back_ios"></use></svg>`,
    `<svg><use xlink:href="img/icons.svg#icon-arrow_forward_ios"></use></svg>`,
  ],
  responsive: {
    0: {
      items: 1,
    },
    440: {
      items: 2,
    },
    643: {
      items: 3,
    },

    1200: {
      items: 4,
    },
  },
});

$(".owl-carousel-team").owlCarousel({
  loop: true,
  margin: 27,
  nav: true,
  dots: false,
  navText: [
    `<svg><use xlink:href="img/icons.svg#icon-arrow_back_ios"></use></svg>`,
    `<svg><use xlink:href="img/icons.svg#icon-arrow_forward_ios"></use></svg>`,
  ],
  responsive: {
    0: {
      items: 1,
    },
    550: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});


// faqs
const btns = document.querySelectorAll(".faqs__btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const parentEl = e.currentTarget.parentElement;
    parentEl.classList.toggle("show-text");
    console.log(parentEl);
  });
});

// mobile nav

const navItem =  document.querySelectorAll('.nav__item')
const mblNavBtn =  document.querySelector('.nav-bar-btns')
const navContainer = document.querySelector('.home__nav')
const openBtn = document.querySelector(".open-btn")
const closeBtn = document.querySelector(".close-btn")

function openNav() {
  navContainer.classList.add('show-mbl-nav')
  mblNavBtn.classList.add('show-mbl-nav')
}
function closeNav() {
  navContainer.classList.remove('show-mbl-nav')
  mblNavBtn.classList.remove('show-mbl-nav')
}

openBtn.addEventListener('click', function () {
  openNav()
})
closeBtn.addEventListener('click', function () {
  closeNav()
})

navItem.forEach(el=>{
  el.addEventListener('click', function() {
    closeNav()
  })
})

const about  = document.querySelector('.about-us')
about.addEventListener('click', function(){
  window.scrollTo(0, 1095)
})


window.addEventListener('scroll', ()=>{
  const navContainer = document.querySelector('.home__nav')
  if(window.scrollY >= 150){
    console.log(window.scrollY);
    navContainer.classList.add('sticky')
  }else{
    navContainer.classList.remove('sticky')
  }
})