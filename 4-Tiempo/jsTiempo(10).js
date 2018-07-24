var temporizador ;
var contador=0;
var tiempoInicio;
var tiempoFinal;


function inicio() {
	
	document.getElementById("secreto").style.visibility="hidden";
	var random = Math.floor(Math.random()*10000 )+2000;
	temporizador = setTimeout(delay, random);
	
}

function delay() {

	document.getElementById("secreto").style.visibility="visible"; 
 	tiempoInicio=  new Date();
 	tiempoInicio=tiempoInicio.getTime();
   
}
function ContarMilisegundos()
{
	tiempoFinal= new Date();
	tiempoFinal=tiempoFinal.getTime();
	resultado=tiempoFinal-tiempoInicio;

		if(resultado<500)
		{
			alert("Usted es Flash: "+resultado);
		}
		else if(resultado<1000)
		{
			alert("bien ahí, segui practicando: "+resultado);	
		}
		else if(resultado<3000)
		{
			alert("tenemos los deditos duros???: "+resultado);
		}
		else
		{
			alert("Te quedastes dormido???: "+resultado);
		}

	inicio();
}