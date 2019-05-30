<?php
$con = mysqli_connect('localhost','id9756901_root','12345','id9756901_idoctor');

    $mensaje = $_GET['mensaje'];
    $fecha_actual = date("Y-m-d");
    $id = $_GET["persona"];
    $doctor = $_GET['doctor'];

$insertar = "INSERT INTO historial(Fecha,Comentarios,Id_P,doctor) VALUES ('$fecha_actual','$mensaje','$id','$doctor')";

$con->query($insertar);

$arreglo = array(
	'mensaje' => $mensaje, 
    'fecha_actual' => $fecha_actual,
    'id' => $id,
    'doctor' => $doctor
);

echo json_encode($arreglo);

?>