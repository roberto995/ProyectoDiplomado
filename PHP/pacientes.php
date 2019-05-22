<?php
$conn = mysqli_connect('localhost','root','','tfidoctor');

$resultado = mysqli_query($conn,"SELECT * FROM pacientes");

$data = array();

 while ($row = mysqli_fetch_assoc($resultado)){
        $data[] = $row;
} 

echo json_encode($data);
//echo json_decode

?>