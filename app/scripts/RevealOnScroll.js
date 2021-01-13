import throttle from 'lodash/throttle';

class RevealOnScroll {
    constructor(args) {
        this.revealItem = args;
        this.hideInitially();
        this.throttleCalc = throttle(() => this.calcCaller(), 200);
        this.events();
    }

    events() {
        window.addEventListener('scroll', () => this.throttleCalc());
    }

    calcCaller() {
        this.revealItem.forEach(el => {
            if (el.isRevealed === false) {
                this.calcTheDistance(el);
            }
        })
    }

    calcTheDistance(el) {
        let ratio = el.getBoundingClientRect().top / window.innerHeight;
        if (ratio < 0.75) {
            el.classList.add('reveal-item--visible');
            el.isRevealed = true;
        }
    }


    hideInitially() {
        this.revealItem.forEach(el => {
            el.classList.add('reveal-item');
            el.isRevealed = false;
        })
    }

}

export default RevealOnScroll;
























