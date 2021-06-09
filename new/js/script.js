$('.about__slider').slick({
    slidesToShow: 1,
    dots: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="img/arrowPrev.svg" alt="prev"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="img/arrowNext.svg" alt="next"></button>'
});

$('.feedback__slider').slick({
    slidesToShow: 1,
    dots: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="img/prev.svg" alt="prev"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="img/next.svg" alt="next"></button>',
    responsive: [
        {
            breakpoint: 991,
            settings: {
                arrows: false
            }
        }
    ]
        
});



// TABS
function tabs(triggers, tabs) {
    document.querySelectorAll(`.${triggers}`).forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const id = e.target.getAttribute('href');
            console.log(id);

            document.querySelectorAll(`.${tabs}`).forEach(child => {
                child.classList.remove(`${tabs}_active`)
            });
    
            document.querySelectorAll(`.${triggers}`).forEach(child => {
                child.classList.remove(`${triggers}_active`)
            });
    
            
            item.classList.add(`${triggers}_active`);
            document.querySelector(id).classList.add(`${tabs}_active`);
        })
    });
    
    document.querySelector(`.${triggers}`).click();
}

document.addEventListener('DOMContentLoaded', () => {
    if(document.querySelector('.start')) {
        tabs('trigger', 'tab');
    }
    if(document.querySelector('.store')) {
        tabs('triggers__trigger', 'tabs');


        // tabs 
        const block = document.querySelectorAll('.store .content .block'),
              trigger = document.querySelectorAll('.store .block .block__trigger');

        trigger.forEach(trig => {
            trig.addEventListener('click', () => {
                if (!trig.classList.contains('out')) {
                    trig.classList.toggle('press');
                    trig.classList.toggle('added');
                    if(trig.classList.contains('added')) {
                        trig.innerText = "Added";
                        trig.style.boxShadow = "0 0 20px #1a4ada";
                    }
                    if(trig.classList.contains('press')) {
                        trig.innerText = "press to add";
                        trig.style.boxShadow = "none"
                    }
                }
            })
        });


        document.querySelectorAll('.moreList').forEach(list => {
            list.addEventListener('click', (e) => {
                e.target.closest('ul').style.display = "block";
            })
        })

    }
})
// document.querySelectorAll('.trigger').forEach(item => {
//     item.addEventListener('click', (e) => {
//         e.preventDefault();
//         const id = e.target.getAttribute('href');

//         document.querySelectorAll('.tab').forEach(child => {
//             child.classList.remove('tab_active')
//         });

//         document.querySelectorAll('.trigger').forEach(child => {
//             child.classList.remove('trigger_active')
//         });

        
//         item.classList.add('trigger_active');
//         document.querySelector(id).classList.add('tab_active');
//     })
// });

// document.querySelector('.trigger').click();








// MENU 

const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu__list'),
      overlay = document.querySelector('.overlay')

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('hamburger_active');
    menu.classList.toggle('menu__list_active');
    overlay.classList.toggle('overlay_active');
});

overlay.addEventListener('click', () => {
    hamburger.classList.toggle('hamburger_active');
    menu.classList.toggle('menu__list_active');
    overlay.classList.toggle('overlay_active');
})