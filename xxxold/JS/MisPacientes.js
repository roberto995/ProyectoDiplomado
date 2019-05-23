function pacientes(){
	document.getElementById('contenedor').innerHTML="";
	document.getElementById('grid-container2').innerHTML="HISTORIAL CLÍNICO";
	document.getElementById('grid-container3').innerHTML="EXAMENES MÉDICOS";
	document.getElementById('grid-container2').style.visibility = "hidden";
	document.getElementById('grid-container3').style.visibility = "hidden";
	//AJAX,
	paciente = new XMLHttpRequest();
	paciente.open('GET','../PHP/pacientes.php',true);
	paciente.send();
	paciente.onreadystatechange = function(){
		if (paciente.status == 200 && paciente.readyState == 4) {
			pac = JSON.parse(paciente.responseText);
			console.log(pac);
			 for(var i = 0; i < pac.length; i++){
			 contenedor = document.getElementById('contenedor');	
			 contenedor.innerHTML += "<div class='ficha'><center>" +
			 "<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKPBeQ3oqDHkrWRmCqkb16rrv1ifyhlvjW_l9_pN58vlmSY4b3' width='100' heigth='200'><br>"+
									"<output><b>" + pac[i].Nom_P+"</b></output>"+
									"<br>"+ pac[i].Ape_P +
									"<br><p style='color:blue'>Diagnostico: <b>" + pac[i].Diagnostico + "</b></p><br>"+
									"Habitacion: "+ pac[i].Habi_con +"<br><button class='Vhis' onclick='histo("+ pac[i].Id_P +")'>Ver Historial</button></center></div>";
			}
		}
	}
	console.log("algo");
}

function histo(id){
	document.getElementById('contenedor').innerHTML="";
	document.getElementById('grid-container2').style.visibility = "visible";
	document.getElementById('grid-container3').style.visibility = "visible";
	pacienteH = new XMLHttpRequest();
	pacienteH.open('GET','../PHP/pacientesMD.php',true);
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
			 "</div>";
				 }
			}
			histo_medico(id);
			histo_examen(id);
		}
	}
	console.log("Mas detalles");
}

function histo_medico(idp){
	pacienteHM = new XMLHttpRequest();
	pacienteHM.open('GET','../PHP/pacientesHM.php',true);
	pacienteHM.send();
	pacienteHM.onreadystatechange = function(){
		if (pacienteHM.status == 200 && pacienteHM.readyState == 4) {
			pacHM = JSON.parse(pacienteHM.responseText);
			console.log(pacHM);
			 for(var k = 0; k < pacHM.length; k++){
				 if(idp == pacHM[k].id_p){
					contenedo = document.getElementById('grid-container2');
					contenedo.innerHTML += "<div class='grid-item2 id='grid-item'>" + 
					pacHM[k].fecha + " | " + pacHM[k].comentarios + "</div><br>";
				}
			}
		}
	}
	console.log("Mas detalles del historial");
}

function histo_examen(ide){
	pacienteEM = new XMLHttpRequest();
	pacienteEM.open('GET','../PHP/pacientesEM.php',true);
	pacienteEM.send();
	pacienteEM.onreadystatechange = function(){
		if (pacienteEM.status == 200 && pacienteEM.readyState == 4) {
			pacEM = JSON.parse(pacienteEM.responseText);
			console.log(pacEM);
			 for(var m = 0; m < pacEM.length; m++){
				 if(ide == pacEM[m].Id_P){
					contenedor = document.getElementById('grid-container3');
					contenedor.innerHTML += "<div class='grid-item3'>" + 
					pacEM[m].Fecha_e + " | " +"Folio: " + pacEM[m].Id_E + " | "+ pacEM[m].Nom_E+ 
					'<input type="button" id="bstatus" name="bstatus" class="bstatus" value="'+pacEM[m].status+'"></div>';
				 }
			}bcolor();
		}
	}
}

function bcolor() {
	if (document.getElementById('bstatus').value == "Pendiente"){
		document.getElementById('bstatus').style.backgroundColor = '#F3B063';
		document.getElementById('bstatus').disabled = true;
	}			
}
