<?php
	$con = mysqli_connect('localhost','id9756901_root','12345','id9756901_idoctor');
	
	$comentario = $_GET['comentario'];    
	$folio = $_GET["folio"];
	$fecha = date("Y-m-d");
	

	$insertar = "INSERT INTO comentariosexamenes(folio,comentario,fecha) VALUES ('$folio','$comentario','$fecha')";
	
	$con->query($insertar);

?>