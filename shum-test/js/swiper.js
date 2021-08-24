'use strict';

window.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.promo-slider', {
        loop: false,
        slidesPerView: 3,
        centeredSlides: true,
        initialSlide: 1,
        effect: 'coverflow',
        slideToClickedSlide: true,
        coverflowEffect: {
            slideShadows: false,
        },
        breakpoints: {
            760: {
                slidesPerView: 3
            },
            320: {
                slidesPerView: 1,
            },

        }
        // autoplay: {
        //     delay: 3000,
        // },
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
        pagination: {
            el: '.cases-tab__inst .swiper-pagination',
            clickable: true,
        },

        breakpoints: {
            1020: {
                slidesPerView: 3,
            },
            770: {
                slidesPerView: 3,
            },
            576: {
                slidesPerView: 2
            },
            270: {
                slidesPerView: 1,
            }
        },
        on: {
            init: function() {
                checkArrow('.cases-tab__inst');
                checkPagination('.cases-tab__inst');

            },
            resize: function () {
                checkArrow('.cases-tab__inst');
                checkPagination('.cases-tab__inst');
            }
        }
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
        pagination: {
            el: '.cases-tab__piblication .swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            320: {
                slidesPerGroup: 1,
            }
        },
        on: {
            init: function() {
                checkArrow('.cases-tab__piblication');
                checkPagination('.cases-tab__piblication');
            },
            resize: function () {
                checkArrow('.cases-tab__piblication');
                checkPagination('.cases-tab__piblication');
            }
        }
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
        pagination: {
            el: '.cases-tab__stories .swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            1020: {
                slidesPerView: 3,
            },
            770: {
                slidesPerView: 3,
            },
            576: {
                slidesPerView: 2
            },
            270: {
                slidesPerView: 1,
            }
        },
        on: {
            init: function() {
                checkArrow('.cases-tab__stories');
                checkPagination('.cases-tab__stories');
            },
            resize: function () {
                checkArrow('.cases-tab__stories');
                checkPagination('.cases-tab__stories');
            }
        }
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
        pagination: {
            el: '.cases-tab__companies .swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            1020: {
                slidesPerView: 3,
            },
            770: {
                slidesPerView: 3,
            },
            576: {
                slidesPerView: 2
            },
            270: {
                slidesPerView: 1,
            }
        },
        on: {
            init: function() {
                checkArrow('.cases-tab__companies');
                checkPagination('.cases-tab__companies');
            },
            resize: function () {
                checkArrow('.cases-tab__companies');
                checkPagination('.cases-tab__companies');
            }
        }
    });

    function checkArrow(parentSelector) {
        let swiperPrev = document.querySelector(`${parentSelector} .swiper-button-prev`);
        let swiperNext = document.querySelector(`${parentSelector} .swiper-button-next`);

        if ( window.innerWidth > 991  ) {
            swiperPrev.style.display = 'flex';
            swiperNext.style.display = 'flex';
        } else {
            swiperPrev.style.display = 'none';
            swiperNext.style.display = 'none';
        }
    }

    function checkPagination(parentSelector) {
        let swiperPagination = document.querySelector(`${parentSelector} .swiper-pagination`);

        if ( window.innerWidth < 991  ) {
            swiperPagination.style.display = 'block';
        } else {
            swiperPagination.style.display = 'none';
        }
    }

    const resultSwiper = document.querySelectorAll('.cases .publication-slider .toggler_mobile');
        
    if (resultSwiper) {
        resultSwiper.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const target = e.target;
                const imgSwiper = target.parentElement.querySelector('.cases .publication-slider .img_mobile');

                btn.classList.toggle('active');
    
                if (btn.innerText == 'узнать результаты') {
                    btn.innerText = 'назад';
                    btn.classList.add('active');
                    imgSwiper.classList.add('active');
                } else {
                    btn.innerText = 'узнать результаты';
                    btn.classList.remove('active');
                    imgSwiper.classList.remove('active');
                }
            });
        });
    }


    // PAGE Blogger

    const postExample = new Swiper('.post__example-slider', {
        slidesPerView: 1,
        loop: false,
        grabCursor: true,
        speed: 450,
        observer: true,
        observeParents: true, 
        observeSlideChildren: true,
        slidesPerGroup: 1,
        navigation: {
            nextEl: '.posts .swiper-button-next',
            prevEl: '.posts .swiper-button-prev'
        },
    });

    const storiesExample = new Swiper('.stories__example-slider', {
        slidesPerView: 1,
        loop: false,
        grabCursor: true,
        speed: 450,
        observer: true,
        observeParents: true, 
        observeSlideChildren: true,
        slidesPerGroup: 1,
        navigation: {
            nextEl: '.stories .swiper-button-next',
            prevEl: '.stories .swiper-button-prev'
        },
    });
});