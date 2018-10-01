var config = {
	            apiKey: "AIzaSyDkoMLFMo_eB7X7dn2EbU6uF4wdj5_zbLM",
	            authDomain: "projet-21bb6.firebaseapp.com",
	            databaseURL: "https://projet-21bb6.firebaseio.com",
	            projectId: "projet-21bb6",
	            storageBucket: "projet-21bb6.appspot.com",
	            messagingSenderId: "257142514429"
	        };
	        firebase.initializeApp(config);

	        var count = document.getElementById('count');
	        var dbRef = firebase.database().ref().child('count');
	        dbRef.on('value', snap => count.innerText = 'Real time count number : ' + snap.val());
	        var data= snap.val();

// var data=[[0,5],[10,100],[20,0],[30,300],[40,100],[70,800],[90,500],[100,1000]];


//on vient de simuler une base de donnée

var taille = data.length;
var duree = data[taille-1][0];
var chemin="M 70 400" ;
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
	$('#nodata').hide();
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
	
	$('#courbe').attr("d",chemin);
		
})






