<?php
$con = new mysqli('localhost','root','','tfidoctor');

    $mensaje = $_GET['mensaje'];
    $fecha_actual = date("Y-m-d");
    $id = $_GET["persona"];

$insertar = "INSERT INTO historial(Fecha,Comentarios,Id_P) VALUES ('$fecha_actual','$mensaje','$id')";

$con->query($insertar);

$arreglo = array(
	'mensaje' => $mensaje, 
    'fecha_actual' => $fecha_actual,
    'id' => $id
);

echo json_encode($arreglo);

?>