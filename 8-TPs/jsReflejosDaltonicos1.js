var colorSecreto;
var tiempoInicio, tiempoFinal;
var temporizador, delay;

function comenzar() {

    document.getElementById("colorElegido").value = "";


    colorSecreto = Math.random()*(6)+1;
    colorSecreto = parseInt(colorSecreto);
    switch (colorSecreto) {
        case 1 : {
            colorSecreto = "Azul";
            break;
        }
        case 2 : {
            colorSecreto = "Amarillo";
            break;
        }
        case 3 : {
            colorSecreto = "Marrón";
            break;
        }
        case 4 : {
            colorSecreto = "Verde";
            break;
        }
        case 5 : {
            colorSecreto = "Celeste";
            break;
        }
        case 6 : {
            colorSecreto = "Rojo";
            break;
        }
    }

    delay = Math.random()*(10000-2000)+2000;

    temporizador = setTimeout(mostrar,delay);
}

function mostrar() {

    document.getElementById("colorElegido").value = colorSecreto;
    tiempoInicio = new Date();
    tiempoInicio = tiempoInicio.getTime();

}

function responder(color) {
    
    colorSecreto = colorSecreto.toLowerCase(colorSecreto);
    tiempoFinal = new Date();
    tiempoFinal = tiempoFinal.getTime();
    delay = tiempoFinal-tiempoInicio;          // reciclo delay

    if (color == colorSecreto) {
        alert("Tiempo de reacción: " + delay + " milisegundos");
    } else {
        alert("¡Color equivocado! :(");
    }

    comenzar();

}
