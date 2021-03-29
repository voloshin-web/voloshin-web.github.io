import Wow from 'wow.js';
import Relax from 'rellax';
import menu from './menu';

window.addEventListener('DOMContentLoaded', () => {
    new Wow().init();
    const relax = new Relax('.rellax');

    menu('.hamburger', '.menu', '.overlay');
});
