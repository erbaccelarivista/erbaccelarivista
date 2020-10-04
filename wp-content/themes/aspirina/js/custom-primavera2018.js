jQuery.noConflict();

(function($) {

  jQuery(document).ready(function() {
    var playb = false;
    var playbl = false; 

    function play_video() {
      var id = $('.current').attr('id');
      var video = $('.current').find('.video-js');
      if (id === 'happy-birthday' || id === 'gioosy-dancing' || id === 'gioosy-jumps') {

        if (!playbl) {
          if (id === 'happy-birthday') {
            $('#happy-birthday video').click();
          }
          if (id === 'gioosy-dancing') {
            $('#gioosy-dancing video').click();
          }  
		   if (id === 'gioosy-jumps') {
            $('#gioosy-jumps video').click();
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
    }


    $('.curtains').curtain({
      scrollSpeed: 3000,
      curtainLinks: '.curtain-links',
      nextSlide: function() {
        play_video();
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
	  
	   var $slider = $('#slider');
    if ($slider.length) {

      var $sliderUl = $slider.find('ul');
      var slideCount = $sliderUl.find('li').length;
      slideWidth = Math.round($(window).width() - (($(window).width() * 30) / 100)).toFixed(2);;
      slideHeight = Math.round((788 * slideWidth) / 400).toFixed(2);
	  if(slideHeight>788){slideHeight =788;}
      var sliderUlWidth = slideCount * slideWidth;

      $slider.css({
        width: slideWidth,
        height: slideHeight
      });
      $sliderUl.css({
        width: sliderUlWidth,
        marginLeft: -slideWidth,
        height: slideHeight
      })
      .find('li').css({
        width: slideWidth,
        height: slideHeight
      })
      .last().prependTo($sliderUl);

      function moveLeft() {
        $sliderUl.animate({
          left: +slideWidth
        }, 200, function() {
          $sliderUl.find('li:last-child').prependTo($sliderUl);
          $sliderUl.css('left', '');
        });
      }

      function moveRight() {
        $sliderUl.animate({
          left: -slideWidth
        }, 200, function() {
          $sliderUl.find('li:first-child').appendTo($sliderUl);
          $sliderUl.css('left', '');
        });
      }

      $(window).resize(function() {
        setup();
        slideCount = $('#slider ul li').length;
        slideWidth = Math.round($(window).width() - (($(window).width() * 30) / 100)).toFixed(2);;
        slideHeight = Math.round((788 * slideWidth) / 400).toFixed(2);
		if(slideHeight>788){slideHeight =788;}
        sliderUlWidth = slideCount * slideWidth;
        $('#slider').css({
          width: slideWidth,
          height: slideHeight
        });
        $('#slider ul').css({
          width: sliderUlWidth,
          marginLeft: -slideWidth,
          height: slideHeight
        });
        $('#slider li').css({
          width: slideWidth,
          height: slideHeight
        });
        $('#slider ul li:last-child').prependTo('#slider ul');
      });
    }



    $('a.control_prev').click(function(ev) {
      ev.preventDefault();
      moveLeft();
    });

    $('a.control_next').click(function(ev) {
      ev.preventDefault();
      moveRight();
    });


  });

})(jQuery);