var respuesta;
var n1, n2;
var operacion;
var temporizador;

function comenzar() {

    n1 = Math.random()*(10) + 1;
    n1 = parseInt(n1);
    n2 = Math.random()*(10) + 1;
    n2 = parseInt(n2);

    operacion = Math.random()*(4)+1;
    operacion = parseInt(operacion);
    switch (operacion) {
        case 1 : {
            operacion = "+";
            respuesta = n1+n2;
            break;
        }
        case 2 : {
            operacion = "-";
            respuesta = n1-n2;
            break;
        }
        case 3 : {
            operacion = "x";
            respuesta = n1*n2;
            break;
        }
        case 4 : {
            operacion = "/";
            respuesta = n1/n2;
            respuesta = parseFloat(respuesta).toFixed(1);
            break;
        }
    }

    document.getElementById("primerNumero").value = n1;
    document.getElementById("operador").value = operacion;
    document.getElementById("segundoNumero").value = n2;
    document.getElementById("respuesta").value = "";

    temporizador = setTimeout(responder, 4000);

}

function responder() {

    var numeroUsuario;
    numeroUsuario = document.getElementById("respuesta").value;
    numeroUsuario = parseFloat(numeroUsuario);

    if (isNaN(numeroUsuario)) {
        alert("Ingrese un número.");
    } else if (numeroUsuario == respuesta) {
        alert("¡Correcto!");
    } else {
        alert("Incorrecto\n\n" + n1 + " " + operacion + " " + n2 + " = " + respuesta);
    }

    clearTimeout(temporizador);

    comenzar();

}