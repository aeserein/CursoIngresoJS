var temporizador ;
var contador = 0;
var tiempoInicio;
var tiempoFinal;


function inicio() {
	
	document.getElementById("secreto").style.visibility="hidden";
	temporizador = setTimeout(delay, 3000);
	
}

function delay() {

	document.getElementById("secreto").style.visibility="visible"; 
 	tiempoInicio =  new Date();
 	tiempoInicio = tiempoInicio.getTime();
   
}

function ContarMilisegundos() {
	tiempoFinal = new Date();
	tiempoFinal = tiempoFinal.getTime();
	resultado = tiempoFinal - tiempoInicio;
	alert("Su tiempo fue: " + resultado + " milisegundos.");

}