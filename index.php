<head>
	<meta charset="utf-8">
	<title>Fédéjeux</title>
	<link rel="shortcut icon" href="logo-fedejeux.png">
	<link rel="stylesheet" type="text/css" href="menu.css">

</head>


<?php

if(isset($_GET['view'])){
	$view = $_GET['view'];
	}else{$view="connexion";}

switch($view)
	{		

		case "menu" : 
			include("./menu.html");
		break;

		case "fort" : 
			echo("<div class='titregraphe'>Nombre de personnes dans le fort</div>");
			include("./graphe.html");
		break; 

		case "montaigne" : 
			echo("<div class='titregraphe'>Nombre de personnes dans la salle Montaigne</div>");
			include("./graphe.html");
		break;

		case "chapiteau":
			echo("<div class='titregraphe'>Nombre de personnes dans le chapiteau</div>");
			include("./graphe.html");
		break;

		case "connexion":
			include("./connexion.html");
		break;

	}

//if (!($_SESSION['etat']=='connected'))
//	include("connexion.html")

?>
