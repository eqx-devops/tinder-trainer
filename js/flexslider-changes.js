$('.flexslider').flexslider({
    animation: "slide",
    slideshow: false,
    animationLoop: false,
    directionNav: true,
    slideToStart: 0,
    slideshowSpeed: 1000,
        prevText: "Back",           //String: Set the text for the "previous" directionNav item
    nextText: "Next",
    start: function(slider) {
        $('a.slide_thumb').click(function() {
            $('.flexslider').show();
            var slideTo = $(this).attr("rel")//Grab rel value from link;
            var slideToInt = parseInt(slideTo)//Make sure that this value is an integer;
            if (slider.currentSlide != slideToInt) {
                slider.flexAnimate(slideToInt)//move the slider to the correct slide  (Unless the slider is also already showing the slide we want);
            }
        });
    }
});