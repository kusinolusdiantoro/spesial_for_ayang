// Inisialisasi Swiper dengan autoplay
var swiper = new Swiper(".swiper", {
  effect: "coverflow",
  grabCursor: true,
  spaceBetween: 30,
  centeredSlides: false,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 0,
    modifier: 1,
    slideShadows: false,
  },
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  keyboard: {
    enabled: true,
  },
  mousewheel: {
    thresholdDelta: 70,
  },
  breakpoints: {
    460: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 3,
    },
    1600: {
      slidesPerView: 3.6,
    },
  },
  autoplay: {
    delay: 5000, // Delay dalam milidetik (5 detik)
    disableOnInteraction: false, // Autoplay tidak berhenti setelah interaksi
  },
});

document.addEventListener("DOMContentLoaded", function () {
  var audio = document.getElementById("backgroundMusic");

  // Cobalah untuk memulai pemutaran audio
  audio.play().catch(function (error) {
    console.log("Error playing audio:", error);
  });
});
