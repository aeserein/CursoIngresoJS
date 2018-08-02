
function mostrar() {

    var ancho, largo, perimetro;

    while (ancho<0 || isNaN(ancho) || ancho==undefined) {
        ancho = prompt("Ingrese ancho del rectángulo");
        ancho = parseInt(ancho);
    }
    while (largo<0 || isNaN(largo) || largo==undefined) {
        largo = prompt("Ingrese largo del rectángulo");
        largo = parseInt(largo);
    }

    perimetro = (ancho*2) + (largo*2);
    
    alert("Perímetro: " + perimetro);

}
