const showMore = () => {
    const textMore = document.querySelector('#more'),
    showBtn = document.querySelector('.show');

    if (textMore && showBtn) {
        showBtn.addEventListener('click', showMore);
    }

    function showMore() {
        if (textMore.style.display === 'block') {
            textMore.style.display = 'none';
            showBtn.innerHTML = 'Показать еще';
        } else {
            textMore.style.display = 'block';
            showBtn.innerHTML = 'Скрыть';
        }
    }

};

export default showMore;