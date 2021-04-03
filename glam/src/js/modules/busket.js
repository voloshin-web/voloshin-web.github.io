export default function busket() {
    const cartBtn = document.querySelector('.busket'),
    cart = document.querySelector('.shopping');

    cartBtn.addEventListener('click', shoppingCart);

    function shoppingCart() {
        cart.classList.toggle('shopping_active');
    }
}

