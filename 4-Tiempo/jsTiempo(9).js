var temporizador ;
var tiempoInicio;
var tiempoFinal;


function inicio() {

	var random = Math.floor(Math.random()*10000 )+2000;
	temporizador = setTimeout(delay, random);
	
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
	alert("Su tiempo fue: " + resultado);

}