import Typed from 'typed.js';

const typed = () => {
    let elem = document.querySelector('.footer h6');

    window.addEventListener('scroll', animText);

    function animText() {
        if (elem.getBoundingClientRect().top < 600) {
            typed();
        };
    }

    function typed() {
        let typed = new Typed('.footer h6', {
            strings: ["Давай <span class='colored'>вместе</span> расширять <span class='colored'>наши</span> горизонты!"],
            typeSpeed: 130
        });

        window.removeEventListener('scroll', animText);
    }
};

export default typed;



