$(function(){
    $('.top-slider__content').slick({
        dots: true,
        arrows: false
    });

    var mixer = mixitup('.products__content');

    var mixer2 = mixitup('.design__items')

    $('.filter-btn').on('hover', function(){
        $('.filter-btn').toggleClass('filter-btn--active');
    }
    );
});