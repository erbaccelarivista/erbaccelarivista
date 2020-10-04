jQuery.noConflict();

(function($) {

  jQuery(document).ready(function() {
    var playb = false;
    var playbl = false;


    function swf_play() {
      var id = $('.current').attr('id');
      if (id == 'strip') {
        if (id == 'strip') {
          stage.destroy();
          stage = new swiffy.Stage(document.getElementById('swiffycontainer'), swiffyobject);
          stage.start();
          stage.setFlashVars('mode=gotoStart');


        }
      }
    }

    function play_video() {
      var id = $('.current').attr('id');
      var video = $('.current').find('.video-js');
	  var imgsrc = $('#nuvole-spot').find('.size-full').attr('src');
      if (id === 'silvia' || id === 'attesa' || id === 'nuvole-spot') {

        if (!playbl) {
          if (id === 'silvia') {
            $('#silvia video').click();
          }
          if (id === 'attesa') {
            $('#attesa video').click();
          }
          if (id === 'nuvole-spot') {
            
 $('#nuvole-spot').find('.size-full').attr('src', '');
 $('#nuvole-spot').find('.size-full').attr('src', imgsrc);
          }
          playbl = true;
        }
      } else {
        if (video.length === 0) {
          $('.vjs-playing').click();
          $.ionSound.stop('skype');
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


    var $slider = $('#slider');
    if ($slider.length) {

      var $sliderUl = $slider.find('ul');
      var slideCount = $sliderUl.find('li').length;
      slideWidth = Math.round($(window).width() - (($(window).width() * 30) / 100)).toFixed(2);;
      slideHeight = Math.round((525 * slideWidth) / 1017).toFixed(2);
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
        slideHeight = Math.round((525 * slideWidth) / 1017).toFixed(2);
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

    $.ionSound({
      sounds: [
        'camera_flashing_2',
        'skype'
      ],
      path: 'http://www.erbaccelarivista.org/sounds/',
      multiPlay: true,
      volume: '0.2'
    });

    $('a.control_prev').click(function(ev) {
      ev.preventDefault();
      moveLeft();
      $.ionSound.play('camera_flashing_2');
    });

    $('a.control_next').click(function(ev) {
      ev.preventDefault();
      moveRight();
      $.ionSound.play('camera_flashing_2');
    });

  });

})(jQuery);