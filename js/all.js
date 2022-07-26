$(document).ready(function () {
  $(".nav>li").click(function (e) {
    e.preventDefault();
    // $(this).toggleClass('active');
    $(this).find(".dropdown-open").slideToggle();
    $(this).siblings().find(".dropdown-open").slideUp();
  });
});

$(".top a").click(function (e) {
  e.preventDefault();
  $("html,body").animate(
    {
      scrollTop: 0,
    },
    700
  );
});

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  speed: 1000,
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    autoplay: 1000,
    speed: 100,
  },

  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  // And if we need scrollbar
  //   scrollbar: {
  //     el: '.swiper-scrollbar',
  //   },
});
