var temporizador ;

function inicio() {

	document.getElementById("secreto").style.visibility="hidden";
	temporizador = setTimeout(delay, 3000);
	
}

function delay() {

	document.getElementById("secreto").style.visibility="visible"; 
   
}

function fin() {

	clearTimeout(miIntervalo);

}