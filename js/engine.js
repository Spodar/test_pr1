$(document).ready(function() {
	$('.slider').bxSlider({
        maxSlides: 1,
        minSlides: 1,
        moveSlides: 1,
        auto: true,
        pause: 3500,
        slideMargin: 0,
        responsive: true,
    });

});

$(document).ready(function() {
    $(document).scroll(function () {
        var scroll = $(this).scrollTop();
        var topDist = $(".content").position();
        if (scroll > topDist.top) {
            $('.nav-fixed').css({"position":"fixed","top":"0"});
        } else {
            $('.nav-fixed').css({"position":"static","top":"auto"});
        }
	});
});	

$('document').ready(function(){

    width = $(window).width();
    if (width <= 400) {$('#modal').modal('false');};
    $('#modal').modal();
});