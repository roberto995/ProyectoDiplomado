<?php

$conn = mysqli_connect('localhost','root','','tfidoctor');


$resultado = mysqli_query($conn,"SELECT id_p, fecha, comentarios FROM historial");

$data = array();

while ($row = mysqli_fetch_assoc($resultado)){
        $data[]= $row;
}

echo json_encode($data);

?>