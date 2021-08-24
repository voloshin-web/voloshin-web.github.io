'use strict';

window.addEventListener('DOMContentLoaded', () => {
    // FORM Submit successfully
    const forms = document.querySelectorAll('form');

    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
        })
    });

    //  Modal 

    const bindModal = (triggerSelector, overlaySelector, modalSelector, closeSelector) => {
        const callModalBtn = document.querySelectorAll(triggerSelector),
              modal = document.querySelector(modalSelector),
              close = document.querySelectorAll(closeSelector),
              overlay = document.querySelector(overlaySelector),
              scroll = calcScroll(),
              header = document.querySelector('header');


        function closeModal() {
            overlay.classList.remove('active');
            modal.classList.remove('active');
            document.body.style.overflow = '';

            if (window.innerWidth >= 1020 ){
                document.body.style.marginRight = `0px`;
                header.style.paddingRight = `0px`;
            } 
            // document.body.style.marginRight = `0px`;
            // header.style.paddingRight = `0px`;
        }

        function calcScroll() {
            let div = document.createElement('div');
    
            div.style.width = '50px';
            div.style.height = '50px';
            div.style.overflowY = 'scroll';
            div.style.visibility = 'hidden';
    
            document.body.appendChild(div);
            let scrollWidth = div.offsetWidth - div.clientWidth;
            div.remove();
    
            return scrollWidth;
        }

        callModalBtn.forEach(trigger => {
            trigger.addEventListener('click', (e) => {
                if (e.target) {
                    overlay.classList.add('active');
                    modal.classList.add('active');
                    document.body.style.overflow = 'hidden';

                    if (window.innerWidth >= 1000 ) {
                        document.body.style.marginRight = `${scroll}px`;
                        header.style.paddingRight = `${scroll}.5px`;
                    }

                    // document.body.style.marginRight = `${scroll}px`;
                    // header.style.paddingRight = `${scroll}.5px`;
                }
            })
        })

        close.forEach(cls => {
            cls.addEventListener('click', () => {
                closeModal(); 
            });
        });

        overlay.addEventListener('click', () => {
            closeModal(); 
        });
    };

    bindModal('[data-login]', '.overlay', '.modal__log', '.modal__close');
    bindModal('[data-connect]', '.overlay', '.modal__connect', '.modal__close');
    bindModal('[data-registration]', '.overlay', '.modal__registration', '.modal__close');
    bindModal('[data-submit]', '.overlay', '.modal__thanks', '.modal__close');
});
