jQuery.noConflict();

(function($) {

  jQuery(document).ready(function() {
 

 

    var $slider = $('#slider');
    if ($slider.length) {

      var $sliderUl = $slider.find('ul');
      var slideCount = $sliderUl.find('li').length;
      slideWidth = Math.round($('#page.newspecial').width() - (($('#page.newspecial').width() * 10) / 100)).toFixed(2);;
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
        slideWidth = Math.round($('#page.newspecial').width() - (($('#page.newspecial').width() * 10) / 100)).toFixed(2);;
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