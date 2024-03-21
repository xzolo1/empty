import header from "./header/header.js";
import parallax from "./parallax/parallax.js"

$(document).ready(function () {
    parallax.init();
    header.init();
    prallaxBtn();
    function prallaxBtn() {
        $('.button').click(function(e) {
            e.preventDefault();
            var url = $(this).attr('href');
            console.log(url);
            $('#content').load(url);
        });
    }
});