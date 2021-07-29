import SmoothScroll from 'smooth-scroll';
import WOW from 'wow.js';
import Swiper from 'swiper';


window.addEventListener('DOMContentLoaded', () => {
    var scroll = new SmoothScroll('a[href*="#"]');
    new WOW().init();

    document.addEventListener('click', documentAction);

    function checkMobile() {
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            return true;
          } else {
            return false;
        }
    }

    function documentAction(e) {
        const targetElement = e.target;

        if (window.innerWidth > 768 && checkMobile()) {
            if (targetElement.classList.contains('social__link')) {
                targetElement.classList.toggle('social__link_active');
            }
        }
    }

});