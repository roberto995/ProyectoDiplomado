<?php

$con = new mysqli('localhost','root','','tfidoctor');
	$idPaciente = '1';
	$examen=$_GET['examen'];
    $nombre=$_GET['nombre'];
    $fecha = $_GET['fecha'];
    $comentario = '';    
    

$insertar = "INSERT INTO examenes_m(Id_P, Nom_E,Nom_P,Fecha_e,Comentarios_e,status) 
            VALUES ('1','$examen','$nombre','$fecha','$comentario','Pendiente')";
$con->query($insertar);
?>