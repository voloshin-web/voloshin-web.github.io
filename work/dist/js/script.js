import menu from './modules/menu';
import slider from './modules/slider';
import WOW from 'wowjs';

document.addEventListener('DOMContentLoaded', () => {
    slider('.promo__slide', '.prev', '.next', '.promo__slider-wrapper', '.promo__slider-inner');
    menu('.hamburger', '.menu__list', '.overlay', 'hamburger_active', 'menu__list_active', 'overlay_active');

    new WOW.WOW().init();
});