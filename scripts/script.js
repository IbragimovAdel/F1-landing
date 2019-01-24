$(function () {  

    $(".navbar-nav .nav-link").on("click", function () {
        $(".navbar-nav").find(".active").removeClass("active");
        $(this).addClass("active");
    });

    $('.nav-link').on('click',function(e){
        e.preventDefault();
        var id = $(this).attr('href');
        var top = $(id).offset().top;
        $('html,body').animate({scrollTop: top}, 750);
        return false;
    })


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
    });

    var himSwiper = new Swiper($("#him"), {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 3,
        pagination: {
            el: '#him .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '#him .swiper-button-next',
            prevEl: '#him .swiper-button-prev',
        },
        breakpoints: {
            640: {
                slidesPerView: 1
            }
        }
    });

    $('#service1modal').on('shown.bs.modal', function () {
        himSwiper.update();
    })

    $("#phone").mask('+7 (999) 999-99-99')
})