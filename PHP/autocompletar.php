<?php
$conn = mysqli_connect('localhost','root','','tfidoctor');
$resultado = mysqli_query($conn,"SELECT * FROM pacientes");
$values = array();
while ($row = mysqli_fetch_assoc($resultado)){
        $values[]= $row;
}
echo json_encode(array_values($values));
?>