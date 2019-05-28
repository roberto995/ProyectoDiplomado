<?php

	$query = $_GET['query'];
	require_once('dbConection.php');
	

	
	$querySearch = new sesioniDoctor;
	$querySearch->conectar();				
	$buscar="SELECT Id_p,Nom_P FROM pacientes";											
	$values=$querySearch->DbCon->query($buscar);

	

	
	// $values = ['Neo',
	//             'Ibiyemi',
	//             'Olayinka',
	//             'Jonathan',
	//             'Stephen', 
	//             'Fisayo', 
	//             'Gideon',
	//             'Mezie',
	//             'Oreoluwa', 
	//             'Jordan', 
	//             'Enkay', 
	//             'Michelle', 
	//             'Jessica'];

	if ($query) {
	    foreach ($values as $key => $value) {
	        if (stripos($value, $query) === false) {
	            unset($values[$key]);
	        }
	    }
	}

	echo json_encode(array_values($values));

  ?>