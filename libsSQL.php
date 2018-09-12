<?php
include_once "maLibSQL.pdo.php";
include_once "config.php";



function donnees($salle){
	$SQL= "SELECT * FROM " . $salle ;
	return parcoursRs(SQLSelect($SQL));
}

?>
