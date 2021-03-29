import Wow from 'wow.js';
import Relax from 'rellax';
import SmoothScroll from 'smooth-scroll';
import menu from './menu';
import toggleActiveClassByScroll from './toggleActiveClassByScroll';

window.addEventListener('DOMContentLoaded', () => {
    new Wow().init();
    const relax = new Relax('.rellax');
    let scroll = new SmoothScroll('a[href*="#"]');

    menu('.hamburger', '.menu', '.overlay');

    toggleActiveClassByScroll();
});
