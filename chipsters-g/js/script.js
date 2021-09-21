
$(document).ready(function() {
    $('#pagepiling').pagepiling({
        direction: 'vertical',
        scrollingSpeed: 200,
        anchors: ['section1', 'section2', 'section3', 'section4'],
        navigation: false,
        afterLoad: function(anchorLink, index) {
            if (index == 2) {
                document.querySelector('.sign-up__wrapper .content__title').classList.add('animate__animated', 'animate__heartBeat');
                document.querySelector('.sign-up__wrapper .chips__wrapper .chips_1').classList.add('animate__animated', 'animate__bounceInUp');
                document.querySelector('.sign-up__wrapper .chips__wrapper .chips_2').classList.add('animate__animated', 'animate__bounceInUp');
                document.querySelector('.sign-up__wrapper .chips__wrapper .chips_3').classList.add('animate__animated', 'animate__bounceInUp');
                document.querySelector('.sign-up__wrapper .chips__wrapper .chips_4').classList.add('animate__animated', 'animate__bounceInUp');

            }
            if (index == 3) {
                document.querySelector('.new-chipsters .head-wrap .subtitle').classList.add('animate__animated', 'animate__heartBeat');
                document.querySelector('.new-chipsters .chips_1').classList.add('animate__animated', 'animate__backInLeft');
                document.querySelector('.new-chipsters .chips_2').classList.add('animate__animated', 'animate__backInLeft');
                document.querySelector('.new-chipsters .chips_3').classList.add('animate__animated', 'animate__backInRight');
                document.querySelector('.new-chipsters .chips_4').classList.add('animate__animated', 'animate__backInRight');
                document.querySelector('.new-chipsters .chips_5').classList.add('animate__animated', 'animate__backInLeft');
                document.querySelector('.new-chipsters .chips__bg').classList.add('animate__animated', 'animate__tada');
            }
        }
    });


    // paralax menu
    if(document.documentElement.clientWidth > 1024) {
        document.addEventListener('mousemove', parallax );
        function parallax (e) {
            this.querySelectorAll('.parallax-layer').forEach(layer => {
                const speed = layer.getAttribute('data-speed');
                const x = (e.clientX * speed) / 100;
                const y = (e.clientY * speed) / 100;

                layer.style.transform = `translateX(${x}px) translateY(${y}px)`
            });
        }
    }

    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    let vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    // document.querySelector('.sign-up .sign-up__wrapper .content').style.setProperty('margin-top', `-${vh}px`, 'important');
    // content

    const tastes = document.querySelectorAll('.gums__list .gums__item'),
          sectionTastes = document.querySelectorAll('.sign-up__block');


    function showActive(i) {
        const count = i + 1;

        sectionTastes.forEach((section) => {
            section.classList.remove('active');
        });
        sectionTastes[count].classList.add('active');

        $.fn.pagepiling.moveSectionDown();
    } 
    
    tastes.forEach((taste, i) => {
        taste.addEventListener('click', () => {
            const target = i;

            showActive(target);
        });
    });

    // Mobile? 

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
        document.querySelector('.video video').setAttribute('poster', 'img/video.png');
    } 
});