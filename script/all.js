jQuery(function($) {

    console.log("jQuery start");

$(document).ready(function(){
    $('.brand_container').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        
    });
  });
  
})