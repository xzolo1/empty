export default {
    init() {
        this.slider();
    },

    slider() {
        var menuBtn = document.querySelector('.header__menu-wrapper-contact-mobile');
        var body = document.querySelector('body');
        var menuMobile = document.querySelector('.header__menu-mobile');

        menuBtn.addEventListener('click', function () {
            body.classList.toggle('menu__overflow');
            menuMobile.classList.toggle('menu__open');
            menuBtn.classList.toggle('menu__close');

        });

//form

        var form = document.querySelector('.body-form__wrapper-form');
        var formName = form.querySelector('.body-form__wrapper-form-name');
        var formTel = form.querySelector('.body-form__wrapper-form-tel');
        var formMail = form.querySelector('.body-form__wrapper-form-mail');
        var fields  = form.getElementsByClassName("form-control");

        form.addEventListener("submit", function () {
            event.preventDefault();

            for (let i = 0; i < fields.length; i++) {
                if (!fields[i].value || fields[i].value === "Обязательное поле") {
                    fields[i].style.color = "red";
                    fields[i].value = "Обязательное поле";
                } else {
                    break;
                }
            }
        });

//clear form

        formName.addEventListener("click", function () {
            if (formName.value === "Обязательное поле") {
                formName.value = "";
                formName.style.color = "";
            }
        });
        formTel.addEventListener("click", function () {
            if (formTel.value === "Обязательное поле") {
                formTel.value = "";
                formTel.style.color = "";
            }
        });
        formMail.addEventListener("click", function () {
            if (formMail.value === "Обязательное поле") {
                formMail.value = "";
                formMail.style.color = "";
            }
        });

//slide

        let slideNow = 1;
        let translateWidth = 0;
        let slideCount = document.querySelectorAll('.body-slide__container-wrapper-item').length;
        let slideNext = document.querySelector('.body-slide__container-btn-next');
        let slidePrev = document.querySelector('.body-slide__container-btn-prev')

        slideNext.addEventListener('click', function () {
            nextSlide();
            slideNow++;
        })

        slidePrev.addEventListener('click', function () {
            slideNow--;
            prevSlide();
        })
        function nextSlide() {
            document.querySelectorAll('.body-slide__container-wrapper-item').forEach(
                function (slide) {
                    if (slideNow === slideCount  || slideNow < 1 || slideNow > slideCount - 3) {
                        slide.style = "transform: translate(0, 0)";
                        slideNow = 0;
                    } else {
                        translateWidth = -slide.offsetWidth * slideNow - (8 * slideNow);
                        slide.style = "transform: translate(" + translateWidth + "px, 0)";
                    }
                });

        }

        function prevSlide() {
            document.querySelectorAll('.body-slide__container-wrapper-item').forEach(
                function (slide) {

                    if ( slideNow <= 1) {
                        slide.style = "transform: translate(0, 0)";
                        slideNow = 1;
                    } else {
                        translateWidth = -slide.offsetWidth * (slideNow - 1) - (8 * (slideNow - 1));
                        slide.style = "transform: translate(" + translateWidth + "px, 0)";
                    }
                });

        }

//slide second

        let slideNowTeams = 1;
        let translateWidthTeams = 0;
        let slideCountTeams = document.querySelectorAll('.body-slide__teams-container-wrapper-item').length;
        let slideNextTeams = document.querySelector('.body-slide__teams-container-btn-next');
        let slidePrevTeams = document.querySelector('.body-slide__teams-container-btn-prev')

        slideNextTeams.addEventListener('click', function () {
            nextSlideTeams();
            slideNowTeams++;
        })

        slidePrevTeams.addEventListener('click', function () {
            slideNowTeams--;
            prevSlideTeams();
        })

        function nextSlideTeams() {
            document.querySelectorAll('.body-slide__teams-container-wrapper-item').forEach(
                function (slideTeams) {
                    if (slideNowTeams === slideCountTeams  || slideNowTeams < 1 || slideNowTeams > slideCountTeams - 4) {
                        slideTeams.style = "transform: translate(0, 0)";
                        slideNowTeams = 0;
                    } else {
                        translateWidthTeams = -slideTeams.offsetWidth * slideNowTeams - (8 * slideNowTeams);
                        slideTeams.style = "transform: translate(" + translateWidthTeams + "px, 0)";
                    }
                });

        }

        function prevSlideTeams() {
            document.querySelectorAll('.body-slide__teams-container-wrapper-item').forEach(
                function (slideTeams) {

                    if ( slideNowTeams <= 1) {
                        slideTeams.style = "transform: translate(0, 0)";
                        slideNowTeams = 1;
                    } else {
                        translateWidthTeams = -slideTeams.offsetWidth * (slideNowTeams - 1) - (8 * (slideNowTeams - 1));
                        slideTeams.style = "transform: translate(" + translateWidthTeams + "px, 0)";
                    }
                });

        }
    },



}