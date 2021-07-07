window.addEventListener('DOMContentLoaded', () => {
    // Car moving
    // const car = document.querySelector('.stages .stage__list .car'),
    //       stages = document.querySelector('.stages__wrapper');
    // let lastScrollTop = 0,
    //     offset = 0;


    // window.addEventListener('scroll', () => {
    //     if (stages.getBoundingClientRect().top > 0) {
    //         let st = window.pageYOffset || document.documentElement.scrollTop; 

    //         if (st > lastScrollTop){
    //                 offset += 1;
    //                 car.style.top = `${offset}%`;
    //                 car.style.transform = '';
    //         } else {
    //                 offset -= 1;
    //                 car.style.transform = 'rotate(180deg)';
    //                 car.style.top = `${offset}%`;
    //         }
    
    //         lastScrollTop = st <= 0 ? 0 : st;
    //     }
    // });

    // MENU 

    const hamburger = document.querySelector('.header .hamburger'),
          menu = document.querySelector('.menu'),
          overlay = document.querySelector('.overlay'),
          links = document.querySelectorAll('.menu .menu__link');

    function toggleMenu() {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
        overlay.classList.toggle('overlay_active');
    }

    links.forEach(link => {
        link.addEventListener('click', toggleMenu);
    });

    hamburger.addEventListener('click', toggleMenu);
    overlay.addEventListener('click', toggleMenu);

    // Show all cars.

    const cars = document.querySelectorAll('.glide__slides'),
        carsItem = document.querySelectorAll('.glide__slide'),
        btns = document.querySelectorAll('.glide__arrows'),
        showMore = document.querySelectorAll('.show');


    showMore.forEach((link, i) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            cars[i].classList.toggle('show__more');
            
            cars[i].querySelectorAll('li').forEach(div => {
                if (div.classList.contains('glide__slide--clone')) {
                    div.style.display = 'none';
                }

                div.classList.toggle('glide__slide_active');
            }); 


            if (link.textContent === "Показати всі") {
                link.textContent = 'Приховати';

                btns[i].style.display = 'none';

            } else {
                link.textContent = 'Показати всі';

                
                cars[i].querySelectorAll('li').forEach(div => {
                    if (div.classList.contains('glide__slide--clone')) {
                        div.style.display = '';
                    }
                }); 

                btns[i].style.display = '';
                cars[i].style.transition = '';
            }
        });
    }); 


    // Только числа для INPUTA
    const form = document.querySelectorAll('form'),
          telInput = document.querySelectorAll('#tel');

    telInput.forEach(input => {
        input. addEventListener('input', () => {
            input.value = input.value.replace(/\D/, '');
        });
    });
}); 

