var cevapRengi = ['secondary','secondary','secondary','secondary'];

var cevapDegeri = {dogruRenkDogruYerde : '', dogruRenk : ''};



var meydanOkumaRengi = [];



let cevapSayisi = 0;

function hideButtons(i) {
	$('#b'+i+'-primary').addClass('bg-transparent');
	$('#b'+i+'-warning').addClass('bg-transparent');
	$('#b'+i+'-danger').addClass('bg-transparent');
	$('#b'+i+'-info').addClass('bg-transparent');
}

function showButtons(i) {
	$('#b'+i+'-primary').removeClass('bg-transparent');
	$('#b'+i+'-warning').removeClass('bg-transparent');
	$('#b'+i+'-danger').removeClass('bg-transparent');
	$('#b'+i+'-info').removeClass('bg-transparent');
}



$( document ).ready(function() {
	baslat();
    
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
  
  cevapRengi = ['secondary','secondary','secondary','secondary'];
  

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
 	
	
	
	for(let i = cevapSayisi; i > 0; i--){
		
		cevapKaydir(i, i-1);
        }
        cevapDegeriBul();
        cevapAta(0);
	
	
	sifirla();
        cevapSayisi++;
        });

    function cevapAta(i){
         
 	 for(let j = 0; j < 4; j++){
 	 	renkKur($('#deneme'+i+ ' '+'#color' + j),cevapRengi[j]);
 	 }
 	 $('#deneme'+i+ ' '+'#cevapDegeri' + ' '+ '#dogruYerde').html(cevapDegeri.dogruRenkDogruYerde);
 	  $('#deneme'+i+ ' '+'#cevapDegeri' + ' '+ '#dogruRenk').html(cevapDegeri.dogruRenk);
 	 $('#deneme'+i+ ' ' +'#deneme_durumu').html('#' + (cevapSayisi - i +1));
 	 
 	 
  }
  
	function kutuRengiOgren(satir, sutun){
	 	var liste = $('#deneme' + satir).find('#color' + sutun).attr("class").split('bg-');
	 	var renk = liste[1].split(' ')[0];
	 	return renk;
 	}
  
  
  function cevapKaydir(hedef, kaynak){
  	
  	for(let j = 0; j < 4; j++){
 	 	renkKur($('#deneme'+hedef+ ' '+'#color' + j),kutuRengiOgren(kaynak, j));
 	 }
 	 
  	$('#deneme'+hedef+' '+ '#cevapDegeri' + ' '+ '#dogruYerde').html($('#deneme'+kaynak+' '+ '#cevapDegeri' + ' '+ '#dogruYerde').html());
  	$('#deneme'+hedef+' '+ '#cevapDegeri' + ' '+ '#dogruRenk').html($('#deneme'+kaynak+' '+ '#cevapDegeri' + ' '+ '#dogruRenk').html());
  	
  	$('#deneme'+hedef+ ' ' +'#deneme_durumu').html('#' + (cevapSayisi - hedef +1));
  	

  }
  
  
   function cevaplariBaslat(i){
         
 	 loadContent('deneme'+i,"deneme.html"); 
 	 for(let j = 0; j < 4; j++){
 	 	renkKur($('#deneme'+i+ ' '+'#color' + j),'bg-secondary');
 	 }
 	 
  }
  
  function loadContent(divName,pageURL) {
                $("#" + divName).load(pageURL);
            }
            
  function meydanOkumaBaslat(){
  	let rastgeleRenk = 0;
  	for(let i = 0; i < 4; i++){
  		rastgeleRenk = getRandomInt(1,4);
  		if(rastgeleRenk == 1){
  			console.log(rastgeleRenk);
  			console.log(i);
  			meydanOkumaRengi[i] = "primary";
  		}
  		else if(rastgeleRenk == 2){
			console.log(rastgeleRenk);
			console.log(i);
  			meydanOkumaRengi[i] = "warning";
  		}
  		else if(rastgeleRenk == 3){
  			console.log(rastgeleRenk);
  			console.log(i);
  			meydanOkumaRengi[i] = "danger";
  			
  		}
  		else if(rastgeleRenk == 4){
  			console.log(rastgeleRenk);
  			console.log(i);
  			meydanOkumaRengi[i] = "info";
  		}
  		
  	}
  	
  }
  
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
  
  $('#bitir').click(function() {
  cevapSayisi = 0;
  bitir();
  
});

$('#baslat').click(function() {

  cevapSayisi = 0;
  baslat();
  
});

function bitir(){
hideButtons(0);
  hideButtons(1);
  hideButtons(2);
  hideButtons(3);
  $('#color0').removeClass('bg-danger').removeClass('bg-warning').removeClass('bg-primary').removeClass('bg-info').removeClass('bg-secondary').addClass('bg-'+meydanOkumaRengi[0]);
  $('#color1').removeClass('bg-danger').removeClass('bg-warning').removeClass('bg-primary').removeClass('bg-info').removeClass('bg-secondary').addClass('bg-'+meydanOkumaRengi[1]);
  $('#color2').removeClass('bg-danger').removeClass('bg-warning').removeClass('bg-primary').removeClass('bg-info').removeClass('bg-secondary').addClass('bg-'+meydanOkumaRengi[2]);
  $('#color3').removeClass('bg-danger').removeClass('bg-warning').removeClass('bg-primary').removeClass('bg-info').removeClass('bg-secondary').addClass('bg-'+meydanOkumaRengi[3]);
  
  

}
       
       
       function baslat(){
       showButtons(0);
  showButtons(1);
  showButtons(2);
  showButtons(3);
  
       	meydanOkumaBaslat();
       	
       	 cevapRengi = ['secondary','secondary','secondary','secondary'];
       	 
       	 $('#color0').removeClass('bg-danger').removeClass('bg-warning').removeClass('bg-primary').removeClass('bg-info').removeClass('bg-secondary').addClass('bg-'+cevapRengi[0]);
  $('#color1').removeClass('bg-danger').removeClass('bg-warning').removeClass('bg-primary').removeClass('bg-info').removeClass('bg-secondary').addClass('bg-'+cevapRengi[1]);
  $('#color2').removeClass('bg-danger').removeClass('bg-warning').removeClass('bg-primary').removeClass('bg-info').removeClass('bg-secondary').addClass('bg-'+cevapRengi[2]);
  $('#color3').removeClass('bg-danger').removeClass('bg-warning').removeClass('bg-primary').removeClass('bg-info').removeClass('bg-secondary').addClass('bg-'+cevapRengi[3]);
  
  

    cevaplariBaslat(0);
    cevaplariBaslat(1);
    cevaplariBaslat(2);
    cevaplariBaslat(3);
    cevaplariBaslat(4);
    cevaplariBaslat(5);
    cevaplariBaslat(6);
    cevaplariBaslat(7);
       }     


function cevapDegeriBul(){
	
	const meydanOkumaRengiGecici = Array. apply(null, meydanOkumaRengi);
	const cevapRengiGecici = Array. apply(null, cevapRengi);
	
	let dogruRenkDogruYerde = 0;
	let dogruRenk = 0;
	for(let i = 0; i < 4; i++){
		if(meydanOkumaRengiGecici[i] == cevapRengiGecici[i]){
			dogruRenkDogruYerde++;
		}
	}
	for(let i = 0; i < 4; i++){
		$.each(cevapRengiGecici, function(idx, item) {
    		if (item == meydanOkumaRengiGecici[i]) {
        		cevapRengiGecici.splice(idx, 1); // Remove current item
        		
        		dogruRenk++;
        		
        		return false; // End the loop
    		}
		});
	}
	
	cevapDegeri.dogruRenkDogruYerde = dogruRenkDogruYerde;
	cevapDegeri.dogruRenk = dogruRenk;
	
	return;
	

}


