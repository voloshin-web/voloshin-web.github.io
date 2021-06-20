import WOW from 'wowjs';
import typed from '../js/modules/typedText';
import animation from '../js/modules/animation';
import Inputmask from "inputmask";

window.addEventListener('DOMContentLoaded', () => {
    new WOW.WOW().init();
    typed();
    animation();
    
    const selectors = document.querySelectorAll('input[type="tel"]');
    let im = new Inputmask("+38 (999) 999 99 99");
    im.mask(selectors);
});
