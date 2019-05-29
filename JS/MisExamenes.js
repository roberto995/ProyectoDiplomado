var pacientesLista=[];

function examenes(){
	var doctor = document.getElementById("doctor").value;
    document.getElementById('titulo').innerHTML="Mis Examenes";
    document.getElementById('grid-container2').style.visibility = "hidden";
    document.getElementById('grid-container3').style.visibility = "hidden";
    document.getElementById('contenedor').innerHTML="<div class='grid-container'>Examenes solicitados<br><button class='newExamen' onclick='nuevoExamen()'>Solicitar Nuevo Examen</button></div>";
	pacienteEM = new XMLHttpRequest();
	pacienteEM.open('GET','../PHP/pacientesEM.php?doctor='+doctor,true);
	pacienteEM.send();
	pacienteEM.onreadystatechange = function(){
		if (pacienteEM.status == 200 && pacienteEM.readyState == 4) {
			pacEM = JSON.parse(pacienteEM.responseText);			
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
					if (color == "statCompleto") {						
						contenedor.innerHTML += "<div class='grid-item3' onclick='examenDetalles("+pacEM[m].Id_E+")'>" +											
						pacEM[m].Fecha_e + " | " +"Folio: " + pacEM[m].Id_E + " | "+ pacEM[m].Nom_E + " | " + pacEM[m].Nom_P + 
						"<input type='button' id='bstatus' name='bstatus' class='bstatus "+ color + "' value="+pacEM[m].status+"'></div>";

					}
					else{

						contenedor.innerHTML += "<div class='grid-item3'>" +					
						pacEM[m].Fecha_e + " | " +"Folio: " + pacEM[m].Id_E + " | "+ pacEM[m].Nom_E + " | " + pacEM[m].Nom_P + 
						"<input type='button' id='bstatus' name='bstatus' class='bstatus "+ color + "' value="+pacEM[m].status+"'></div>";

					}
			}
		}
	}
}

function solicitarExamen(){	

	if (validateDataList()) 
	{
		var nombre = document.getElementById("nombre").value;
		var examen = document.getElementById("examen").value;
		var doctor = document.getElementById("doctor").value;  
	    var d=new Date(),m=new Date(),y=new Date();
	    var fecha = d.getDate()+'/'+m.getMonth()+'/'+y.getFullYear();    
	    busqueda = new XMLHttpRequest();    
	    busqueda.open('POST','../PHP/nuevoExamen.php?nombre='+nombre+"&examen="+examen+"&fecha="+fecha+'&doctor='+doctor);
	    busqueda.send();
	    busqueda.onreadystatechange = function(){
	        if (busqueda.status == 200 && busqueda.readyState == 4) {
	            alert("Tu examen fue solicitado!"); 
	            parent.examenes();            
			}
		}
	}
	else{		
		alert('Selecciona el nombre del paciente de la lista');
		document.getElementById('nombre').value = "";
		document.getElementById("nombre").focus();
	}



    
}
function nuevoExamen(){	
	contenedor = document.getElementById('contenedor');	
 	contenedor.innerHTML = "<div class='block'>"+
 		"<p style='display: inline;'>DATOS DE NUEVO EXAMEN</p>"+
	    "<p id='folioExamen' style='display: inline;'>12098213</p><br><br>"+    		
	    "<label for='nombrePaciente'>Nombre del paciente:</label><br>"+
	    "<input class='blockinput' list='pacientesLista' type='text' name='nombre' placeholder='Comienza a escribir para autocompletar' id='nombre'><br><br>"+
	    "<datalist id='pacientesLista'></datalist>"+
	    "<label for='examenSolicitado'>Examen solicitado:</label><br>"+
	    "<input class='blockinput' type='text' name='examen' placeholder='Tipo de examen solicitado' id='examen'><br><br><br>"+
	    "<input type='button' name='submit' value='SOLICITAR EXAMEN' class='btnSolicitar' onclick='solicitarExamen()''><br><br></div>"; 	
	    autocomplete();
}

function examenDetalles(id){
	var doctor = document.getElementById("doctor").value;	
	contenedor = document.getElementById('contenedor');	 	
 	contenedor.innerHTML = "<div class='block'><p style='display: inline;'>RESULTADOS</p><br>"+
						"<input class='comentarioTest blockinput' type='text' placeholder='Agregar un comentario a los resultados del examen' id='comentario'><br><br>"+
						"<input type='button' class='inputComentario' onclick='addComentario("+id+")'></div>"+
						"<input type='number' id='folio' value="+id+" hidden>";	


	commentTestAjax = new XMLHttpRequest();
	commentTestAjax.open('GET','../PHP/comentarios.php',true);
	commentTestAjax.send();
	commentTestAjax.onreadystatechange = function(){
		if (commentTestAjax.status == 200 && commentTestAjax.readyState == 4) {
			var comentarios = JSON.parse(commentTestAjax.responseText);					
			 for(var j = 0; j < comentarios.length; j++){
				 if(id == comentarios[j].folio){			 		
			 		 contenedor.innerHTML += "<div class='grid-item3'>"+comentarios[j].fecha + " | COMENTARIO: " + comentarios[j].comentario+"</div>";
			 	 }
			}			
		}

	} 	
	// contenedor.innerHTML += "<div class='grid-item3'> RESULTADOS EXAMEN: <input type='button' class='btnPDF' value='PDF' onclick='pdf()' href='../pdf/pdf.pdf' download></div>";		
	contenedor.innerHTML += "<div class='grid-item3'> RESULTADOS EXAMEN: <a style='text-decoration: none; text-align: center;' class='btnPDF' href='../pdf/pdf.pdf' download>PDF</a> </div>";		
 	testDetailAjax = new XMLHttpRequest();
	testDetailAjax.open('GET','../PHP/pacientesMD.php?doctor='+doctor,true);
	testDetailAjax.send();
	testDetailAjax.onreadystatechange = function(){
		if (testDetailAjax.status == 200 && testDetailAjax.readyState == 4) {
			pacH = JSON.parse(testDetailAjax.responseText);			
			 for(var j = 0; j < pacH.length; j++){
				 if(id == pacH[j].id_p){
			 contenedor = document.getElementById('contenedor');
			 contenedor.innerHTML += "<br><div class='grid-container'>"+
			 "<div class='grid-item'>Datos Generales Del paciente<br><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKPBeQ3oqDHkrWRmCqkb16rrv1ifyhlvjW_l9_pN58vlmSY4b3' class='ired'></img></div>"+
			 "<div class='grid-item'><br>Nombre<br>"+ pacH[j].nom_p +" "+ pacH[j].ape_p +"<br><br> Edad <br>"+ pacH[j].edad +"</div>"+
			 "<div class='grid-item'><br>Telefono y correo <br>"+ pacH[j].telefono +" "+ pacH[j].correo +"<br><br> Domicilio <br>"+ pacH[j].domicilio +"</div>"+
			 "<div class='grid-item'><br>Tipo de sangre <br>"+ pacH[j].t_sangre +"<br><br> Alergias <br>"+ pacH[j].alergia +"</div>"+
			 "</div>";
				 }
			}
			histo_medico(id);
			histo_examen(id);
		}
	}

}

function addComentario(id){
	var comentario = document.getElementById("comentario").value;	
    busqueda = new XMLHttpRequest();    
    busqueda.open('POST','../PHP/comentarExamen.php?comentario='+comentario+'&folio='+id);
    busqueda.send();
    busqueda.onreadystatechange = function(){
        if (busqueda.status == 200 && busqueda.readyState == 4) {
            examenDetalles(id);
		}
	}
}

function pdf(){
	alert("DESCARGA DE EXAMEN . . .");
}


function autocomplete(){
	var doctor = document.getElementById("doctor").value;	
	listaPacientesAjax = new XMLHttpRequest();
	listaPacientesAjax.open('GET','../PHP/autocompletar.php',true);
	listaPacientesAjax.send();
	listaPacientesAjax.onreadystatechange = function(){
		if (listaPacientesAjax.status == 200 && listaPacientesAjax.readyState == 4) {
			var lista = JSON.parse(listaPacientesAjax.responseText);
			var options='';					
			 for(var j = 0; j < lista.length; j++){			 	
				 if (lista[j].doctor == doctor) {
				 	options += '<option value="'+lista[j].Nom_P+'" />';
				 }
			}	
			document.getElementById('pacientesLista').innerHTML = options;		
		}

	} 	
}

function validateDataList() {
    var options = document.getElementById("pacientesLista").options;
    var result = false;
    for (var i = 0; i < options.length; i++) {
        if(document.getElementById("nombre").value == options[i].value) {
        result = true;
      }
    }    
    return result;
}
