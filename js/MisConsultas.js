function consultas(){
	document.getElementById('contenedor').innerHTML="";
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
	document.getElementById('contenedor').innerHTML+="<div class='ncon' onclick='newcon'><center><br><br>"+
													"<img src = 'https://image.flaticon.com/icons/svg/25/25340.svg' width='100' heigth='200'>"+
													"<br>Agregar una <br>nueva consulta <br>"
													+ "</center></div>";
	console.log("Consultas");
}