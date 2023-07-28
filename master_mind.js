const cevapRengi = ['secondary','secondary','secondary','secondary'];

let cevapSayisi = 0;

function hideButtons(i) {
	$('#b'+i+'-primary').addClass('d-none');
	$('#b'+i+'-warning').addClass('d-none');
	$('#b'+i+'-danger').addClass('d-none');
	$('#b'+i+'-info').addClass('d-none');
}

function showButtons(i) {
	$('#b'+i+'-primary').removeClass('d-none');
	$('#b'+i+'-warning').removeClass('d-none');
	$('#b'+i+'-danger').removeClass('d-none');
	$('#b'+i+'-info').removeClass('d-none');
}



$( document ).ready(function() {
    cevaplariBaslat(0);
    cevaplariBaslat(1);
    cevaplariBaslat(2);
    cevaplariBaslat(3);
    cevaplariBaslat(4);
    cevaplariBaslat(5);
    cevaplariBaslat(6);
    cevaplariBaslat(7);
});


$('#sifirla').click(function() {
  
  sifirla();
  
});

function sifirla(){
showButtons(0);
  showButtons(1);
  showButtons(2);
  showButtons(3);
  $('#color0').removeClass('bg-danger').removeClass('bg-warning').removeClass('bg-primary').removeClass('bg-info').removeClass('bg-secondary').addClass('bg-secondary');
  $('#color1').removeClass('bg-danger').removeClass('bg-warning').removeClass('bg-primary').removeClass('bg-info').removeClass('bg-secondary').addClass('bg-secondary');
  $('#color2').removeClass('bg-danger').removeClass('bg-warning').removeClass('bg-primary').removeClass('bg-info').removeClass('bg-secondary').addClass('bg-secondary');
  $('#color3').removeClass('bg-danger').removeClass('bg-warning').removeClass('bg-primary').removeClass('bg-info').removeClass('bg-secondary').addClass('bg-secondary');
  
  const cevapRengi = ['secondary','secondary','secondary','secondary'];

}


function dugmeRengiAl(dugme){

let text = dugme.attr('id');;
const dizi = text.split("-");
let renk = dizi[1];
return renk;

}

function dugmeSayisiAl(dugme){

let text = dugme.attr('id');;
const dizi = text.split("");
let sayi = dizi[1];
return sayi;

}

function renkKur(kutu, kurulacakRenk){
kutu.removeClass('bg-danger').removeClass('bg-warning').removeClass('bg-primary').removeClass('bg-info').removeClass('bg-secondary').addClass('bg-'+ kurulacakRenk);
}


 $('button').on('click', function () {
 	
 	if($(this).attr('id')!='onayla' && $(this).attr('id')!='sifirla'){
	let dugmeRengi = dugmeRengiAl($(this));
            renkKur($(this).parents().eq(2), dugmeRengi);
            
            let dugmeSayisi = dugmeSayisiAl($(this));
   hideButtons(dugmeSayisi);
   
   	cevapRengi[dugmeSayisi] = dugmeRengi;
   	
   	}
   	
        });
        


$('#onayla').on('click', function () {
 	
	cevapAta(cevapSayisi);
	cevapSayisi++;
	sifirla();
	
	for(let i = cevapSayisi; i > 0; i--){
		
	
        });

    function cevapAta(i){
         
 	 for(let j = 0; j < 4; j++){
 	 	renkKur($('#deneme'+i+ ' '+'#color' + j),cevapRengi[j]);
 	 }
 	 
  }
  
	function kutuRengiOgren(satir, sutun){
	 	var liste = $('#deneme' + satir + ' #color' + sutun).attr("class").split('bg-');
	 	return liste[1];
 	}
  
  
  function cevapKaydir(hedef, kaynak){
  	
  	for(let j = 0; j < 4; j++){
 	 	renkKur($('#deneme'+hedef+ ' '+'#color' + j),kutuRengiOgren(kaynak, j));
 	 }
  	
  }
  
  
   function cevaplariBaslat(i){
         
 	 $('#deneme'+i).load("/deneme.html"); 
 	 for(let j = 0; j < 4; j++){
 	 	renkKur($('#deneme'+i+ ' '+'#color' + j),'bg-secondary');
 	 }
 	 
  }
