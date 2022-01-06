$(document).ready(function () {
    //setTimeout(function () {
    //    $(".centerDiv").slick({
    //        infinite: true,
    //        speed: 500,
    //        fade: true,
    //        cssEase: 'linear',
    //        autoplay: true
    //    });
    //}, 1000);


    var $carousel = $(".centerDiv").slick({
        infinite: true,
        speed: 1000,
        fade: true,
        cssEase: 'linear',
        autoplay: false,
        pauseOnHover: false,
        slidesToShow: 1,
        slidesToScroll: 1
    });

    var curTime = new Date();
    var hours = curTime.getHours();
    var min = curTime.getMinutes();
    $('.centerDiv').on('init', function (event, slick, currentSlide, nextSlide) {
        $(".ProducerName").text($(slick.$slides.get(currentSlide)).attr("data-producerMessage"));
        // menuType = $(slick.$slides.get(currentSlide)).attr("data-menuType");


        if (min > 53 && min <= 55) {
            $('.centerDiv').slick('slickUnfilter');
            $('.centerDiv').slick('slickFilter', '.AllDay');
        }
        else if (min > 55 && min <= 56) {
            $('.centerDiv').slick('slickUnfilter');
            $('.centerDiv').slick('slickFilter', '.dinner');
        }
    });





    //var checkMenuType = function () {
    //    var curTime = new Date();
    //    var hours = curTime.getHours();

    //    if (hours > 8 && hours < 11) {
    //        $carousel.slick('slickFilter', '.dinner');
    //    }

    //$(".centerDiv").slick('slickUnfilter');
    //if (hours > 8 && hours < 10) {
    //    $carousel.slick('slickFilter', '.break-fast');
    //    $carousel.slick('slickFilter', '.AllDay');
    //} else if (hours > 12 && hours < 15) {
    //    $carousel.slick('slickFilter', '.lunch');
    //    $carousel.slick('slickFilter', '.AllDay');
    //} else if (hours > 16 && hours < 18) {
    //    $carousel.slick('slickFilter', '.snacks');
    //    $carousel.slick('slickFilter', '.AllDay');
    //} else 
    //if (hours > 8 && hours < 10)
    //    $(".centerDiv").slick('slickFilter', '.dinner');
    //}

    //if (hours > 16 && hours < 18) {
    //    $carousel.slick('slickUnfilter');
    //    $carousel.slick('slickFilter', '.AllDay');
    //} else if (hours > 16 && hours < 18) {
    //    $carousel.slick('slickUnfilter');
    //    $carousel.slick('slickFilter', '.AllDay');
    //}
    //}





    var menuType = '';


    $('.centerDiv').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        var footerMessage = $(slick.$slides.get(nextSlide)).attr("data-producerMessage");
        //  menuType = $(slick.$slides.get(nextSlide)).attr("data-menuType");

        if (min > 53 && min <= 55) {
            $carousel.slick('slickUnfilter');
            $carousel.slick('slickFilter', '.AllDay');
        }
        else if (min > 55 && min <= 56) {
            $carousel.slick('slickUnfilter');
            $carousel.slick('slickFilter', '.dinner');
        }

        var stringLength = footerMessage.length;


        if (stringLength > 15) {
            //$("a.ProducerName").css('font-size', '15px');
            $("a.ProducerName").attr('style', 'font-size: 18px !important');
        } else {
            $("a.ProducerName").attr('style', 'font-size: 33px !important');
        }
        setTimeout(function () {
            $(".ProducerName").text($(slick.$slides.get(nextSlide)).attr("data-producerMessage"));
        }, 300);

        if ($(slick.$slides.get(nextSlide)).hasClass('video-slide')) {
            $('.centerDiv').slick('slickPause');
            waterVideo.play();
        }
    });

    document.getElementById('waterVideo').addEventListener('ended', myHandler, false);

    function myHandler(e) {
        $('.centerDiv').slick('slickPlay');
    }









})
