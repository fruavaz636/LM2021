function mostrarTablas(numero) {
    var resultado = document.getElementById("resultadoTabla");

    var texto = "<h4>Tabla del " + numero + "</h4>";

    for (let i = 1; i <= 10; i++){        
        texto = texto + numero + " x " + i + " = " + (numero*i) + "<br/>";           
    }

    for (let i = 1; i <= 10; i++) {
        texto = texto + "<h4>Tabla del " + i + "</h4>";
        for (let j = 1; j <= 10; j++) {
            texto = texto + i + " x " + j + " = " + (i*j) + "<br/>";                                   
        }        
    }

    resultado.innerHTML = texto;
}