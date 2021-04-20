import Wow from 'wow.js';
import menu from './modules/menu';
import tabs from './modules/tabs';
import contact from './modules/contact';


window.addEventListener('DOMContentLoaded', () => {
    new Wow().init();

    menu('.wrapper-menu', '.menu', 'open', 'menu_active');
    tabs('.tabs__item', '.tabcontent', '.tabs', 'tabs__item_active');
    contact();
});