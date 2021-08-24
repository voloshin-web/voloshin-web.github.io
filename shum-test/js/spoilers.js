'use strict';

window.addEventListener('DOMContentLoaded', () => {
    let spoilerBtns = document.querySelectorAll('[data-spoiler]');

    spoilerBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const target = btn.nextElementSibling;

            if (!target.classList.contains('show')) {
                target.classList.add('show');
                target.style.height = 'auto';

                let height = target.clientHeight + 'px';

                target.style.height = '0px';

                setTimeout(function () {
                    target.style.height = height;
                }, 0);

                btn.querySelector('img').style.transform = 'rotateX(180deg)';
            } else {
                target.style.height = '0px';

                target.addEventListener('transitionend', 
                    function () {
                        target.classList.remove('show');
                    }, {
                        once: true
                });

                btn.querySelector('img').style.transform = '';
            }
        });
    });
});