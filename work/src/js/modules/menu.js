const menu = (hamburgerSelector, menuSelector, overlaySelector, hamburgerActive, menuActive, overlayActive) => {
    const hamburger = document.querySelector(hamburgerSelector),
          menu = document.querySelector(menuSelector),
          overlay = document.querySelector(overlaySelector);

    const toggleMenu = () => {
        hamburger.classList.toggle(hamburgerActive);
        menu.classList.toggle(menuActive);
        overlay.classList.toggle(overlayActive);
    };

    hamburger.addEventListener('click', toggleMenu);
    
    
};

export default menu;