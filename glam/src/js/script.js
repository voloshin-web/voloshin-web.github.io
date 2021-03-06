import './modules/slider';
import menu from './modules/menu';
import searchMenu from './modules/searchMenu';
import busket from './modules/busket';
import tabs from './modules/tabs';
import showMore from './modules/showMore';

window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    menu('.hamburger', '.menu', 'hamburger_active', 'menu_active');
    searchMenu('.search', '.search__form');
    busket();
    tabs();
    showMore();
});
