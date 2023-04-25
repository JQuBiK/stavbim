'use strict'

window.addEventListener('DOMContentLoaded', () => {
    

    //slider Brands
    $('.brands__slider').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        variableWidth: true,
        arrows: false,
        dotsClass: 'slick-dots brands__dots',
      });
    //Slider Works
    $('.works__slider').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        variableWidth: true,
        arrows: false,
        dotsClass: 'slick-dots works__dots',
      });
});