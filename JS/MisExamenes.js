function examenes(){
    document.getElementById('titulo').innerHTML="Mis Examenes";
    document.getElementById('grid-container2').style.visibility = "hidden";
    document.getElementById('grid-container3').style.visibility = "hidden";
    document.getElementById('contenedor').innerHTML="<div class='grid-container'>Examenes solicitados<br><button class='newExamen'>Solicitar Nuevo Examen</button></div>";
	pacienteEM = new XMLHttpRequest();
	pacienteEM.open('GET','../PHP/pacientesEM.php',true);
	pacienteEM.send();
	pacienteEM.onreadystatechange = function(){
		if (pacienteEM.status == 200 && pacienteEM.readyState == 4) {
			pacEM = JSON.parse(pacienteEM.responseText);
			console.log(pacEM);
			 for(var m = 0; m < pacEM.length; m++){
					var color = "";					
					switch(pacEM[m].status){
						case "Pendiente":
							color = "statPendiente";
							break;
						case "Entregado":
							color= "statCompleto";
							break;
						default:
							color= "statPendiente";
							break;				
					}
					contenedor = document.getElementById('contenedor');
					contenedor.innerHTML += "<div class='grid-item3'>" + 
					pacEM[m].Fecha_e + " | " +"Folio: " + pacEM[m].Id_E + " | "+ pacEM[m].Nom_E + " | " + pacEM[m].Nom_P + 
					"<input type='button' id='bstatus' name='bstatus' class='bstatus "+ color + "' value="+pacEM[m].status+"'></div>";
				 
			}
		}
	}
}