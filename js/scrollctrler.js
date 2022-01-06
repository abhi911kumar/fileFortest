$(document).ready(function () {

    $('.centerDiv').on('init', function (event, slick, currentSlide, nextSlide) {

        $(".ProducerName").text($(slick.$slides.get(currentSlide)).attr("data-producerMessage"));

    });

    $('.centerDiv').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        if ($(slick.$slides.get(nextSlide)).hasClass('video-slide')) {
            $('.centerDiv').slick('slickPause');
            myVideo.play();

            document.getElementById('myVideo').addEventListener('ended', myHandler, false);

        }

        var footerMessage = $(slick.$slides.get(nextSlide)).attr("data-producerMessage");
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


    });


    function myHandler(e) {
        $('.centerDiv').slick('slickPlay');
    }
   

    $(function () {
        setInterval(function () {
            $(".maxHeight_238").height((($(window).height() - ($("#topNav").height() + $(".bg-top").height() + ($(".product_title").height() + $(".product_desc").height()) * 2))) - 90);
            //$(".single-row").css('padding-top',(($(window).height() - (($(".product_title").height() + $(".product_desc").height()) * 2))-40);
            $(".minHeight_225").height($(".product_image").height());
        }, 2000);
    })

    //Time based functionality

    var dates = {
        convert: function (d) {
            // Converts the date in d to a date-object. The input can be:
            //   a date object: returned without modification
            //  an array      : Interpreted as [year,month,day]. NOTE: month is 0-11.
            //   a number     : Interpreted as number of milliseconds
            //                  since 1 Jan 1970 (a timestamp) 
            //   a string     : Any format supported by the javascript engine, like
            //                  "YYYY/MM/DD", "MM/DD/YYYY", "Jan 31 2009" etc.
            //  an object     : Interpreted as an object with year, month and date
            //                  attributes.  **NOTE** month is 0-11.
            return (
                d.constructor === Date ? d :
                    d.constructor === Array ? new Date(d[0], d[1], d[2]) :
                        d.constructor === Number ? new Date(d) :
                            d.constructor === String ? new Date(d) :
                                typeof d === "object" ? new Date(d.year, d.month, d.date) :
                                    NaN
            );
        },
        compare: function (a, b) {
            // Compare two dates (could be of any type supported by the convert
            // function above) and returns:
            //  -1 : if a < b
            //   0 : if a = b
            //   1 : if a > b
            // NaN : if a or b is an illegal date
            // NOTE: The code inside isFinite does an assignment (=).
            return (
                isFinite(a = this.convert(a).valueOf()) &&
                    isFinite(b = this.convert(b).valueOf()) ?
                    (a > b) - (a < b) :
                    NaN
            );
        },
        inRange: function (d, start, end) {
            // Checks if date in d is between dates in start and end.
            // Returns a boolean or NaN:
            //    true  : if d is between start and end (inclusive)
            //    false : if d is before start or after end
            //    NaN   : if one or more of the dates is illegal.
            // NOTE: The code inside isFinite does an assignment (=).
            return (
                isFinite(d = this.convert(d).valueOf()) &&
                    isFinite(start = this.convert(start).valueOf()) &&
                    isFinite(end = this.convert(end).valueOf()) ?
                    start <= d && d <= end :
                    NaN
            );
        }
    }
    //Date Format mm/dd/yyyy
    // This setting is only for Mamatha Ma'ams system.
   

    function calendarEvent(arr) {
        if (arr != null) {
            if (arr.length > 0) {
                for (var i = 0; i < arr.length; i++) {
                    var date = arr[i];
                    var startDate = new Date(Date.parse(date.startDate));
                    var endDate = new Date(Date.parse(date.endDate));
                    var newDate = new Date();
                    var isInRange = dates.inRange(newDate, startDate, endDate);

                    if (isInRange) {
                        filterSlider("." + date.className + ",");
                        break;
                    }
                    else if (i + 1 === arr.length) {
                        filterSlider("");
                    }
                }
            }
        }
    }

    var currentFilterClass = null;

    var filterSlider = function (filterClassName) {
        if (currentFilterClass != filterClassName) {
            $('.centerDiv').slick('slickUnfilter');
            $('.centerDiv').slick('slickFilter', filterClassName + '.alltime');
            //$('.centerDiv').slick("slickGoTo", 0);
            currentFilterClass = filterClassName;
        }
    };

    setInterval(function () {
     // calendarEvent(timeChangeData);
    }, 2000);
})
