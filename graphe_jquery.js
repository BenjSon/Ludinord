// var req = new XMLHttpRequest();
// req.open("GET","./dataSQL.php", false);
// req.send(null);
// console.log(req);

var data=[[0,5],[10,100],[20,0],[30,300],[40,100],[70,800],[90,500],[100,1000]];
//var data=[[0]];
// var madata = new XMLHttpRequest();
// 	madata.open("GET", "controlGraph.php", false);
// 	//madata.responseType = 'json';
// 	madata.send();
// 	data= madata.response;
// 	console.log(data);
// 	console.log(madata);
// 	data = JSON.parse(data);

var variableRecuperee = document.getElementById(variableAPasser).value;
console.log(variableRecuperee);

//on vient de simuler une base de donnée
var nbrmax=900;

taille=data.length;
var chemin="M 70 400" ;
var duree= data[taille-1][0];
var now= data[taille-1][1];
if (now>nbrmax) {
	console.log(now);
	$(document).ready(function(){
		$("#fort").css("background-color", "red");

 	});
}

var somme_t=0;
var somme_n=0;
for(var point in data){
		var ecart_temps= 70+ data[point][0] * 700 / data[taille-1][0];
		console.log(data[taille-1][0]);
		//somme_t+= ecart_temps ;
		var ecart_nbr= 400 -data[point][1] * 400 / 1200;
		//somme_n+= ecart_nbr ;
		chemin= chemin + " L " + ecart_temps.toString()+ " " + ecart_nbr.toString();
		
	}
console.log(chemin);

$(document).ready(function(){
	//calcul des temps à afficher sur le graphe.

	temps2= (duree/7).toString().substring(0,5) +'s';
	temps3= (2*duree/7).toString().substring(0,5)+'s';
	temps4= (3*duree/7).toString().substring(0,5)+'s';
	temps5= (4*duree/7).toString().substring(0,5)+'s';
	temps6= (5*duree/7).toString().substring(0,5)+'s';
	temps7= (6*duree/7).toString().substring(0,5)+'s';
	$('#horaires2').html(temps2);
	$('#horaires3').html(temps3);
	$('#horaires4').html(temps4);
	$('#horaires5').html(temps5);
	$('#horaires6').html(temps6);
	$('#horaires7').html(temps7);
	//détermination du path de la courbe:
	//chemin="M 70 400 L 150 250 L 270 300 L 770 "+ positionfin ;
	//console.log(chemin);
	$('#courbe').attr("d",chemin);
		
})