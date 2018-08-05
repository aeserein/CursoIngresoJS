function mostrar() {

	document.getElementById("suma").value = "La suma de los positivos";
	document.getElementById("producto").value = "La multiplicación de los negativos";

	var cPositivo = 0;
	var cNegativo = 1;
	var numeros;
	var respuesta = "si";

	while (respuesta=="si") {

		numeros = prompt("Ingrese un número.");
		numeros = parseInt(numeros);

		if (numeros >= 0) {
			cPositivo += numeros;
		} else {
			cNegativo *= numeros;
		}

		respuesta = prompt("¿Desea ingresar más números?");

	}
	
	document.getElementById("suma").value = cPositivo;
	document.getElementById("producto").value = cNegativo;

}