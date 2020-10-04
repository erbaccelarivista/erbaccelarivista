jQuery.noConflict();

(function($) {

  jQuery(document).ready(function() {
	  
var test=0;
 
var risultatitest=new Array();

risultatitest[0]='<div class="testorisposta">Sei nella redazione di una rivista e l\'elevata presenza maschile anche nei contenuti desta sospetti tali che in molti si chiedono se esistano le donne. Prendere atto che esistono potrebbe essere un duro colpo per te, ma hai l\'opportunità di ignorare la cosa per tutto l\'anno se in prossimità dell\'8 marzo decidi di affidare un numero di pagine della rivista al gentil sesso.<br /><br />AVVERTENZA: il numero di pagine deve essere superiore a due.</div><div class="genera">genera soluzione random</div>';
risultatitest[1]='<div class="testorisposta">Sei responsabile del personale all\'interno di un\'azienda a prevalenza di uomini, tendenzialmente portati al cameratismo e al commento molesto. Sei intimamente convinto che la forza dell\'azienda derivi anche da questo, ma rischi un\'accusa di sessismo. Stabilisci una quota di dipendenti LGBTIQ e soprattutto propagandala puntando sullo spirito filantropico di formazione di nuov* impiegat*.<br /><br />AVVERTENZA: considera sempre aperte quelle posizioni. Le fughe sono all\'ordine del giorno, una volta scoperte le abitudini della popolazione lavorativa dominante.</div><div class="genera">genera soluzione random</div>';
risultatitest[2]='<div class="testorisposta">Ti interessa parlare e scrivere solo e unicamente di altri uomini con cui condividi sogni e speranze di gloria, la salda stretta di mano e le pacche sulle spalle di citazioni reciproche. Questa attitudine può arrecare macchia alla tua integrità culturale politicamente corretta. Appena hai l\'occasione dichiara pubblicamente il tuo sdegno per il mancato riconoscimento di una qualche donna nota.<br /><br />AVVERTENZA: la donna in questione deve essere assolutamente disinteressata al riconoscimento che proponi, meglio se ignora completamente la tua esistenza.</div><div class="genera">genera soluzione random</div>';
risultatitest[3]='<div class="testorisposta">Fai parte di un collettivo misto che nella carta dei valori ha anche la voce "femminismo". Generalmente si può posticipare la sua applicazione a dopo il compimento della rivoluzione, ma se ci tieni ad apparire concreto e a non essere oggetto dei soliti attacchi isterici, basta seguire alcuni accorgimenti: almeno un intervento di una compagna per assemblea (vale anche la lettura del menù per la cena di autofinanziamento), almeno una assemblea ogni tre/sei mesi su tematiche di genere (così già che ci sei puoi spuntare anche la voce LGBTIQ).</div><div class="genera">genera soluzione random</div>';
risultatitest[4]='<div class="testorisposta">La tua ragazza sembra non condividere il tuo poliamorismo. Evita il discorso sull\'amore universale, si è rivelato in molti casi controproducente. Punta piuttosto sulla decostruzione dello stereotipo dell\'uomo che va con tutte e della donna romantica monogama, sostenendo che è suo sacrosanto diritto adeguarsi e sperimentare gli stereotipi tradizionalmente maschili. Se non sembra convinta, ricordale che anche lei è stata soggetta per tutta la vita all\'influenza della cultura, mentre tu che ne sei uscito, puoi confermarle che il poliamorismo è davvero la via della libertà.</div><div class="genera">genera soluzione random</div>';

   
$('.genera').live('click', function() {
	  $('.contenutogeneratore').fadeOut('slow', function() {
		if(test<5){
		$('.contenutogeneratore').html(risultatitest[test]);
		$('.contenutogeneratore').fadeIn();
		test++;}
		else{
		test=0;
		$('.contenutogeneratore').html(risultatitest[test]);
		$('.contenutogeneratore').fadeIn();
		}
	  });
	});
      
   


  });

})(jQuery);