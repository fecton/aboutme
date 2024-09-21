// PRELOADER
$(window).load(function(){
    $('.preloader').delay(1000).fadeOut("slow"); // set duration in brackets
});

// HOME BACKGROUND SLIDESHOW
$(function(){
    jQuery(document).ready(function() {
		$('body').backstretch([
				"images/tm-bg-slide-1.jpg",
				"images/tm-bg-slide-2.jpg"
			], 	{duration: 15000, fade: 2600});
		});
})