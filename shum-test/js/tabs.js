'use strict';

window.addEventListener('DOMContentLoaded', () => {
    let tabHeader = document.querySelectorAll('.cases-tab__header')[0],
        tabBody = document.querySelectorAll('.cases-tab__body')[0],
        tabsPane = tabHeader.querySelectorAll('.cases-tab__item');

    for (let i = 0; i < tabsPane.length; i++) {
        tabsPane[i].addEventListener('click', () => {
            tabHeader.querySelector('.cases-tab__item_active').classList.remove('cases-tab__item_active');
            tabsPane[i].classList.add('cases-tab__item_active');

            tabBody.querySelectorAll('.cases-tab__content').forEach(item => {
                item.classList.remove('cases-tab__content_active');
            });
           
            tabBody.querySelectorAll('.cases-tab__content')[i].classList.add('cases-tab__content_active');
        });
    }
});