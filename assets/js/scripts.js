(function ($) {


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

    var PricingSlider = new Swiper(".ip_pricing_slider", {
        slidesPerView: 5,
        spaceBetween: 32,
        loop: true,
        speed: 3000,
        centeredSlides: true,
        slidesPerGroup: 2,
        pagination: {
            el: '.ip_slider_pagination',
            clickable: true,
        },
    });




    var testimonialSlider = new Swiper(".ip_testimonial_slider", {
        effect: "cards",
        
        grabCursor: true,
        initialSlide: 2,

        cardsEffect: {
            perSlideOffset: 10,
            perSlideRotate: 0,
            slideShadows: false,
        },
    });


    var postFeaturedSlider = new Swiper(".ip_featured_slider", {
        slidesPerView: 1,
        spaceBetween: 15,
        speed: 1000,
        autoplay: {
            delay: 3000,
            enabled: true,
            
        },

        pagination: {
            el: '.ip_slider_pagination',
            clickable: true,
        },
    });




})(jQuery)


