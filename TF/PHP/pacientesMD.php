<?php

$conn = mysqli_connect('localhost','root','','tfidoctor');


$resultado = mysqli_query($conn,"SELECT id_p,
                                        nom_p, 
                                        ape_p, 
                                        edad, 
                                        telefono, 
                                        correo, 
                                        t_sangre, 
                                        alergia, 
                                        domicilio
                                        FROM pacientes");

$data = array();

while ($row = mysqli_fetch_assoc($resultado)){
        $data[]= $row;
}

echo json_encode($data);

?>