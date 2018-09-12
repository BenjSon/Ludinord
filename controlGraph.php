<?php
include_once "libsSQL.php";
include_once "config.php";

$tabFort = donnees("fort");
$variableAPasser = json_encode($tabFort);



echo ("<input type=hidden id=variableAPasser value= $variableAPasser;/>");
include "graphe.html";?>
<script src="./graphe_jquery.js">

