var eleccionMaquina;
var empates = 0;
var ganadas = 0;
var perdidas = 0;

function comenzar() {
    eleccionMaquina = Math.random()*(4-1)+1;
    eleccionMaquina = parseInt(eleccionMaquina);
    switch(eleccionMaquina) {
        case 1 : {
            eleccionMaquina = "Piedra";
            break;
        }
        case 2 : {
            eleccionMaquina = "Papel";
            break;
        }
        case 3 : {
            eleccionMaquina = "Tijera";
            break;
        }
	}
	mostrarResultado();
	console.info("- " + eleccionMaquina + " -");
}

function piedra() {
    switch (eleccionMaquina) {
        case "Piedra" : {
			alert("¡Piedra!\n\nEmpate");
			empates++;
            break;
        }
        case "Papel" : {
			alert("¡Papel!\n\nPerdiste :D");
			perdidas++;
            break;
        }
        case "Tijera" : {
			alert("¡Tijera!\n\nGanaste :(");
			ganadas++;
            break;
        }
	}
	mostrarResultado();
    comenzar();
}

function papel() {
    switch (eleccionMaquina) {
        case "Piedra" : {
			alert("¡Piedra!\n\nGanaste :(");
			ganadas++;
            break;
        }
        case "Papel" : {
			alert("¡Papel!\n\nEmpate");
			empates++;
            break;
        }
        case "Tijera" : {
			alert("¡Tijera!\n\nPerdiste :D");
			perdidas++;
            break;
        }
	}
	mostrarResultado();
    comenzar();
}

function tijera() {
    switch (eleccionMaquina) {
        case "Piedra" : {
			alert("¡Piedra!\n\nPerdiste :D");
			perdidas++;
            break;
        }
        case "Papel" : {
			alert("¡Papel!\n\nGanaste :(");
			ganadas++;
            break;
        }
        case "Tijera" : {
			alert("¡Tijera!\n\nEmpate");
			empates++;
            break;
        }
	}
	mostrarResultado();
    comenzar();
}

function mostrarResultado() {
	document.getElementById("ganadas").value = "Victorias: " + ganadas;
	document.getElementById("perdidas").value = "Derrotas: " + perdidas;
	document.getElementById("empatadas").value = "Empates: " + empates;
}