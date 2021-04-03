import $ from 'jquery';
import 'slick-carousel';

$(document).ready(function(){
    $('.brands__slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev"><img src="img/slider/left-arrow.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/slider/right-arrow.svg"></button>',
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