window.addEventListener('DOMContentLoaded', () => {
    // Mobile header 
    const headerHamburger = document.querySelector('.header .hamburger'),
          menuMobile = document.querySelector('.mobile__menu'),
          menuMobileItem = menuMobile.querySelectorAll('.header__menu-item');
          close = document.querySelector('.mobile__menu .mobile__menu-close');

    headerHamburger.addEventListener('click', openMenu);
    close.addEventListener('click', closeMenu);

    function openMenu() {
        headerHamburger.classList.add('active');
        menuMobile.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
        headerHamburger.classList.remove('active');
        menuMobile.classList.remove('active');
        document.body.style.overflow = '';
    }

    menuMobile.addEventListener('click', (e) => {
        const target = e.target;
        
        if (target.tagName === 'BUTTON') {
            closeMenu();
            document.body.style.overflow = 'hidden';
        }

        if (target.classList.contains('header__menu-item') || target.classList.contains('header__menu-link')) {
            closeMenu();
        }

        if (target.classList.contains('mobile__menu', 'active') || target.classList.contains('header__menu-list')) {
            closeMenu();
        }
    });

    // toggle pages
    const toggler = document.querySelector('.header__menu-link_toggler');

    if (toggler) {
        toggler.addEventListener('click', (e) => {
            e.preventDefault();

            const switcher = toggler.querySelector('.switch-btn');

            if (switcher.classList.contains('switch-on')) {
                switcher.classList.remove('switch-on');

                let linkHref = `${window.location.origin}/index.html`;
                setTimeout(() => {
                    window.location = linkHref;
                }, 500)
            } else {
                switcher.classList.add('switch-on');

                let linkHref = `${window.location.origin}/pages/bloggers.html`;
                setTimeout(() => {
                    window.location = linkHref;
                }, 500)
            }
        });
    }   
})