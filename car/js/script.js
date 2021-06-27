// window.addEventListener('DOMContentLoaded', () => {
//     const car = document.querySelector('.stages .stage__list .line img'),
//           stages = document.querySelector('.stages__wrapper'),
//           stag = document.querySelector('.stages'),
//           line = document.querySelector('.stages .stage__list .line').clientHeight;


//     let lastScrollTop = 0,
//         top = -30;

//     window.addEventListener('scroll', () => {

//         let st = window.pageYOffset || document.documentElement.scrollTop; 

//         if (st > lastScrollTop){
//             top += 8;
//             car.style.top = `${top}px`;
//             car.style.transform = '';
//         } else {
//             top -= 8;
//             car.style.top = `${top}px`;
//             car.style.transform = 'rotate(180deg)';
//         }


//         lastScrollTop = st <= 0 ? 0 : st;
//     });
// }); 