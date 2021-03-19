function validar(campo) {
    //var campo = document.getElementById("nombre");
    if (campo.value == null || campo.value.length == 0) {
        ///campo.style = "border-color: red";
        //campo.focus();
        //setTimeout("document.getElementById('nombre').focus();",1);        
        mostrarError(campo.id, "Error: Nombre vacío");        
    } else {
        //campo.style = "border-color: none";
        borrarError(campo.id);
    }
}

function mostrarError(id, mensaje) {
    document.getElementById("sp" + id).innerHTML = mensaje;
    setTimeout("document.getElementById('nombre').focus();",1);
}

function borrarError(id) {
    document.getElementById("sp" + id).innerHTML = "";
}