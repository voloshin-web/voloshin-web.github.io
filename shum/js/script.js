'use strict';

window.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.promo-slider', {
        slidesPerView: 3,
        loop: true,
        centeredSlides: true,
        slideToClickedSlide: true,
        effect: 'coverflow',
        coverflowEffect: {
            rotate: 50,
            slideShadows: false,
        },
        autoplay: {
            delay: 3000,
        },
    });

    const swiperInsta = new Swiper('.content-slider', {
        slidesPerView: 3,
        spaceBetween: 32,
        loop: false,
        grabCursor: true,
        speed: 450,
        observer: true,
        observeParents: true, 
        observeSlideChildren: true,
        slidesPerGroup: 1,
        navigation: {
            nextEl: '.cases-tab__inst .swiper-button-next',
            prevEl: '.cases-tab__inst .swiper-button-prev'
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
            nextEl: '.cases-tab__piblication .swiper-button-next',
            prevEl: '.cases-tab__piblication .swiper-button-prev'
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
            nextEl: '.cases-tab__stories .swiper-button-next',
            prevEl: '.cases-tab__stories .swiper-button-prev'
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
            nextEl: '.cases-tab__companies .swiper-button-next',
            prevEl: '.cases-tab__companies .swiper-button-prev'
        },
    });

    // Smooth scroll
    let scroll = new SmoothScroll('a[href*="#"]');


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

    // FORM Submit
    const forms = document.querySelectorAll('form');

    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
        })
    });

    //  Modal 
    const bindModal = (triggerSelector, overlaySelector, modalSelector, closeSelector) => {
        const callModalBtn = document.querySelectorAll(triggerSelector),
              modal = document.querySelector(modalSelector),
              close = document.querySelectorAll(closeSelector),
              overlay = document.querySelector(overlaySelector),
              scroll = calcScroll(),
              header = document.querySelector('header');

        callModalBtn.forEach(trigger => {
            trigger.addEventListener('click', (e) => {
                if (e.targer) {
                    e.preventDefault();
                }
    
                overlay.classList.add('active');
                modal.classList.add('active');
                document.body.style.overflow = 'hidden';
                document.body.style.marginRight = `${scroll}px`;
                header.style.paddingRight = `${scroll}.5px`;
            })
        })

        close.forEach(cls => {
            cls.addEventListener('click', () => {
                overlay.classList.remove('active');
                modal.classList.remove('active');
                document.body.style.overflow = '';
                document.body.style.marginRight = `0px`;
                header.style.paddingRight = `0px`;
            });
        });

        overlay.addEventListener('click', () => {
            overlay.classList.remove('active');
            modal.classList.remove('active');
            document.body.style.overflow = '';
            document.body.style.marginRight = `0px`;
            header.style.paddingRight = `0px`;
        });
    };

    function calcScroll() {
        let div = document.createElement('div');

        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';

        document.body.appendChild(div);
        let scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();

        return scrollWidth;
    }

    bindModal('[data-login]', '.overlay', '.modal__log', '.modal__close');
    bindModal('[data-connect]', '.overlay', '.modal__connect', '.modal__close');
    bindModal('[data-registration]', '.overlay', '.modal__registration', '.modal__close');
    bindModal('[data-submit]', '.overlay', '.modal__thanks', '.modal__close');
});