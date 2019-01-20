$(function () {

    var stockSwiper = new Swiper($("#stocks"), {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: $("#stocks .swiper-pagination"),
            clickable: true,
        },
        navigation: {
            nextEl: $("#stocks .swiper-button-next"),
            prevEl: $("#stocks .swiper-button-prev"),
        },
    })

    var service = $('.services .service')
    service.hover( function () {
        $(this).find('i').animate({opacity: 1});
        $(this).find('.content').animate({opacity: 0});
    },
    function () {
        $(this).find('i').animate({opacity: 0});
        $(this).find('.content').animate({opacity: 1});
    })


})