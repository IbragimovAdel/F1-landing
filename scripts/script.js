$(function () {  

    $(".navbar-nav .nav-link").on("click", function () {
        $(".navbar-nav").find(".active").removeClass("active");
        $(this).addClass("active");
    });

    $('.nav-link, .swiper-slide a').on('click',function(e){
        e.preventDefault();
        var id = $(this).attr('href');
        var top = $(id).offset().top;
        $('html,body').animate({scrollTop: top}, 750);
        return false;
    })


    var stockSwiper = new Swiper($("#stocks"), {
        slidesPerView: 1,
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
            nextEl: $(".stocks-row .swiper-button-next-mine"),
            prevEl: $(".stocks-row .swiper-button-prev-mine"),
        },
    });

    var himSwiper = new Swiper($("#him"), {
        slidesPerView: 3,
        spaceBetween: 50,
        slidesPerGroup: 3,
        pagination: {
            el: '#him .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.him-items .swiper-button-next-mine',
            prevEl: '.him-items .swiper-button-prev-mine',
        },
        breakpoints: {
            640: {
                slidesPerView: 1,
                slidesPerGroup: 1
            },
            800: {
                slidesPerView: 1,
                slidesPerGroup: 1
            },
            960: {
                slidesPerView: 1,
                slidesPerGroup: 1
            }
        }
    });

    $('#timer').countdown("2019/02/01", function(e) {
        $('#timer .days').text(e.strftime('%w')*7+Number(e.strftime('%d')));
        $('#timer .hrs').text(e.strftime('%H'));
        $('#timer .mins').text(e.strftime('%M'));
        $('#timer .secs').text(e.strftime('%S'));
      });

    $('#service1modal').on('shown.bs.modal', function () {
        himSwiper.update();
    })

    $("#phone").mask('+7 (999) 999-99-99')
})