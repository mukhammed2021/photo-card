// базовая версия + модули навигации и пагинации
import Swiper from "swiper";
import { Navigation, Thumbs, Parallax } from "swiper/modules";

import "swiper/scss";
import "swiper/scss/navigation";

if (document.querySelector(".hero")) {
   const thumbsSwiper = new Swiper(".hero__thumbs", {
      modules: [Navigation, Thumbs],
      loop: true,
      spaceBetween: 28,
      slidesPerView: 3.8,
      centeredSlides: true,
      watchSlidesProgress: true,
      freeMode: true,
      speed: 800,
      observer: true,
      observeParents: true,
      breakpoints: {
         320: {
            slidesPerView: 1.2,
            spaceBetween: 15,
         },
         620: {
            slidesPerView: 2,
            spaceBetween: 28,
         },
         768: {
            slidesPerView: 3.8,
            spaceBetween: 28,
         },
      },
   });
   new Swiper(".hero__slider", {
      modules: [Navigation, Thumbs, Parallax],
      parallax: true,
      loop: true,
      navigation: {
         nextEl: ".hero__button--next",
         prevEl: ".hero__button--prev",
      },
      loop: true,
      // centerInsufficientSlides: true,
      spaceBetween: 15,
      slidesPerView: 1,
      speed: 800,
      observer: true,
      observeParents: true,
      autoplay: {
         delay: 3000,
         disableOnInteraction: false,
      },
      thumbs: {
         swiper: thumbsSwiper,
      },
   });
}
