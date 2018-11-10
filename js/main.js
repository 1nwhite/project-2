(function($){
      // FlexSlider
    $(document).ready(function(){
      $('.flexslider').flexslider({
        animation: "slide",
        start: function(slider){
          $('body').removeClass('loading');
        }
      });

      // Header Scroll
      $(window).scroll(function ()  {
        if ($(this).scrollTop() > 1) {
          $('header').addClass('fixed');
        } else {
            $('header').removeClass('fixed');
        }
      })

      // Mobile Navigation
      $('.toggle').click(function () {
        $('.menu').toggleClass('show-class');
      })

      // Waypoints
      $(window).scroll(function(){
        $('.work').each(function() {
          var imagePos = $(this).offset().top;
          var topOfWindow = $(window).scrollTop();
          if (imagePos < topOfWindow + 865) {
              $(this).addClass('fadeIn');
          }
        })
      })

      $(window).scroll(function(){
        $('.btn-large').each(function() {
          var imagePos = $(this).offset().top;
          var topOfWindow = $(window).scrollTop();
          if (imagePos < topOfWindow + 865) {
              $(this).addClass('tada');
          }
        })
      })

      // Fancybox
      $('.work-box').fancybox();

      // Page Scroll
      $("#menu").on("click","a", function (e) {
        e.preventDefault(e)
		    var id  = $(this).attr('href');
		    var top = $(id).offset().top;
		    $('body, html').animate({
          scrollTop: $(id).offset().top-70
        }, 600);
	     });
    });








 })(jQuery);
