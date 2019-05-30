<?php

$con = mysqli_connect('localhost','id9756901_root','12345','id9756901_idoctor');
	$idPaciente = '1';
	$examen=$_GET['examen'];
    $nombre=$_GET['nombre'];
    $fecha = $_GET['fecha'];
    $comentario = ''; 
    $doctor = $_GET['doctor'];
    

$insertar = "INSERT INTO examenes_m(Id_P, Nom_E,Nom_P,Fecha_e,Comentarios_e,status,doctor) 
            VALUES ('1','$examen','$nombre','$fecha','$comentario','Pendiente','$doctor')";
$con->query($insertar);
?>