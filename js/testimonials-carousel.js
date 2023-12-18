$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
      loop: true,
      margin: 10,
      nav: false,
      dots: true,
      responsive: {
        0: {
          items: 1
        },
        768: {
          items: 1
        },
        1000: {
          items: 1
        }
      }
    });
  });