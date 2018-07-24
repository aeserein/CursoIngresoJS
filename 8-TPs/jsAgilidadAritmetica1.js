var respuesta;
var n1, n2;
var operacion;

function comenzar() {

    n1 = Math.random()*(11-1) + 1;
    n1 = parseInt(n1);
    n2 = Math.random()*(11-1) + 1;
    n2 = parseInt(n2);

    operacion = Math.random()*(5-1)+1;
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

}

function Responder() {

    var numeroUsuario;
    numeroUsuario = document.getElementById("respuesta").value;
    numeroUsuario = parseFloat(numeroUsuario);

    if (isNaN(numeroUsuario)) {
        alert("Ingrese un número primero");
    } else if (numeroUsuario == respuesta) {
        alert("¡Correcto!");
        comenzar();
    } else {
        alert("Incorrecto\n\n" + n1 + " " + operacion + " " + n2 + " = " + respuesta);
        comenzar();
    }

}