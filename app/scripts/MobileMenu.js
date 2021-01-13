
class MobileMenu {
        constructor() {
            this.sidenavTrigger = document.querySelector('.sidenav-trigger');
            this.sidenav = document.querySelector('.sidenav');
            this.windowWidth = document.body.offsetWidth;
            this.window = window;
            this.events();
        }

        events() {
            this.sidenavTrigger.addEventListener('click', () => this.toggleMenu());
            this.window.addEventListener('resize', () => this.handleWidth());
        }
        
        toggleMenu() {
            this.sidenav.classList.toggle('sidenav-is-active');
        }

        handleWidth() {
            if (this.windowWidth > 587) {
                this.sidenav.classList.remove('sidenav-is-active');
            }
        }
        
    }

export default MobileMenu;


