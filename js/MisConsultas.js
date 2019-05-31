function consultas(){
	var doctor = document.getElementById("doctor").value;
	document.getElementById('titulo').innerHTML="Mis Consultas";
	document.getElementById('contenedor').innerHTML="";
	document.getElementById('grid-container2').innerHTML="HISTORIAL CLÍNICO <br>"+
														"<input type='text' name='mensaje' id='mensaje' class='input' placeholder='Agregar un comentario al historial clinico del paciente'>"+
														"<button class='boton' onclick='insertar()'>Enviar</button>";
	document.getElementById('grid-container3').innerHTML="EXAMENES MÉDICOS";
	document.getElementById('grid-container2').style.visibility = "hidden";
    document.getElementById('grid-container3').style.visibility = "hidden";
    var date=new Date();
	//AJAX,
	paciente = new XMLHttpRequest();
	paciente.open('GET','../php/pacientes.php?doctor='+doctor,true);
	paciente.send();
	paciente.onreadystatechange = function(){
		if (paciente.status == 200 && paciente.readyState == 4) {
			pac = JSON.parse(paciente.responseText);            
			 for(var i = 0; i < pac.length; i++){
			 contenedor = document.getElementById('contenedor');	
                 var array_fecha= pac[i].Hora.split(":");
                 var horaCons=parseInt(array_fecha[0]);
                 var dhora=parseInt(horaCons-date.getHours());
                 var fechaAc=date.getFullYear()+"/"+date.getMonth()+"/"+date.getDay();
                 var verhisto="";
                 
			 contenedor.innerHTML += "<div class='ficha'><center>" +
			 "<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKPBeQ3oqDHkrWRmCqkb16rrv1ifyhlvjW_l9_pN58vlmSY4b3' width='100' heigth='200'><br>"+"<button class='pointsDetail'></button>"+
									"<output><b>" + pac[i].Nom_P+"</b></output>"+
									"<br>"+ pac[i].Ape_P +
									"<p style='color:blue'>Fecha y Hora:<p>"+ pac[i].Fecha+" "+pac[i].Hora+"<br>Consultorio: "+pac[i].Habi_con+"<br><button class='Vhis'"+ verhisto+" id='"+i+"' onclick='mDeta("+ pac[i].Id_P +")'>Ver Historial</button></center></div>";
             if (dhora<2) {
                if(dhora>0){
                     document.getElementById(i).disabled=false; 
                }   
             }else{
                     document.getElementById(i).disabled=true;
             }
                  
			}
		}
    }
	document.getElementById('contenedor').innerHTML+="<div class='ncon'><center><br><br>"+
													"<button onclick='nuevaCons()'  class='nconsulta'></button>"+
													"<br>Agregar una <br>nueva consulta <br>"
													+ "</center></div>";
	console.log("Consultas");
}


function submt(){
    var nombre = document.getElementById("nombre").value;
    var fecha = document.getElementById("fecha").value;
    var hora = document.getElementById("hora").value;
    var numero = document.getElementById("numero").value;
    var consultorio = document.getElementById("consultorio").value;
	var estudios = document.getElementById("SolEsudios").value;
	var doctor = document.getElementById("doctor").value;

    busqueda = new XMLHttpRequest();
    busqueda.open('GET','../php/NuevaConsultaInsert.php?nombre='+nombre+'&fecha='+fecha+'&hora='+hora+'&numero='+numero+'&consultorio='+consultorio+'&estudios='+estudios+'&doctor='+doctor);
    busqueda.send();
    busqueda.onreadystatechange = function(){
        if (busqueda.status == 200 && busqueda.readyState == 4) {
            alert("tus datos han sido guardados"); 
		}
	}
//    console.log(nombre)
    var nombre = document.getElementById("nombre").value="";
    var fecha = document.getElementById("fecha").value="";
    var hora = document.getElementById("hora").value="";
    var numero = document.getElementById("numero").value="";
    var consultorio = document.getElementById("consultorio").value="";
    var estudios = document.getElementById("SolEsudios").value="";
}

function nuevaCons(){
    document.getElementById("contenedor").innerHTML="";
    document.getElementById("contenedor").style.height="50%";
    document.getElementById("contenedor").style.width="75%";
    nconsl= document.getElementById("contenedor");
    nconsl.innerHTML+= "<div class='div1'>"+
    "<p class='clear'>DATOS DE CONSULTA</p>"+
    'Nombre del paciente'+
    "<input class='clear' type='text' id='nombre' list='pacientesLista' name='nombre' placeholder='Nombre'>"+
    "<datalist id='pacientesLista'></datalist>"+
    "<p class='pderecha'>Fecha y hora de la consulta</p>"+
    "<p class='pizq'>Telefono de contacto</p>"+
    "<input class='fechour' type='date' id='fecha' name='fecha' placeholder='Ingresa la fecha'>"+
    "<input class='fechour' type='time' id='hora' name='hora' placeholder='Ingresa la hora'>"+
    "<input class='espacio' type='text' id='numero' name='numero' placeholder='XX-XX-XX-XX-XX'>"+
    "<p class='pderecha'>Consultorio</p>"+
    "<p class='pizq'>Estudios Solicitados</p>"+
    "<select class='espacio2' id='consultorio' name='consultorio' >"+
    "<option value='default'>Agregar un consultorio</option>"+
    "<option value='1'>1</option>"+
    "<option value='2'>2</option>"+
    "<option value='3'>3</option>"+
    "<option value='4'>4</option>"+
    "<option value='5'>5</option>"+
    "<option value='6'>6</option>"+
    "<option value='7'>7</option>"+
    "<option value='8'>8</option>"+
    "<option value='9'>9</option>"+
    "<option value='1'>10</option>"+
    "</select>"+
    "<input class='espacio2' type='text' id='SolEsudios' name='SolEsudios' placeholder='Escribir estudio si es que se un solicito'>"+
        "<br>"+
        "<br>"+
    "<button class='button' onclick='submt()'>AGENDAR CONSULTA</button>"+
   "<br>"+
   "<br>"+
   "<br>"+"</div>";
   autocomplete();
		
}

function mDeta(id){
	var doctor = document.getElementById("doctor").value;
	document.getElementById('contenedor').innerHTML="";
	document.getElementById('grid-container2').style.visibility = "visible";
	document.getElementById('grid-container3').style.visibility = "visible";
	pacienteH = new XMLHttpRequest();
	pacienteH.open('GET','../php/pacientesMD.php?doctor='+doctor,true);
	pacienteH.send();
	pacienteH.onreadystatechange = function(){
		if (pacienteH.status == 200 && pacienteH.readyState == 4) {
			pacH = JSON.parse(pacienteH.responseText);
			console.log(pacH);
			 for(var j = 0; j < pacH.length; j++){
				 if(id == pacH[j].id_p){
			 contenedor = document.getElementById('contenedor');
			 contenedor.innerHTML += "<div class='grid-container'>"+
			 "<div class='grid-item'>Datos Generales Del paciente<br><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKPBeQ3oqDHkrWRmCqkb16rrv1ifyhlvjW_l9_pN58vlmSY4b3' class='ired'></img></div>"+
			 "<div class='grid-item'><br>Nombre<br>"+ pacH[j].nom_p +" "+ pacH[j].ape_p +"<br><br> Edad <br>"+ pacH[j].edad +"</div>"+
			 "<div class='grid-item'><br>Telefono y correo <br>"+ pacH[j].telefono +" "+ pacH[j].correo +"<br><br> Domicilio <br>"+ pacH[j].domicilio +"</div>"+
			 "<div class='grid-item'><br>Tipo de sangre <br>"+ pacH[j].t_sangre +"<br><br> Alergias <br>"+ pacH[j].alergia +"</div>"+
			 "</div>"+
            "<input type='text' name='persona' id='persona' value='"+pacH[j].id_p+"' style='visibility:hidden'></div>";
				 }
			}
			histo_medico(id);
			histo_examen(id);
		}
	}
	
}

function histo_medico(idp){
	var doctor = document.getElementById("doctor").value;
	pacienteHM = new XMLHttpRequest();
	pacienteHM.open('GET','../php/pacientesHM.php?doctor='+doctor,true);
	pacienteHM.send();
	pacienteHM.onreadystatechange = function(){
		if (pacienteHM.status == 200 && pacienteHM.readyState == 4) {
			pacHM = JSON.parse(pacienteHM.responseText);			
			 for(var k = 0; k < pacHM.length; k++){
				 if(idp == pacHM[k].id_p){
					contenedo = document.getElementById('grid-container2');
					contenedo.innerHTML += "<div class='grid-item2 id='grid-item'>" + 
					pacHM[k].fecha + " | " + pacHM[k].comentarios + "</div><br>";
				}
			}
		}
	}
}

function histo_examen(ide){
	var doctor = document.getElementById("doctor").value;
	pacienteEM = new XMLHttpRequest();
	pacienteEM.open('GET','../php/pacientesEM.php?doctor='+doctor,true);
	pacienteEM.send();
	pacienteEM.onreadystatechange = function(){
		if (pacienteEM.status == 200 && pacienteEM.readyState == 4) {
			pacEM = JSON.parse(pacienteEM.responseText);			
			 for(var m = 0; m < pacEM.length; m++){
				 if(ide == pacEM[m].Id_P){
					
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
					contenedor = document.getElementById('grid-container3');
					contenedor.innerHTML += "<div class='grid-item3'>" + 
					pacEM[m].Fecha + " | " +"Folio: " + pacEM[m].Id_E + " | "+ pacEM[m].Nom_E+ 
					"<input type='button' id='bstatus' name='bstatus' class='bstatus "+ color + "' value="+pacEM[m].status+"'></div>";
				 }
			}
		}
	} 
}

function insertar(){
   
    var mensaje = document.getElementById("mensaje").value;
    var persona = document.getElementById("persona").value;
    var doctor = document.getElementById("doctor").value;
    insertar = new XMLHttpRequest();
    insertar.open('GET','../php/insertar.php?persona='+persona+'&mensaje='+mensaje+'&doctor='+doctor);
    insertar.send();
    insertar.onreadystatechange = function(){
        if (insertar.status == 200 && insertar.readyState == 4) {
			misDatos = JSON.parse(insertar.responseText);
			console.log(misDatos)
			contenedor = document.getElementById('grid-container2');
			contenedor.innerHTML += "<div class='grid-item2 id='grid-item'>" + 
			misDatos.fecha_actual + " | " + misDatos.mensaje + "</div><br>";
		}
	}
    var mensaje = document.getElementById("mensaje").value="";
    
}

function autocomplete(){
	var doctor = document.getElementById("doctor").value;	
	listaPacientesAjax = new XMLHttpRequest();
	listaPacientesAjax.open('GET','../php/autocompletar.php',true);
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