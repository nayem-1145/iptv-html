(function($){


    var heroSlider = new Swiper(".ip_hero_slider", {
        effect: "cards",
        grabCursor: true,
        initialSlide: 1,
    });
    

    var SerisSlider = new Swiper(".ip_series_slider.slider_ltr", {
        slidesPerView: 'auto',
        spaceBetween: 24,
        loop: true,
        speed: 3000,
        autoplay: {
            delay: 0,
            enabled: true,
        }
    });

    var SeriesSliderRtl = new Swiper(".ip_series_slider.slider_rtl", {
        slidesPerView: 'auto',
        spaceBetween: 24,
        loop: true,
        speed: 3000,
        autoplay: {
            delay: 0,
            enabled: true,
        }
    });
    var BrandSlider = new Swiper(".ip_brand_slider", {
        slidesPerView: 'auto',
        spaceBetween: 32,
        loop: true,
        speed: 3000,
        autoplay: {
            delay: 0,
            enabled: true,
        }
    });



})(jQuery)


