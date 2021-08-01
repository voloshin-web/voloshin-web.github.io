const cardButton = document.querySelector('.others-bloggers__btn'),
      cardItems = document.querySelector('.others-bloggers__cards');


if (cardButton != null || cardButton != undefined) {
  cardButton.addEventListener('click', ()=>{
    cardButton.classList.add('others-bloggers__btn--hidden');
    cardItems.classList.add('others-bloggers__cards--active');
  });
}

function ibg(){
  let ibg=document.querySelectorAll(".hero-content__img-block");
  for (var i = 0; i < ibg.length; i++) {
    if(ibg[i].querySelector('img')){
      ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
    }
  }
}
  
ibg();
