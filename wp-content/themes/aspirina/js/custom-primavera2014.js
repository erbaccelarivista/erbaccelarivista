
jQuery.noConflict();  
(function($) {
jQuery(document).ready( function() { 	
var playb=false;
var playbl=false;
		

function swf_play(){
	var id=$('.current').attr('id');
	if(id=="strip" ) {
				if(id=="strip"){
					   stage.destroy();
					   stage =  new swiffy.Stage(document.getElementById('swiffycontainer'), swiffyobject);
					   stage.start();
					   stage.setFlashVars('mode=gotoStart');
					   

				}}
}
function play_video(){
	var id=$('.current').attr('id');
	var video=$('.current').find('.video-js');
	if(id=="classe" ) {
	
				if(!playbl){
					if(id=="classe"){
				$("#classe video").click();
				}
				
				
				playbl=true;
				}
				
				
			}else{
			if(video.length == 0){
				$(".vjs-playing").click();
				playbl=false;
				}
			 }
			
			 }
			 

function setup(){
		var epOldH = $(window).height();
		$('.video-js').css('height', epOldH);
		slideCount = $('#slider ul li').length;
	

}


 

	
	
	
	$('.curtains').curtain({
		scrollSpeed: 3000,
		curtainLinks: '.curtain-links',
		nextSlide: function() { play_video();  setup();},
		prevSlide: function() { play_video(); },
		loadSetup: function() { 			
		setup(); }
		});
								
		$(window).resize(function(){ 
			setup(); 
			slideCount = $('#slider ul li').length;
			slideWidth = Math.round($(window).width()-(($(window).width()*30)/100)).toFixed(2);;
			slideHeight = Math.round((525*slideWidth)/1017).toFixed(2);
			sliderUlWidth = slideCount * slideWidth;
				$('#slider').css({ width: slideWidth, height: slideHeight });	
				$('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth, height: slideHeight  });
				$('#slider li').css({ width: slideWidth, height: slideHeight});
				$('#slider ul li:last-child').prependTo('#slider ul');
	});
		
	
	var slideCount = $('#slider ul li').length;
	slideWidth = Math.round($(window).width()-(($(window).width()*30)/100)).toFixed(2);;
	slideHeight = Math.round((525*slideWidth)/1017).toFixed(2);
	var sliderUlWidth = slideCount * slideWidth;
	
	$('#slider').css({ width: slideWidth, height: slideHeight });	
	$('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth, height: slideHeight  });
	$('#slider li').css({ width: slideWidth, height: slideHeight});
    $('#slider ul li:last-child').prependTo('#slider ul');

    function moveLeft() {
        $('#slider ul').animate({
            left: + slideWidth
        }, 200, function () {
            $('#slider ul li:last-child').prependTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    function moveRight() {
        $('#slider ul').animate({
            left: - slideWidth
        }, 200, function () {
            $('#slider ul li:first-child').appendTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

	$.ionSound({
            sounds: [
                "camera_flashing_2",
            ],
            path: "https://erbaccelarivista.github.io/sounds/",
            multiPlay: true,
            volume: "1.0"
     });

    $('a.control_prev').click(function (ev) {
		ev.preventDefault();
        moveLeft();
		$.ionSound.play("camera_flashing_2");
    });

    $('a.control_next').click(function (ev) {
		ev.preventDefault();
        moveRight();
		$.ionSound.play("camera_flashing_2");
    });
	
	 

       
	
});

})(jQuery); 
