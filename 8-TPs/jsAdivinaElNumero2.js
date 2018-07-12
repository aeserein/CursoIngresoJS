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
	switch (contadorIntentos) {
		case 1 : {
			alert("¡Usted es un psíquico! Adivinó el número en solo un intento.\n\nEl número secreto es: " + numeroSecreto + ".");
			break;
		}
		case 2 : {
			alert("¡Excelente intuición! Adivinó el número en solo " + contadorIntentos + " intentos.\n\nEl número secreto es: " + numeroSecreto + ".");
			break;			
		}
		case 3: {
			alert("Esto es suerte. Adivinó el número en " + contadorIntentos + " intentos.\n\nEl número secreto es: " + numeroSecreto + ".");
			break;
		}
		case 4 : {
			alert("Excelente técnica. Adivinó el número en " + contadorIntentos + " intentos.\n\nEl número secreto es: " + numeroSecreto + ".");
			break;
		}
		case 5 : {
			alert("Usted está en la media. Adivinó el número en " + contadorIntentos + " intentos.\n\nEl número secreto es: " + numeroSecreto + ".");
			break;
		}
		case 6 :
		case 7 :
		case 8 :
		case 9 :
		case 10 : {
			alert("Falta técnica. Adivinó el número en " + contadorIntentos + " intentos.\n\nEl número secreto es: " + numeroSecreto + ".");
			break;
		}
		default : {
			alert("¡Afortunado en el amor! Adivinó el número en " + contadorIntentos + " intentos.\n\nEl número secreto es: " + numeroSecreto + ".");
			break;
		}
	}
  } else if (numero>numeroSecreto) {
    alert("Se pasó.");
  } else {
    alert("Más alto.")
  }
}