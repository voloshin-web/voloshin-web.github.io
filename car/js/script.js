import Rellax from 'rellax';
import Wow from 'wow.js';
import SmoothScroll from 'smooth-scroll';
import Glide from '@glidejs/glide';

import menu from './modules/menu';
import showmore from './modules/showmore';
import input from './modules/input';
import scrollEffect from './modules/scrollEffect';


window.addEventListener('DOMContentLoaded', () => {
    let rellax = new Rellax('.rellax');
    new Wow().init(); 
    let scroll = new SmoothScroll('a[href*="#"]');

    const config = {
        type: 'carousel',
        perView: 4,
        gap: 0,
        perTouch: 1,
        breakpoints: {
            1770: {
                gap: 0
            },
            1200: {
                gap: 0,
                perView: 4
            },
            991: {
                perView: 3,
                gap: 0
            },
            600: {
                perView: 2,
                gap: 0
            },
            400: {
                perView: 1,
                gap: 0
            }
        } 
    };

    new Glide('.glide', config).mount();
    new Glide('.glide1', config).mount();
    new Glide('.glide2', config).mount();
    new Glide('.glide3', config).mount();
    new Glide('.glide4', config).mount();
    new Glide('.glide5', config).mount();
    new Glide('.glide6', config).mount();
    new Glide('.glide7', config).mount();

    // Меню 
    menu();

    // Показать все.
    showmore();

    // Только числа для INPUTA. 
    input();

    // Скролл эффект
    scrollEffect();
}); 

