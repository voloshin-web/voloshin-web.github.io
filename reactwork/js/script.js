let lastScrollTop = 0;
const cloud = document.querySelectorAll('.cloud');

document.addEventListener('scroll', () => {
    let st = window.pageYOffset || document.documentElement.scrollTop; 

    if (st > lastScrollTop){
        cloud.forEach(item => { 
            if (item.classList.contains('cloud_less')) {
                item.style.transform = `translateX(30px)`;
            } else {
                item.style.transform = `translateX(100px)`;
            }
        });
    } else {
        cloud.forEach(item => {
            if (item.classList.contains('cloud_less')) {
                item.style.transform = `translateX(-30px)`;
            } else {
                item.style.transform = `translateX(-100px)`;
            }
        });
    }

    lastScrollTop = st <= 0 ? 0 : st;
});