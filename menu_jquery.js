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
	        // dbRef.on('value', snap => count.innerText = 'Real time count number : ' + snap.val());
	        var data= snap.val();


if(data<800){
	$(document).ready(function(){
		$('#fort').css("background-color","#FFA500");
	})
}
