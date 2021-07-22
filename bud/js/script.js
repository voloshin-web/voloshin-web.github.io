import Rellax from 'rellax';
import SmoothScroll from 'smooth-scroll';
import WOW from 'wow.js';
import tabs from './modules/tabs';


window.addEventListener('DOMContentLoaded', () => {
    const rellax = new Rellax('.rellax');
    const rellaxin = document.querySelectorAll(".rellaxAbout");
    
    rellaxin.forEach(el => {
        const rellax = new Rellax(el, {
            relativeToWrapper: true,
            wrapper: el.parentElement
        });
    
        window.addEventListener("scroll", () => { 
            rellax.refresh();
        });
    });
    
    var scroll = new SmoothScroll('a[href*="#"]');

    new WOW().init();

    tabs();
});