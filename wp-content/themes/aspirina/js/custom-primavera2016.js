jQuery.noConflict();

(function($) {

  jQuery(document).ready(function() {
    var playb = false;
    var playbl = false;


   

    function play_video() {
      var id = $('.current').attr('id');
      var video = $('.current').find('.video-js');
      if (id === 'tutorial-della-cucchiaia-contro-monsanto' || id === 'wonderdance' || id === 'tende' || id === 'like-by-lotta') {

        if (!playbl) {
          if (id === 'tutorial-della-cucchiaia-contro-monsanto') {
            $('#tutorial-della-cucchiaia-contro-monsanto video').click();
          }
          if (id === 'wonderdance') {
            $('#wonderdance video').click();
          }
		  
		  if (id === 'tende') {
            $('#tende video').click();
          }
		  if (id === 'like-by-lotta') {
            $('#like-by-lotta video').click();
          }
         
          playbl = true;
        }
      } else {
        if (video.length === 0) {
          $('.vjs-playing').click();
         
          playbl = false;
        }
      }
    }

    function setup() {
      var epOldH = $(window).height();
      $('.video-js').css('height', epOldH);
      slideCount = $('#slider ul li').length;
    }


    $('.curtains').curtain({
      scrollSpeed: 3000,
      curtainLinks: '.curtain-links',
      nextSlide: function() {
        play_video();
        setup();
      },
      prevSlide: function() {
        play_video();
      },
      loadSetup: function() {
        setup();
      }
    });

  

   

      $(window).resize(function() {
        setup();
     
      });



  });

})(jQuery);