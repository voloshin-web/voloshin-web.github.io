// Sliders
$(document).ready(function(){
    $('.brands__slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev"><img src="../img/slider/left-arrow.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../img/slider/right-arrow.svg"></button>',
        responsive: [
            {
                breakpoint: 1080,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 660,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 450,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });

    $('.info__wrapper').slick({
        responsive: [
            {
                breakpoint: 2000,
                settings: "unslick"
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true
                }
            }
        ]
    });

    $('.reviews__slider').slick({
        slidesToScroll: 1,
        dots: true,
        arrows: false,
    });
});


window.addEventListener('DOMContentLoaded', () => {
    // search 
    const searchBtn = document.querySelector('.search'),
        searchForm = document.querySelector('.search__form');

    searchBtn.addEventListener('click', toogleSearchForm);

    function toogleSearchForm() {
        document.querySelector('.logo').classList.toggle('logo_active');
        document.querySelector('.menu').classList.toggle('menu_active');
        document.querySelector('.search__form').classList.toggle('search__form_active');

        if (document.querySelector('.search__form_active')) {
            searchBtn.querySelector('img').setAttribute('src', 'img/times.svg');
            document.querySelector('.search__form_active input').value = '';
        } else {
            searchBtn.querySelector('img').setAttribute('src', 'img/header/search.svg');
        }
    }

    // shopping cart
    const cartBtn = document.querySelector('.busket'),
        cart = document.querySelector('.shopping');

    cartBtn.addEventListener('click', shoppingCart);

    function shoppingCart() {
        cart.classList.toggle('shopping_active');
    }


    // Show more
    const textMore = document.querySelector('#more'),
        showBtn = document.querySelector('.show');

    function showMore() {
        if (textMore.style.display === 'block') {
            textMore.style.display = 'none';
            showBtn.innerHTML = 'Показать еще';
        } else {
            textMore.style.display = 'block';
            showBtn.innerHTML = 'Скрыть';
        }
    }

    showBtn.addEventListener('click', showMore);


    // Tabs 
    const tabHeader = document.querySelectorAll(".tabs__header")[0],
        tabBody = document.querySelectorAll(".tabs__body")[0],
        tabsPane = tabHeader.querySelectorAll(".tab");

    for (let i = 0; i < tabsPane.length; i++){
        tabsPane[i].addEventListener("click", function(){
            tabHeader.querySelectorAll(".tab_active")[0].classList.remove("tab_active");
            tabsPane[i].classList.add("tab_active");
            tabBody.querySelectorAll(".content__block_active")[0].classList.remove("content__block_active");
            tabBody.querySelectorAll(".content__block")[i].classList.add("content__block_active");
        });
    }

    // menu 

    const menuOpen = document.querySelector('.hamburger'),
          menu = document.querySelector('.menu');
    
    menuOpen.addEventListener('click', open);

    function open() {
        menuOpen.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    }
});
