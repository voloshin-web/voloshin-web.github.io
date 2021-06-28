window.addEventListener('DOMContentLoaded', () => {
    // Car moving
    const car = document.querySelector('.stages .stage__list .line img'),
          stages = document.querySelector('.stages__wrapper');
    let lastScrollTop = 0,
        offset = -5;


    // window.addEventListener('scroll', () => {
    //     if (stages.getBoundingClientRect().top > 0) {
    //         let st = window.pageYOffset || document.documentElement.scrollTop; 

    //         if (st > lastScrollTop){
    //             if (offset < 100) {
    //                 offset += 1;
    //                 car.style.top = `${offset}%`;
    //                 car.style.transform = '';
    //             }
              
    //         } else {
    //             if (offset > -5) {
    //                 offset -= 1;
    //                 car.style.transform = 'rotate(180deg)';
    //                 car.style.top = `${offset}%`;
    //             }
                
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

    const cars = document.querySelectorAll('.glide__track'),
          showMore = document.querySelectorAll('.show');

    showMore.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
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

