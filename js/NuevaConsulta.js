function submt(){
    var nombre = document.getElementById("nombre").value;
    var fecha = document.getElementById("fecha").value;
    var hora = document.getElementById("hora").value;
    var numero = document.getElementById("numero").value;
    var consultorio = document.getElementById("consultorio").value;
    var estudios = document.getElementById("SolEsudios").value;

    busqueda = new XMLHttpRequest();
    busqueda.open('GET','../PHP/NuevaConsultaInsert.php?nombre='+nombre+'&fecha='+fecha+'&hora='+hora+'&numero='+numero+'&consultorio='+consultorio+'&estudios='+estudios);
    busqueda.send();
    busqueda.onreadystatechange = function(){
        if (busqueda.status == 200 && busqueda.readyState == 4) {
            alert("tus datos han sido guardados"); 
		}
	}
    var nombre = document.getElementById("nombre").value="";
    var fecha = document.getElementById("fecha").value="";
    var hora = document.getElementById("hora").value="";
    var numero = document.getElementById("numero").value="";
    var consultorio = document.getElementById("consultorio").value="";
    var estudios = document.getElementById("SolEsudios").value="";
}