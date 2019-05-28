function VerificarSesion(){	

	ajaxSesion = new XMLHttpRequest();
	ajaxSesion.open('GET','php/sesion.php',true);
	ajaxSesion.send();
	ajaxSesion.onreadystatechange = function(){
		if (ajaxSesion.status == 200 && ajaxSesion.readyState == 4) {			
			response = ajaxSesion.responseText;
			console.log(response);
			if (response == 'success') {

			}	
			else{

			}	
		}
		
	}
}

function login(){
	var usuario = document.getElementById("usr").value;
	var password = document.getElementById("pass").value;	

	ajaxIniciarSesion = new XMLHttpRequest();	
	ajaxIniciarSesion.open('GET','php/sesion.php?isesion=&usuario='+usuario+'&password='+password);
	ajaxIniciarSesion.send();
	ajaxIniciarSesion.onreadystatechange = function(){
		if (ajaxIniciarSesion.status == 200 && ajaxIniciarSesion.readyState == 4) {							
			if (ajaxIniciarSesion.responseText == 'error') {
				document.getElementById("nomatch").style.display = "block";
			}
			var obj = JSON.parse(ajaxIniciarSesion.responseText);			
			console.log(obj);
			
		}
	}	

}

function examenesMedicos(){	
	contenedor = document.getElementById('contenedor');	
 	contenedor.innerHTML = "<iframe class='frameContent' src='examenesMedicos.html' scrolling='no'></iframe>";
}