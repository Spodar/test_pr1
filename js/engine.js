$(document).ready(function() {
	$('.slider').bxSlider();
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