import header from "./header/header.js";
import parallax from "./parallax/parallax.js"

$(document).ready(function () {
    // parallax.init();
    //header.init();
    menu();
    $('#content').load('pages/main.html', function() {
        header.init();
    });
    function menu(){
        let menuBtn = $('.menu__nav-links');
        menuBtn.click(function (e){
            e.preventDefault();
            var url = $(this).attr('href');
            var page = $(this).attr('data-page');
            menuBtn.removeClass('active');
            $(this).addClass('active');

            if (url == '#') {
                return;
            }
            $('#content').load(url, function() {
                switch (page) {
                    case 'main':
                        header.init();
                        break;
                    case 'parallax':
                        parallax.init();
                        break;
                }
            });

        });
    }
});

