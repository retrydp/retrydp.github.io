$('.slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    arrows: true,
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
});

$('.recent_slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    dotsClass: 'recent_dots',
});
$('.huge_slider').slick({
    dots: false,
    infinite: false,
    speed: 300,
    draggable: false,
    slidesToShow: 3,
    adaptiveHeight: true,
    arrows: true,
    autoplay: false,
    prevArrow: $('.h_prev'),
    nextArrow: $('.h_next'),
    });
