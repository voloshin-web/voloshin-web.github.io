export default function search(searchSelector) {
    const searchBtn = document.querySelector(searchSelector);

    searchBtn.addEventListener('click', toogleSearchForm);

    function toogleSearchForm() {
        document.querySelector('.logo').classList.toggle('logo_active');
        document.querySelector('.menu').classList.toggle('menu_active');
        document.querySelector('.search__form').classList.toggle('search__form_active');

        if (document.querySelector('.search__form_active')) {
            searchBtn.querySelector('img').setAttribute('src', 'img/times.svg');
            document.querySelector('.search__form_active input').value = '';
        } else {
            searchBtn.querySelector('img').setAttribute('src', 'img/header/search.svg');
        }
    }
}