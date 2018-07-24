function mostrar() {

	var numeros = [];
	var dArray = 0;
	var menor = 0;
	var mayor = 0;
	var respuesta = "si";
 
	while (respuesta == "si" || respuesta == "sí") {

		numeros[dArray]	= prompt("Ingrese un número.");
		numeros[dArray] = parseInt(numeros[dArray]);

		if (dArray == 0) {
			mayor = numeros[dArray];
			menor = numeros[dArray];
		}

		if (numeros[dArray] > mayor) {

			mayor = numeros[dArray];

		} else if (numeros[dArray] < menor) {

			menor = numeros[dArray];

		}

		dArray++;
		respuesta = prompt("¿Desea ingresar más números?");
		respuesta = respuesta.toLowerCase(respuesta);
	}

	document.getElementById("maximo").value = mayor;
	document.getElementById("minimo").value = menor;

}