export default {
    init() {
        this.parallax();

    },

    parallax() {
        $(document).scroll(function() {
            let value = $(this).scrollTop();
            $('.parallax__wrapper-title').css('margin-top', value * 1.1 + 'px');
            $('.parallax__wrapper-leaf1').css('margin-left', -value + 'px');
            $('.parallax__wrapper-leaf2').css('margin-left', value + 'px');
            $('.parallax__wrapper-bush2').css('margin-bottom', -value + 'px');
            $('.parallax__wrapper-mount1').css('margin-bottom', -value * 1.1 + 'px');
            $('.parallax__wrapper-mount2').css('margin-bottom', -value * 1.2 + 'px');
        });
    },

}