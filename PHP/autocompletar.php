<?php
$conn = mysqli_connect('localhost','id9756901_root','12345','id9756901_idoctor');
$resultado = mysqli_query($conn,"SELECT * FROM pacientes");
$values = array();
while ($row = mysqli_fetch_assoc($resultado)){
        $values[]= $row;
}
echo json_encode(array_values($values));
?> 