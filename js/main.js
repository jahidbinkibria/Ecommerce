(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="tooltip"]').tooltip();


          $(".dropdown").on("hide.bs.dropdown", function(){
                $(".cross").html('Dropdown <span class="caret"></span>');
              });
              $(".dropdown").on("show.bs.dropdown", function(){
                $(".cross").html('Dropdown <span class="caret caret-up"></span>');
            });


          var one = $("#brand-slide");
 
          one.owlCarousel({
              items : 6, //10 items above 1000px browser width
              itemsDesktop : [1000,5], //5 items between 1000px and 901px
              itemsDesktopSmall : [900,3], // betweem 900px and 601px
              itemsTablet: [600,2], //2 items between 600 and 0
              itemsMobile : false,
              autoPlay: true,
              autoplayTimeout:1000, // itemsMobile disabled - inherit from itemsTablet option
          });
         
          // Custom Navigation Events
          $(".next").click(function(){
            one.trigger('owl.next');
          })
          $(".prev").click(function(){
            one.trigger('owl.prev');
          });

         var two = $("#cart-slide");

          two.owlCarousel({
              items : 2, //10 items above 1000px browser width
              itemsDesktop : [1000,2], //5 items between 1000px and 901px
              itemsDesktopSmall : [900,2], // betweem 900px and 601px
              itemsTablet: [600,2], //2 items between 600 and 0
              itemsMobile : false,
              autoPlay: true,
              autoplayTimeout:1000, // itemsMobile disabled - inherit from itemsTablet option
          });
          $(".next1").click(function(){
            two.trigger('owl.next');
          })
          $(".prev1").click(function(){
            two.trigger('owl.prev');
          });

        $("#menu-area").sticky({topSpacing:0});

    });




    jQuery(window).load(function(){

        
    });


}(jQuery));	

$(function(){
         
    $(document).on( 'scroll', function(){
   
      if ($(window).scrollTop() > 100) {
        $('.scroll-top-wrapper').addClass('show');
      } else {
        $('.scroll-top-wrapper').removeClass('show');
      }
    });
   
    $('.scroll-top-wrapper').on('click', scrollToTop);
  });
   
  function scrollToTop() {
    verticalOffset = typeof(verticalOffset) != 'undefined' ? verticalOffset : 0;
    element = $('body');
    offset = element.offset();
    offsetTop = offset.top;
    $('html, body').animate({scrollTop: offsetTop}, 200, 'linear');
  }