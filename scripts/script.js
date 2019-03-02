$(function () {

    $(".navbar-nav .nav-link").on("click", function () {
        $(".navbar-nav").find(".active").removeClass("active");
        $(this).addClass("active");
    });

    $('.nav-link, .about a').on('click', function (e) {
        e.preventDefault();
        var id = $(this).attr('href');
        sliding(id);
    })

    function sliding(id) {
        var top = $(id).offset().top;
        $('html,body').animate({ scrollTop: top }, 750);
        return false;
    }

    $('[data-toggle="tooltip"]').tooltip()

    var stockSwiper = new Swiper($("#stocks"), {
        slidesPerView: 1,
        spaceBetween: 0,
        centeredSlides: true,
        loop: true,
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

    $('#timer').countdown("2019/03/01", function (e) {
        $('#timer .days').text(e.strftime('%w') * 7 + Number(e.strftime('%d')));
        $('#timer .hrs').text(e.strftime('%H'));
        $('#timer .mins').text(e.strftime('%M'));
        $('#timer .secs').text(e.strftime('%S'));
    });

    $('#service1modal').on('shown.bs.modal', function () {
    })
    $('#service2modal').on('shown.bs.modal', function () {
    });
    $('#service5modal').on('shown.bs.modal', function () {
    });

    $('.collapse').on('show.bs.collapse', function (e) {
        $('.collapse').collapse("hide")
    })

    $('#formModal').on('shown.bs.modal', function () {
        $("#formModal #phone").mask('+7 (999) 999-99-99')
    })

    var devSlider1 = $("#device-slider-1");
    devSlider1.on('afterChange', function (slick, currentSlide) {
        $('.device-slider-1-pagination .current').text(devSlider1.slick('slickCurrentSlide') + 1);
    })
    devSlider1.slick({
        prevArrow: $('#device-slider-1-left'),
        nextArrow: $('#device-slider-1-right'),
    });

    var devSlider2 = $("#device-slider-2");
    devSlider2.on('afterChange', function (slick, currentSlide) {
        $('.device-slider-2-pagination .current').text(devSlider2.slick('slickCurrentSlide') + 1);
    })
    devSlider2.slick({
        prevArrow: $('#device-slider-2-left'),
        nextArrow: $('#device-slider-2-right'),
    });

    var devSlider3 = $("#device-slider-3");
    devSlider3.on('afterChange', function (slick, currentSlide) {
        $('.device-slider-3-pagination .current').text(devSlider3.slick('slickCurrentSlide') + 1);
    })
    devSlider3.slick({
        prevArrow: $('#device-slider-3-left'),
        nextArrow: $('#device-slider-3-right'),
    });

    var photoSlider = $("#photo-slider");
    photoSlider.slick({
        arrows: false,
        asNavFor: photoSliderNav,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
    });
    var photoSliderNav = $("#photo-slider-nav");
    photoSliderNav.slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: photoSlider,
        centerMode: true,
        nextArrow: $("#photo-slider-right"),
        prevArrow: $("#photo-slider-left"),
        centerPadding: 0,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                }
            }
        ]
    });

    var basket = $('#basket')
    var order = []
    var size = 0
    $(".order-btn").on('click', function () {
        var name = $(this).data('name')
        order.push(name)
        if ($(this).attr('class').includes('order-btn')) alert("Успешно добавлено в корзину")

        var deleteBtn = $("<i class=\"fas fa-minus mx-3 p-1 basketDeleteBtn\">")

        var res = $("<li class=\"my-3\">");
        res.append("<span>" + name + "</span>");
        res.append(deleteBtn);
        basket.append(res);

        $(".basketDeleteBtn").off();

        if (size == 0) $('#basketOrderBtn').prop('disabled', false)
        size++

        $(".basketDeleteBtn").on('click', function () {
            if (size == 1) {
                order.pop();
                $(this).parent().remove();
                $('#basketOrderBtn').prop('disabled', true)
                size--
            }
            else {
                order.splice(order.indexOf($(this).prev().text()), 1)
                $(this).parent().remove();
                size--
            }
        });
    })

    $("#basketOrderBtn").on('click', function () {
    })

    ymaps.ready(init);
    function init() {
        var map = new ymaps.Map("map", {
            center: [55.772046, 49.216368],
            zoom: 18,
        })

        var mark = new ymaps.Placemark([55.772046, 49.216368], {
            hintContent: 'Первая скоростная автомойка Ф1',
        })

        map.geoObjects.add(mark);
    }

    $('form').on('submit', function (e) {
        $(this).find("#order-input").val(order.toString());
    })

    $('#basketOrderBtn').on('click', function () {
        $('#basketModal').modal('hide');
        sliding("#form");
    })

    $("#phone").mask('+7 (999) 999-99-99')
})