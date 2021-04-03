export default function menu(hamburgerSelector, menuSelector, hamburgerActive, menuActive) {
    const menuOpen = document.querySelector(hamburgerSelector),
    menu = document.querySelector(menuSelector);

    menuOpen.addEventListener('click', open);

    function open() {
        menuOpen.classList.toggle(hamburgerActive);
        menu.classList.toggle(menuActive);
    }
}


