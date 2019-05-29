<?php
$con = new mysqli('localhost','root','','tfidoctor');

    $nombre=$_GET['nombre'];
    $fecha=$_GET['fecha'];
    $hora=$_GET['hora'];
    $numero=$_GET['numero'];
    $consultorio=$_GET['consultorio'];
    $estudios=$_GET['estudios'];
    $doctor = $_GET['doctor'];

$insertar = "INSERT INTO consultas(nombre, fecha, hora, telefono, consultorio, estudios,doctor) 
            VALUES ('$nombre','$fecha','$hora','$numero','$consultorio','$estudios', '$doctor')";

$con->query($insertar);



?>