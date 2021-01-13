import '../scss/style.scss';
import 'lazysizes';
import MobileMenu from './MobileMenu';
import RevealOnScroll from './RevealOnScroll';

// Mobile Menu 
new MobileMenu();


// RevealOnScroll
new RevealOnScroll(document.querySelectorAll('.members-item'));



