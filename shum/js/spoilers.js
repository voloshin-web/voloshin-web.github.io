'use strict';

window.addEventListener('DOMContentLoaded', () => {
    let spoilerBtns = document.querySelectorAll('[data-spoiler]');

    spoilerBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const targer = e.target.nextElementSibling;

            if (!targer.classList.contains('show')) {
                targer.classList.add('show');
                targer.style.height = 'auto';

                let height = targer.clientHeight + 'px';

                targer.style.height = '0px';

                setTimeout(function () {
                    targer.style.height = height;
                }, 0);
                
            } else {
                targer.style.height = '0px';

                targer.addEventListener('transitionend', 
                    function () {
                        targer.classList.remove('show');
                    }, {
                        once: true
                });
            }
        });
    });
});