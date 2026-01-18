"use strict";

// PRELOADER
$(window).on('load', function(){
    $('.preloader').delay(1000).fadeOut("slow");
});

// Set static background image
$(function(){
    $('body').backstretch("images/tm-bg-slide-1.webp");
});
