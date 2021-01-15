import { transform } from "lodash";

class MobileMenu {
        constructor() {
            this.sidenavTrigger = document.querySelector('.sidenav-trigger');
            this.sidenav = document.querySelector('.sidenav');
            this.windowWidth = document.body.offsetWidth;
            this.window = document.querySelector('window');
            // this.navbar = document.querySelector('.navbar-wrapper');
            this.events();
        }

        events() {
            this.sidenavTrigger.addEventListener('click', () => this.toggleMenu());
            // this.window.addEventListener('resize', () => this.handleWidth());
            // window.addEventListener('scroll', () => this.handleNavbar());
        }

        // handleNavbar() {
        //     if (pageYOffset > 100) {
        //             // this.navbar.style.transition = 'translate 1s';  
        //             this.navbar.style.transform = 'translateY(-150px)';       
        //         setTimeout(() => {
        //             this.navbar.style.transform = 'translateY(0px)';  
        //             this.navbar.style.transition = 'translate 1s';   
        //             this.navbar.style.position = 'fixed';
        //         }, 1000)
                
        //     }
        // }
        
        toggleMenu() {
            this.sidenav.classList.toggle('sidenav-is-active');
        }

        // handleWidth() {
        //     if (this.windowWidth > 587) {
        //         this.sidenav.classList.remove('sidenav-is-active');
        //     }
        // }
        
    }

export default MobileMenu;


