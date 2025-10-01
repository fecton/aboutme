// PRELOADER
$(window).load(function(){
    $('.preloader').delay(1000).fadeOut("slow");
});

// Set static background image
$(function(){
    jQuery(document).ready(function() {
		$('body').backstretch("images/tm-bg-slide-1.jpg")
	});
})
