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

    $("#phone").mask('+7 (999) 999-99-99')
})