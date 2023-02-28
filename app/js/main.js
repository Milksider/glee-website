$(function(){
    $('.top-slider__content').slick({
        dots: true,
        arrows: false
    });

    var mixer = mixitup('.products__content');

    $('.products__menu-btn').on('hover', function(){
        $('.products__menu-btn').toggleClass('products__menu-btn--active');
    }
    );
});