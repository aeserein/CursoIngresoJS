function mostrar() {

	document.getElementById("suma").value = "La suma de los positivos";
	document.getElementById("producto").value = "La multiplicación de los negativos";

	var cPositivo = 0;
	var cNegativo = 1;
	var numeros = [];
	var dArray = 0;

	while (numeros[dArray] != NaN) {

		numeros[dArray] = prompt("Ingrese un número.");

		if (numeros[dArray] != "") {

			numeros[dArray] = parseInt(numeros[dArray]);

			if (numeros[dArray] >= 0) {
				cPositivo += numeros[dArray];
			} else {
				cNegativo *= numeros[dArray];
			}

		} else {
			break;
		}

	}
	
	document.getElementById("suma").value = cPositivo;
	document.getElementById("producto").value = cNegativo;

}