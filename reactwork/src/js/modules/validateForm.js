import JustValidate from './just-validate.min.js';

const validateForm = () => {
    const forms = document.querySelectorAll('.form');


    let validateFroms = function(selector, rules) {
        new window.JustValidate(selector, {
            rules: rules,
            messages: {
                name: {
                    minLength: 'Введите корректную длинну символов',
                    maxLength: 'Введите корректную длинну символов',
                    required: 'Вам нужно ввести данные'
                },
                tel: {
                    required: 'Вам нужно ввести данные'
                }
              },
            submitHandler: function(form) {
                console.log('Data has been sent.');
                
                const modal = document.createElement('div');
                modal.classList.add('popUp');
                modal.innerHTML = `
                    <div class='popUp__title'>Спасибо!</div>
                    <div class='popUp__descr'>Мы скоро с Вами свяжемся &#128512</div>
                `;

                document.body.appendChild(modal);

                form.reset();

                setTimeout(() => {
                    document.body.removeChild(modal);
                }, 2000);
            }
        });
    }

    validateFroms(
        '.opportunities .form', 
        {tel: {required: true}, name: {required: true, minLength: 3, maxLength: 15}}
    );

    validateFroms(
        '.info .form', 
        {tel: {required: true}, name: {required: true, minLength: 3, maxLength: 15}} 
    );
  

    // function popUp() {
    //     const modal = document.querySelector('.popUp');
    //     modal.style.display = 'flex';

    //     setTimeout(() => {
    //         modal.style.display = 'none';
    //     }, 2500);
    // }
};

export default validateForm;