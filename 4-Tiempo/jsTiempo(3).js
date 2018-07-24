var miIntervalo ;
var contador = 0;

function inicio() {

	miIntervalo = setInterval(delay, 2000);
	
}

function delay() {

	contador++;
    alert("Bienvenido a la UTN FRA\n\nCantidad = " + contador);
    
}

function fin() {

	clearInterval(miIntervalo);

}