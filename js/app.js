
//Função que realiza a animação de slide da div menuBurgerMobile ao clicar no menu hamburguer
const menuBurgerToggle = () =>{

    const menuBurgerMobile = document.querySelector('.menuBurgerMobile');
    const burgerLinksMobile = document.querySelector('.burgerLinksMobile');
    const burgerLine1 = document.querySelector('.lineBurger1');
    const burgerLine2 = document.querySelector('.lineBurger2');
    const burgerLine3 = document.querySelector('.lineBurger3');
    const btnBurger = document.querySelector('.btnBurger');

    btnBurger.classList.toggle('btnBurgerActive')
    menuBurgerMobile.classList.toggle('menuBurgerActive');
    burgerLinksMobile.classList.toggle('navLinksMobileActive');
    burgerLine1.classList.toggle('lineBurger1Active');
    burgerLine2.classList.toggle('lineBurger2Active');
    burgerLine3.classList.toggle('lineBurger3Active');

}

//Função que recebe o click do usuário para efetuar a animação de slide do menuBurgerMobile
const burgerSlide = () =>{

    const btnBurger = document.querySelector('.btnBurger');

    btnBurger.addEventListener('click', () => {

        menuBurgerToggle();

    });


}

//Função que realiza a animação de slide da div com a classe serviceList ao clicar na seta do item Serviços no menu Mobile
const serviceSlide = () =>{

    const buttonSlide = document.querySelector('.serviceSlide');
    const serviceList = document.querySelector('.serviceList')

    buttonSlide.addEventListener('click', () => {

        serviceList.classList.toggle('serviceListActive');
        buttonSlide.classList.toggle('serviceSlideActive')

    });


}

//Função que realiza a animação de slide da div com a classe difList ao clicar na seta do item Diferencias no menu Mobile
const difSlide = () =>{

    const buttonSlide = document.querySelector('.difSlide');
    const difList = document.querySelector('.difList')

    buttonSlide.addEventListener('click', () => {

        difList.classList.toggle('difListActive');
        buttonSlide.classList.toggle('difSlideActive')

    });


}

//Função que identifica a posição do elemento retornando sua posição top e left
function getPosition(el) {

    var rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }

}

//Função que verifica se a posição da janela em relação ao topo é zero, se for maior que isto realiza uma animação de transição na Navbar Web
//Não afeta a Navbar no Mobile
const navBarTransition = () =>{

    const navBar = document.querySelector('.navBar');

    if(window.scrollY > 0){

        navBar.classList.add('navBarActive');

    }else{

        navBar.classList.remove('navBarActive');

    }

}

//Função que verifica se a posição da janela em relação ao topo é zero, se for maior que isto realiza uma animação de transição no botão de voltar ao topo da página
const scrollToTopTransition = () =>{

    const scrollToTopBtn = document.querySelector('.backToTop');

    if(window.scrollY > 0){

        scrollToTopBtn.classList.add('backToTopActive');

    }else{

        scrollToTopBtn.classList.remove('backToTopActive');

    }

}

/*
    Função que verifica se a posição do topo da janela está próxima a topo da Section 2,
    se sim, será efetuada a animação de transição da Section 2
*/
const s2Transition = () =>{

    const s2 = document.querySelector('.s2');
    const s2Position = getPosition(s2);
    const s2OffsetTop = s2Position.top - (s2Position.top / 3);

    if(s2OffsetTop < window.scrollY){

        s2.classList.add('s2Active');

    }

}

/*
    Função que verifica se a posição do topo da janela está próxima a topo da Section 3,
    se sim, será efetuada a animação de transição da Section 3
*/
const s3Transition = () =>{

    const s3 = document.querySelector('.s3');
    const s3Position = getPosition(s3);
    const s3OffsetTop = s3Position.top - (s3Position.top / 4);

    if(s3OffsetTop < window.scrollY){

        s3.classList.add('s3Active');

    }

}

/*
    Função que verifica se a posição do topo da janela está próxima a topo da Section 4,
    se sim, será efetuada a animação de transição da Section 4
*/
const s4Transition = () =>{

    const s4 = document.querySelector('.s4');
    const s4Position = getPosition(s4);
    const s4OffsetTop = s4Position.top - (s4Position.top / 5);

    if(s4OffsetTop < window.scrollY){

        s4.classList.add('s4Active');

    }

}

/*
    Função que verifica a posição do scroll e realiza as devidas transições
*/
const scrollTrigger = () =>{

    window.addEventListener('scroll', () => {

        navBarTransition();
        s2Transition();
        s3Transition();
        s4Transition();
        scrollToTopTransition();

    });

}

//Função que ao receber um click no elemento com a classe toS2, rola a página até a Section 2 nas dimensões Web
const scrollToS2 = () =>{

    const buttonToS2 = document.querySelector('.toS2');
    const s2 = document.querySelector('.s2');

    buttonToS2.addEventListener('click', function (event) {
        event.preventDefault;
        s2.scrollIntoView({ behavior: 'smooth' });
    });

}

//Função que ao receber um click no elemento com a classe toS3, rola a página até a Section 3 nas dimensões Web
const scrollToS3 = () =>{

    const buttonToS3 = document.querySelector('.toS3');
    const s3 = document.querySelector('.s3');

    buttonToS3.addEventListener('click', function (event) {
        event.preventDefault;
        s3.scrollIntoView({ behavior: 'smooth' });
    });

}

//Função que ao receber um click no elemento com a classe toS4, rola a página até a Section 4 nas dimensões Web
const scrollToS4 = () =>{

    const buttonToS4 = document.querySelector('.toS4');
    const s4 = document.querySelector('.s4');

    buttonToS4.addEventListener('click', function (event) {
        event.preventDefault;
        s4.scrollIntoView({ behavior: 'smooth' });
    });

}

//Função que ao receber um click no elemento com a classe toS5 ou no elemento com o id btnContact, rola a página até a Section 5 nas dimensões Web
const scrollToS5 = () =>{

    const buttonToS5Main = document.querySelector('#btnContact');
    const buttonToS5 = document.querySelector('.toS5');
    const s5 = document.querySelector('.s5');

    buttonToS5Main.addEventListener('click', function (event) {
        event.preventDefault;
        s5.scrollIntoView({ behavior: 'smooth' });
    });
    
    buttonToS5.addEventListener('click', function (event) {
        event.preventDefault;
        s5.scrollIntoView({ behavior: 'smooth' });
    });

}

//Função que ao receber um click no elemento com a classe toS2Mobile, rola a página até a Section 2 nas dimensões Mobile
const scrollToS2Mobile = () =>{

    const buttonToS2 = document.querySelector('.toS2Mobile');
    const s2 = document.querySelector('.s2');

    buttonToS2.addEventListener('click', function (event) {
        event.preventDefault;
        s2.scrollIntoView({ behavior: 'smooth' });
        menuBurgerToggle();
    });

}

//Função que ao receber um click no elemento com a classe toS3Mobile, rola a página até a Section 3 nas dimensões Mobile
const scrollToS3Mobile = () =>{

    const buttonToS3 = document.querySelector('.toS3Mobile');
    const s3 = document.querySelector('.s3');

    buttonToS3.addEventListener('click', function (event) {
        event.preventDefault;
        s3.scrollIntoView({ behavior: 'smooth' })
        menuBurgerToggle();
    });

}

//Função que ao receber um click no elemento com a classe toS4Mobile, rola a página até a Section 4 nas dimensões Mobile
const scrollToS4Mobile = () =>{

    const buttonToS4 = document.querySelector('.toS4Mobile');
    const s4 = document.querySelector('.s4');

    buttonToS4.addEventListener('click', function (event) {
        event.preventDefault;
        s4.scrollIntoView({ behavior: 'smooth' })
        menuBurgerToggle();
    });

}

//Função que ao receber um click no elemento com a classe toS5Mobile, rola a página até a Section 5 nas dimensões Mobile
const scrollToS5Mobile = () =>{

    const buttonToS5 = document.querySelector('.toS5Mobile');
    const s5 = document.querySelector('.s5');

    buttonToS5.addEventListener('click', function (event) {
        event.preventDefault;
        s5.scrollIntoView({ behavior: 'smooth' })
        menuBurgerToggle();
    });

}

//Função que ao receber um click no elemento com a classe backToTop, rola a página até o topo independente das dimensões Web/Mobile
const scrollToTop = () =>{

    const scrollToTopBtn = document.querySelector('.backToTop')

    scrollToTopBtn.addEventListener('click', () =>{

        window.scrollTo({

            top: 0,
            left: 0,
            behavior: 'smooth'

        });

    });

}

burgerSlide();

serviceSlide();

difSlide();

scrollToS2();

scrollToS3();

scrollToS4();

scrollToS5();

scrollToS2Mobile();

scrollToS3Mobile();

scrollToS4Mobile();

scrollToS5Mobile();

scrollTrigger();

scrollToTop();