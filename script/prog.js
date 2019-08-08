
$(document).ready(function(){
    $('#slider-works').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        prevArrow: $('.main-works-right'),
        nextArrow: $('.main-works-left'),
        dots: true,
        arrows: true
    });
    $('#slider-team').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: $('.main-team-right'),
        nextArrow: $('.main-team-left'),
        dots: false,
        arrows: true
    });
});
var $page = $('html, body');
$('a[href*="#"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 2000);
    return false;
});
$(".main-map-scroll_phone_1").click(function() {
    $('.main-map-scroll_phone_2').css({display:'block'});
    $(".main-map-scroll_phone_1").click(function() {
        $('.main-map-scroll_phone_2').css({display:'none'});
    });
    return this;
});

$(".main-map-scroll_phone_11").click(function() {
    $('.main-map-scroll_phone_22').css({display:'block'});
    $(".main-map-scroll_phone_11").click(function() {
        $('.main-map-scroll_phone_22').css({display:'none'});
        return this;
    });

});
