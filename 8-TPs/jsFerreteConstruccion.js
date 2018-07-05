var largo,ancho,radio;

function aceptarValores() {
    largo = parseInt(document.getElementById("Largo").value);
    ancho = parseInt(document.getElementById("Ancho").value);
    radio = parseInt(document.getElementById("Radio").value);
}

function Rectangulo () {
    aceptarValores();
    var perimetro = (largo*2) + (ancho*2)
    alert( ( perimetro *3) +" metros de alambre");
}

function Circulo () {
	aceptarValores();
    var perimetroCircular = 2*Math.PI*radio;
    alert( ( perimetroCircular*3 ) + " metros de alambre");
}

function Materiales () {
	aceptarValores();
    var area = largo*ancho;
    var cemento = 2*area;
    var cal = 3*area;
    alert(cemento + " bolsas de cemento.\n\n" + cal + " bolsas de cal.");
}