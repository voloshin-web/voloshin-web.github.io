window.addEventListener('DOMContentLoaded', () => {
    // Меню 
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

    // Показать все.
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


    // Только числа для INPUTA. 
    const form = document.querySelectorAll('form'),
          telInput = document.querySelectorAll('#tel');

    telInput.forEach(input => {
        input. addEventListener('input', () => {
            input.value = input.value.replace(/\D/, '');
        });
    });

    // Скролл эффект
    let scrollPos = 0;

    const car = document.querySelector('.car'),
          list = document.querySelector('.stages__list');

    car.classList.remove("car__up");
    car.classList.remove("car__active");
    list.classList.remove("stage__list__bottom");

    window.addEventListener('scroll', () => { 
        let st = window.pageYOffset;

        if (st > scrollPos) {
            car.classList.remove("car__up");
            car.classList.add("car__active");
        } else {
            car.classList.add("car__up");
            car.classList.remove("car__active");
            list.classList.remove("stage__list__bottom");
        }

        scrollPos = st;
    });
}); 

