import '../scss/style.scss';
import MobileMenu from './MobileMenu';
import RevealOnScroll from './RevealOnScroll';


// Mobile Menu 
new MobileMenu();


// RevealOnScroll
new RevealOnScroll(document.querySelectorAll('.members-item'));

if (module.hot) {
    module.hot.accept();
}




// import lightbox from 'lightbox2';


// initialize lightbox
// import Swiper bundle with all modules installed
// import Swiper, { Navigation, Pagination } from 'swiper'; 
// configure Swiper to use modules
// Swiper.use([Navigation, Pagination]);
// init Swiper:
// const swiper = new Swiper('.swiper-container', {
//     spaceBetween: 30,
//     centeredSlides: true,
//     autoplay: {
//       delay: 2500,
//       disableOnInteraction: false
//     },
//     pagination: {
//       el: '.swiper-pagination',
//       clickable: true
//     },
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
//   });
