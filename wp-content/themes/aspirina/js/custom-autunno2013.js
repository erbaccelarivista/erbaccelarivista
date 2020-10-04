
jQuery.noConflict();  
(function($) {
	
var playb=false;
var playbl=false;
		
function animaziones2d(){
	if(!$(".current .animaziones2d").is(':animated')){
	leftpos = $(window).width();
	start=-Math.round($(".current .animaziones2d img").width()).toFixed(2);
	vel=parseInt($(".current .animaziones2d").attr('data-vel'),10);
	$(".current .animaziones2d").css('left', start);	
	$(".current .animaziones2d").stop().animate({left: leftpos}, vel, function(){animaziones2d()});}
		}
		
function animazioned2s(){
	if(!$(".current .animazioned2s").is(':animated')){
	leftpos = -Math.round($(".current .animazioned2s img").width()).toFixed(2);
	start=$(window).width();
	vel=parseInt($(".current .animazioned2s").attr('data-vel'),10);
	$(".current .animazioned2s").css('left', start);	
	$(".current .animazioned2s").stop().animate({left: leftpos}, vel, function(){animazioned2s()});}
		}


function play_video(){
	var id=$('.current').attr('id');
	var video=$('.current').find('.video-js');

	if(id=="pioggia" || id=="la-ripresa" ) {
				if(!playbl){
					if(id=="pioggia"){
				//$("#pioggia video").click();
				}
					if(id=="la-ripresa"){
				$("#la-ripresa video").click();}
				
				playbl=true;
				}
				
				
			}else{
			if(video.length == 0){
				$(".vjs-playing").click();
				playbl=false;
				}
			 }
			
			 }
			 
function play_anim(){
	 if($('.current').find('.animaziones2d').length > 0){
		animaziones2d();
			}
	 if($('.current').find('.animazioned2s').length > 0){
				animazioned2s();
			}
			 }

function setup(){
		var epOldH = $(window).height();
		var $mg = $('.photo-wide img').width();
		$('.photo-wide img').css('height', epOldH);
		$('.animaziones2d img').css('height', epOldH);
		$('.animazioned2s img').css('height', epOldH);
		var $mgt = Math.round(($(window).width()*768)/1280);
		$('.video-js').css('height', epOldH);
		var diff=-Math.round($mg/2).toFixed(2);
		$('.photo-wide img').css('margin-left', diff);
		
}


  /* funzione precaricamento immagini */
    function preLoadImages(images) {
        var args_len = images.length;
        for (var i = args_len; i--;) {
          var cacheImage = document.createElement('img');
          cacheImage.src = arguments[i];
          cache.push(cacheImage);
        }
    }

jQuery(document).ready( function() { 
	
	
	
	$('.curtains').curtain({
		scrollSpeed: 3000,
		curtainLinks: '.curtain-links',
		nextSlide: function() { play_video(); play_anim(); },
		prevSlide: function() { play_video(); },
		loadSetup: function() { 			
		setup(); }
		});
								
		$(window).resize(function(){ setup(); });
		
	

	
});

})(jQuery); 
