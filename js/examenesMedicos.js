

window.addEventListener("load", function(){   
    var name_input = document.getElementById('nombrePaciente');
    name_input.addEventListener("keyup", function(event){hinter(event)});
    window.hinterXHR = new XMLHttpRequest();
});


function hinter(event) {    
    var input = event.target;    
    var listaPacientes = document.getElementById('pacientes_list');    
    var min_characters = 0;
    if (input.value.length < min_characters ) { 
        return;
    } else {         
        window.hinterXHR.abort();
        window.hinterXHR.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {                
                var response = JSON.parse( this.responseText );                 
                listaPacientes.innerHTML = "";
                response.forEach(function(item) {                    
                    var option = document.createElement('option');
                    option.value = item;                    
                    listaPacientes.appendChild(option);
                });
            }
        };
        window.hinterXHR.open("GET", "../php/autocomplete.php?query=" + input.value, true);
        window.hinterXHR.send()
    }
}

function solicitarExamen(){

}