$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
      loop:true,
      autoplay:true,
      autoplayTimeout:3000,
      margin:10,
     autoplayHoverPause:true,
      responsiveClass:true,
      responsive:{
        0:{
          items:1,
          nav:true
        },
        600:{
          items:3,
          nav:false
        },
        1000:{
          items:5,
          nav: true,
          loop:false
        }
      }
    });
   
  });

  