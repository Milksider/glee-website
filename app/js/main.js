$(function(){
    
    $('.shop__content-btn').on('click', function (){
        $('.shop__content-btn').removeClass('shop__content-btn--active');
        $(this).addClass('shop__content-btn--active');
    });
    $('.button-list').on('click', function(){
        $('.product-item').addClass('product-item--list');
    });

    $('.button-grid').on('click', function(){
        $('.product__content-item').removeClass('product__content-item--list');
    });

    $('.star').rateYo({
        starWidth: "17px",
        normalFill: "#ccccce",
        ratedFill: "#ffc35d",
        readOnly: true,
    });

    $('.filter-price__input').ionRangeSlider({
        type: "double",
        prefix: "$",
        min: "0",
        max: "600",
        from: "100",
        to: "500",
        onChange: function (data){
            $('.filter-price__from').text("$" + data.from),
            $('.filter-price__to').text("$" + data.to);
        },
        onStart: function (data){
            $('.filter-price__from').text("$" + data.from),
            $('.filter-price__to').text("$" + data.to);
        },
    });

    $('.top-slider__content').slick({
        dots: true,
        arrows: false
    });

    var mixer = mixitup('.products__content');

    var mixer2 = mixitup('.design__items');

    $('.filter-btn').on('hover', function(){
        $('.filter-btn').toggleClass('filter-btn--active');
    }
    );

});

