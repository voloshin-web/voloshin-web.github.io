const cardButton = document.querySelector('.others-bloggers__btn'),
      cardItems = document.querySelector('.others-bloggers__cards');


if (cardButton != null || cardButton != undefined) {
  cardButton.addEventListener('click', ()=>{
    cardButton.classList.add('others-bloggers__btn--hidden');
    cardItems.classList.add('others-bloggers__cards--active');
  });
}

