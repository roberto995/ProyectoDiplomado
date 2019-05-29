<?php
$con = new mysqli('localhost','root','','idoctor');

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

<?php

	if(isset('POST',['comentarioExamen'])){
		$con = new mysqli('localhost','root','','idoctor');
	    $nombre=$_GET['nombre'];
	    $fecha=$_GET['fecha'];
	    $hora=$_GET['hora'];
	    $numero=$_GET['numero'];
	    $consultorio=$_GET['consultorio'];
	    $estudios=$_GET['estudios'];

		$insertar = "INSERT INTO consultas(nombre, fecha, hora, telefono, consultorio, estudios) 
	            VALUES ('$nombre','$fecha','$hora','$numero','$consultorio','$estudios')";

		$con->query($insertar);
	}
	else{

	}


?>