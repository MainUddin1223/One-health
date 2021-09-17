$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
   
    nav: true,
    dots: false,
    
    responsive: {
      0: {
        items: 1
      },
      576: {
        items: 2
      },
      992: {
        items: 3
      }
    }
  });
  });
