<?php
$con = new mysqli('localhost','root','','tfidoctor');

    $nombre=$_GET['nombre'];
    $fecha=$_GET['fecha'];
    $hora=$_GET['hora'];
    $numero=$_GET['numero'];
    $consultorio=$_GET['consultorio'];
    $estudios=$_GET['estudios'];

$insertar = "INSERT INTO consultas(nombre, fecha, hora, telefono, consultorio, estudios) 
            VALUES ('$nombre','$fecha','$hora','$numero','$consultorio','$estudios')";

$con->query($insertar);



?>