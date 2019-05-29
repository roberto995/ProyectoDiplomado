function addComentario(){                                 
    var comentario = document.getElementById("comentarioExamen").value; 
    addComentarioAjax = new XMLHttpRequest();   
    addComentarioAjax.open('POST','php/pacientesEM.php?comentario=&folio='+'123456'+'&comentario='+comentario);
    addComentarioAjax.send();
    addComentarioAjax.onreadystatechange = function(){
        if (addComentarioAjax.status == 200 && addComentarioAjax.readyState == 4) {                         
            if (addComentarioAjax.responseText == 'error') { 

            }
        }
    }
}