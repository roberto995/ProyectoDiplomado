<?php

$conn = mysqli_connect('localhost','root','','tfidoctor');
$doctor = $_GET['doctor'];

$resultado = mysqli_query($conn,"SELECT id_p, fecha, comentarios FROM historial where doctor = '$doctor'");

$data = array();

while ($row = mysqli_fetch_assoc($resultado)){
        $data[]= $row;
}

echo json_encode($data);

?>