var miIntervalo ;


function inicio() {

	miIntervalo = setInterval(delay, 3000);
	
}

function delay() {

    alert("Bienvenido a la UTN FRA");
    
}

function fin(){
	
	clearTimeout(miIntervalo);

}