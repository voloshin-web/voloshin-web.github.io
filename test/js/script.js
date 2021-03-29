import Wow from 'wow.js';
import Relax from 'rellax';
import menu from './menu';

window.addEventListener('DOMContentLoaded', () => {
    new Wow().init();
    const relax = new Relax('.rellax');

    menu('.hamburger', '.menu', '.overlay');

    (function() {
        scrollTo();
    })();
    
    function scrollTo() {
        const links = document.querySelectorAll('.menu__link');
        links.forEach(each => (each.onclick = scrollAnchors));
    }
    
    function scrollAnchors(e, respond = null) {
        const distanceToTop = el => Math.floor(el.getBoundingClientRect().top);
        e.preventDefault();
        var targetID = (respond) ? respond.getAttribute('href') : this.getAttribute('href');
        const targetAnchor = document.querySelector(targetID);
        if (!targetAnchor) {
            return;
        }
        const originalTop = distanceToTop(targetAnchor);
        window.scrollBy({ top: originalTop, left: 0, behavior: 'smooth' });
        const checkIfDone = setInterval(function() {
            const atBottom = window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 2;
            if (distanceToTop(targetAnchor) === 0 || atBottom) {
                targetAnchor.tabIndex = '-1';
                targetAnchor.focus();
                window.history.pushState('', '', targetID);
                clearInterval(checkIfDone);
            }
        }, 100);
    }
});
