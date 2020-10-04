
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
var blindb=false;
var  timer;
var  hidetimer;

function banner(){
	clearInterval(hidetimer);
	    timer = setInterval(function() {
			 $('.banner').show('slow');
      blindbanner();
    }, 2000);
	}
	
function blindbanner(){	
clearInterval(timer);
 hidetimer = setInterval(function() {
       $('.banner').hide();
	   banner();
    }, 8000);
	}

function play_video(){
	var id=$('.current').attr('id');
	var video=$('.current').find('.video-js');

		if(id=="sommario"){
			if(!playb){
			$("#sommario video").click();
			playb=true;
			}
		}else if(id=="video-soyita" || id=="video-circo" || id=="video-sirene" ) {
				if(!playbl){
					if(id=="video-soyita"){
				$("#video-soyita video").click();}
					if(id=="video-circo"){
				$("#video-circo video").click();}
				if(id=="video-sirene"){
				$("#video-sirene video").click();}
				playbl=true;
				}
				
				
			}else{
			if(video.length == 0){
				$(".vjs-playing").click();
				playbl=false;
				}
			 }
			if(id=="lei-e-lei"){
				banner();}
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
		epOldH = $(window).height();
		var $mg = $('.photo-wide img').width();
		$('.photo-wide img').css('height', epOldH);
		$('.animaziones2d img').css('height', epOldH);
		$('.animazioned2s img').css('height', epOldH);
		var $mgt = Math.round(($(window).width()*768)/1280);
		$('.contenutotest').css('height', $mgt);
		$('.video-js').css('height', epOldH);
		$('.banner').hide();
		diff=-Math.round($mg/2).toFixed(2);
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
var urltest="http://www.erbaccelarivista.org/wp-content/themes/aspirina/images/gioco/";
   /* Array immagini di background */
  

var test=1;

var contenutotest=new Array();
contenutotest[0]='<div class="photo-test" ><img src="http://www.erbaccelarivista.org/wp-content/uploads/2013/06/gioco-p11.jpg"/></div ><h1 class="titolo">IL TEST<br />DELL\'ESTATE</h1><div class="continua">fai il test</div><div class="noloso">lo so già</div>';
contenutotest[1]='<img src="'+urltest+'img1.png"  class="imgtest1"/><img src="'+urltest+'img2.png"  class="imgtest2"/><div class="domanda1"><h2 class="domanda" style="margin-top:0">Cos\'è il posizionamento?</h2><ul class="domandasingola"><li><label for="radio1">Un parcheggio</label><span></span><input type="radio"  name="radio1"/><span></span></li><li><label for="radio2">Uno strumento per posizionare il mento</label><span></span><input type="radio" name="radio1" /><span></span></li><li><label for="radio3">Una pratica politica N.P. (non posizionata) </label><span></span><input type="radio" name="radio1" /><span></span></li></ul></div><div class="domanda2"><h2 class="domanda">Cos\'è l\'affidamento?</h2><ul class="domandasingola"><li><label for="radio1">Adottare a distanza una femminista di Milano </label><span></span><input type="radio"  name="radio2"/><span></span></li><li><label for="radio2">Farsi adottare da una femminista se disposta a trasferirsi al mare</label><span></span><input type="radio"  name="radio2" /><span></span></li><li><label for="radio3">La carta fedeltà della Coop Sibilla Aleramo </label><span></span><input type="radio" name="radio2" /><span></span></li></ul></div><div class="continua-no">continua</div>';
contenutotest[2]='<img src="'+urltest+'img3.png"  class="imgtest3"/><img src="'+urltest+'img6.png"  class="imgtest6"/><div class="domanda3"><h2 class="domanda" style="margin-top:0">Cos\'è il Cisgender? </h2><ul class="domandasingola"><li><label for="radio1">Una torta con formaggio tirolese</label><span></span><input type="radio"  name="radio1"/><span></span></li><li><label for="radio2">Un passo di montagna</label><span></span><input type="radio" name="radio1" /><span></span></li><li><label for="radio3">Un viaggio mentale</label><span></span><input type="radio" name="radio1" /><span></span></li></ul></div><div class="domanda6"><h2 class="domanda">Cos\'è l\'autocoscienza? </h2><ul class="domandasingola"><li><label for="radio1">Un\'app per Iphone </label><span></span><input type="radio"  name="radio2"/><span></span></li><li><label for="radio2">La coscienza di essere coscienti di essere coscienti di essere coscienti di essere coscienti...</label><span></span><input type="radio"  name="radio2" /><span></span></li><li><label for="radio3">Un\'auto ibrida intelligente </label><span></span><input type="radio" name="radio2" /><span></span></li></ul></div><div class="continua-no">continua</div>';
contenutotest[3]='<img src="'+urltest+'img5.png"  class="imgtest5"/><img src="'+urltest+'img4.png"  class="imgtest4"/><div class="domanda5"><h2 class="domanda" style="margin-top:0">Cos\'è l\'Over Make Up?</h2><ul class="domandasingola"><li><label for="radio1">L\'hotel di Shining</label><span></span><input type="radio"  name="radio1"/><span></span></li><li><label for="radio2">Una pratica di superamento di donnità</label><span></span><input type="radio" name="radio1" /><span></span></li><li><label for="radio3">Sindrome da uso eccessivo di eyeliner</label><span></span><input type="radio" name="radio1" /><span></span></li></ul></div><div class="domanda4"><h2 class="domanda">Cos\'è il Queening? </h2><ul class="domandasingola"><li><label for="radio1">Una canzone degli Abba </label><span></span><input type="radio"  name="radio2"/><span></span></li><li><label for="radio2">Uno sport di scope volanti </label><span></span><input type="radio"  name="radio2" /><span></span></li><li><label for="radio3">Il ballo delle debuttanti  degli Oompa Loompa </label><span></span><input type="radio" name="radio2" /><span></span></li></ul></div><div class="continua-no">continua</div>';
contenutotest[4]='<img src="'+urltest+'img7.png"  class="imgtest7"/><img src="'+urltest+'img8.png"  class="imgtest8"/><div class="domanda7"><h2 class="domanda" style="margin-top:0">Ti chiedono di essere performativa, cosa fai? </h2><ul class="domandasingola"><li><label for="radio1">Ti prepari una tisana relax </label><span></span><input type="radio"  name="radio1"/><span></span></li><li><label for="radio2">*Puff*</label><span></span><input type="radio" name="radio1" /><span></span></li><li><label for="radio3">Potere di Nettunoooo vieni a me!</label><span></span><input type="radio" name="radio1" /><span></span></li></ul></div><div class="domanda8"><h2 class="domanda">Il tuo corpo è...</h2><ul class="domandasingola"><li><label for="radio1">Il mio corpo, il mio corpo, il mio corpo, il mio corpo, il mio corpo, il mio corpo...</label><span></span><input type="radio"  name="radio2"/><span></span></li><li><label for="radio2">Fa-vo-lo-so</label><span></span><input type="radio"  name="radio2" /><span></span></li><li><label for="radio3">Quale dei due? </label><span></span><input type="radio" name="radio2" /><span></span></li></ul></div><div class="continua-no">continua</div>';
contenutotest[5]='<img src="'+urltest+'img9.png"  class="imgtest9"/><img src="'+urltest+'img10.png"  class="imgtest10"/><div class="domanda9"><h2 class="domanda" style="margin-top:0">Il tuo sex toy è queer perché...</h2><ul class="domandasingola"><li><label for="radio1">È a forma di opossum e da qualche parte lo infilerò </label><span></span><input type="radio"  name="radio1"/><span></span></li><li><label for="radio2">Ce l\'ho ed è già tanto</label><span></span><input type="radio" name="radio1" /><span></span></li><li><label for="radio3">È bisessuale</label><span></span><input type="radio" name="radio1" /><span></span></li></ul></div><div class="domanda10"><h2 class="domanda">Cos\'è l\'asexuality? </h2><ul class="domandasingola"><li><label for="radio1">Una reazione a catena  alla performativà</label><span></span><input type="radio"  name="radio2"/><span></span></li><li><label for="radio2">Un reality show </label><span></span><input type="radio"  name="radio2" /><span></span></li><li><label for="radio3">Un forno della Smeg</label><span></span><input type="radio" name="radio2" /><span></span></li></ul></div><div class="continua-no">continua</div>';
contenutotest[6]='<img src="'+urltest+'img11.png"  class="imgtest11"/><img src="'+urltest+'img12.png"  class="imgtest12"/><div class="domanda11"><h2 class="domanda" style="margin-top:0">Quanto sei emotivamente dipendente? </h2><ul class="domandasingola"><li><label for="radio1">Dipende </label><span></span><input type="radio"  name="radio2"/><span></span></li><li><label for="radio3">Ho un gatto</label><span></span><input type="radio" name="radio2" /><span></span></li><li><label for="radio3">Valgono i parenti? </label><span></span><input type="radio" name="radio2" /><span></span></li><li><label for="radio3">Sono Lithromantic* nella Gray-A con tendenze Bisex Ricreational quando non bevo</label><span></span><input type="radio" name="radio2" /><span></span></li></ul></div><div class="domanda12"><h2 class="domanda" style="margin-top:0">Cos\'è il poliamore? </h2><ul class="domandasingola"><li><label for="radio1">Un poligono di tiro per coppie </label><span></span><input type="radio"  name="radio1"/><span></span></li><li><label for="radio2">Un amore bipolare </label><span></span><input type="radio" name="radio1" /><span></span></li><li><label for="radio3">La molecola cupido</label><span></span><input type="radio" name="radio1" /><span></span></li><li><label for="radio3">L\'amore nel pollaio</label><span></span><input type="radio" name="radio1" /><span></span></li></ul></div><div class="continua-no">continua</div>';

var risultatitest=new Array();

risultatitest[0]='<img src="'+urltest+'imgrisposta.png"  class="imgrisposta"/><div class="testorisposta"><h2 class="risposta" style="margin-top:0">Superfemminista</h2><p>Sei andata alla grande, hai risposto prontamente e con precisione a tutte le nostre domande. Nessuno e nessuna e nessun* potrà mai dire che non porti alta la bandiera del  femminismo. Consiglio per l\'estate: tu che puoi, esagera con la torta al formaggio tirolese.</p></div><div class="continua">rifai il test</div>';
risultatitest[1]='<img src="'+urltest+'imgrisposta.png"  class="imgrisposta"/><div class="testorisposta"><h2 class="risposta" style="margin-top:0">Femminista per caso</h2><p>Complimenti, anche se non lo sai, il femminismo è con te! Sappiamo che hai risposto a caso, ma nonostante questo vogliamo premiarti per la tua sincerità/per aver sfidato la sorte/per il culo che hai avuto. Se vuoi un consiglio per l\'estate, sappi che sappiamo dove abiti tu, col tuo gatto e il tuo opossum, quindi stai all\'erta!</p></div><div class="continua">rifai il test</div>';
risultatitest[2]='<img src="'+urltest+'imgrisposta.png"  class="imgrisposta"/><div class="testorisposta"><h2 class="risposta" style="margin-top:0">Femminista a modo tuo</h2><p>Wow, che creatività! Secondo le tue risposte sei definibile come un queerplatonic  demisessuale sempre non-libidoidsm. Nelle tue relazioni seppure hai dei momenti lithromantic* e sapioromantic* possiamo affermare senza ombra di dubbio che appartieni ai Gray-romantic*. Consiglio per l\'estate:  gonna catch\'em all (collezionali tutti)! </p></div><div class="continua">rifai il test</div>';

var imageArray = [urltest+"img1.png", urltest+"img2.png",  urltest+"img3.png", urltest+"img4.png", urltest+"img5.png", urltest+"img6.png", urltest+"img7.png", urltest+"img8.png", urltest+"img9.png", urltest+"img10.png", urltest+"img12.png", urltest+"img12.png", urltest+"imgrisposta.png"];

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
		
	$(".noloso").live('mouseover',function(){
		var hg = Math.floor($(window).height()-300);
		var wg = Math.floor($(window).width()-300);
        $(this).css({
            left:((Math.random()*wg)+100)+"px",
            top:((Math.random()*hg)+150)+"px",
        });
    });	
	$('.continua').live('click', function() {
	 $('.contenutotest').fadeOut('slow', function() {
		if(test<7){
		$('.contenutotest').html(contenutotest[test]);
		$('.contenutotest').fadeIn();
		test++;}
		else{
			var  rand = Math.floor(Math.random()*3);
			$('.contenutotest').html(risultatitest[rand]);
		$('.contenutotest').fadeIn();
		test=0;
		}
	});
	
	});	
	
	$('.banner').live('click', function() {
		$('.banner').hide();
		banner();
		});
	
	$.each(imageArray, function (i, val) {
  $('<img/>').attr('src', val);
});
	
	$("input:radio").live("change", function() {
	
    if( $("input[name='radio1']:checked").val() && $("input[name='radio2']:checked").val()) { 
      $('.continua-no').removeClass('continua-no').addClass('continua');
    } else {
      
    }
	});			
});

})(jQuery); 
