<?php
	$con = new mysqli('localhost','root','','tfidoctor');
	
	$comentario = $_GET['comentario'];    
	$folio = $_GET["folio"];
	$fecha = date("Y-m-d");
	$insertar = "INSERT INTO comentariosexamenes(folio,comentario,fecha) VALUES ('$folio','$comentario','$fecha')";
	$con->query($insertar);
?>