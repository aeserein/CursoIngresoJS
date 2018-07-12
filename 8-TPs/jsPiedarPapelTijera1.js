var eleccionMaquina;

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
    console.info(eleccionMaquina);
}

function piedra() {
    switch (eleccionMaquina) {
        case "Piedra" : {
            alert("¡Piedra!.\n\nEmpate");
            break;
        }
        case "Papel" : {
            alert("¡Papel!\n\nPerdiste :D");
            break;
        }
        case "Tijera" : {
            alert("¡Tijera!\n\nGanaste :(");
            break;
        }
    }
    comenzar();
}

function papel() {
    switch (eleccionMaquina) {
        case "Piedra" : {
            alert("¡Piedra!.\n\nGanaste :(");
            break;
        }
        case "Papel" : {
            alert("¡Papel!\n\nEmpate");
            break;
        }
        case "Tijera" : {
            alert("¡Tijera!\n\nPerdiste :D");
            break;
        }
    }
    comenzar();
}

function tijera() {
    switch (eleccionMaquina) {
        case "Piedra" : {
            alert("¡Piedra!.\n\nPerdiste :D");
            break;
        }
        case "Papel" : {
            alert("¡Papel!\n\nGanaste :(");
            break;
        }
        case "Tijera" : {
            alert("¡Tijera!\n\nEmpate");
            break;
        }
    }
    comenzar();
}