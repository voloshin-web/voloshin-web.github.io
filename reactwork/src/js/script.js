import WOW from 'wowjs';
import typed from '../js/modules/typedText';
import animation from '../js/modules/animation';
import maskedInput from '../js/modules/maskedInput';
import validateForm from './modules/validateForm';
import SmoothScroll from "smoothscroll-for-websites";

window.addEventListener('DOMContentLoaded', () => {
    new WOW.WOW().init();
    typed();
    animation();
    maskedInput();
    validateForm();
    SmoothScroll();
});