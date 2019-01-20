$(function(){

    var stockSwiper = new Swiper($("#stocks"),{
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
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      })

})