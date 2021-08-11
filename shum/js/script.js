'use strict';

window.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.promo-slider', {
        slidesPerView: 3,
        loop: true,
        grabCursor: true,
        autoplay: {
            delay: 5000,
        },
    });

    const swiperInsta = new Swiper('.content-slider', {
        slidesPerView: 3,
        loop: true,
        spaceBetween: 32,
        grabCursor: true,
        speed: 450,
        observer: true,
        observeParents: true, 
        observeSlideChildren: true,
        slidesPerGroup: 1,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
    });

    const swiperPublication = new Swiper('.publication-slider', {
        slidesPerView: 1,
        loop: false,
        grabCursor: true,
        speed: 450,
        observer: true,
        observeParents: true, 
        observeSlideChildren: true,
        slidesPerGroup: 1,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
    });

    const swiperStories = new Swiper('.stories-slider', {
        observer: true,
        observeParents: true, 
        observeSlideChildren: true,
        spaceBetween: 32,
        slidesPerView: 3,
        loop: false,
        grabCursor: true,
        speed: 450,
        slidesPerGroup: 1,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
    });

    const swiperDigital = new Swiper('.companies-slider', {
        observer: true,
        observeParents: true, 
        observeSlideChildren: true,
        spaceBetween: 32,
        slidesPerView: 3,
        loop: false,
        grabCursor: true,
        speed: 450,
        slidesPerGroup: 1,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
    });



    // TABS

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