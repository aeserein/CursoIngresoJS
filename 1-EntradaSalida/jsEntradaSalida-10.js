function mostrarAumento() {

    var importe = parseInt(document.getElementById("importe").value);
    var importeDescontado = importe*0.75;
    document.getElementById("resultado").value = importeDescontado;	
    
}
