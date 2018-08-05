var numeroSecreto; 
var contadorIntentos;

function comenzar() {
  numeroSecreto = Math.random()*(101-1)+1;
  numeroSecreto = parseInt(numeroSecreto);
  contadorIntentos = 0;
}

function verificar() {
  var numero = document.getElementById("numero").value;
  contadorIntentos++;
  if (contadorIntentos==1) {
    document.getElementById("intentos").value = (contadorIntentos + " intento");
  } else {
    document.getElementById("intentos").value = (contadorIntentos + " intentos");
  }
  if (numero==numeroSecreto) {
    if (contadorIntentos==1) {
      alert("¡Ha adivinado el número, y en solo " + contadorIntentos + " intento!\n\nEl número secreto es: " + numeroSecreto + ".");
    } else {
      alert("¡Ha adivinado el número, y en solo " + contadorIntentos + " intentos!\n\nEl número secreto es: " + numeroSecreto + ".");
    }
  } else if (numero>numeroSecreto) {
    alert("Se pasó.");
  } else {
    alert("Más alto.")
  }
}