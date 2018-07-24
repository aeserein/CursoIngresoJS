function mostrar() {

	document.getElementById('suma').value = "La suma acumulada";
	document.getElementById('promedio').value = "El promedio";
	
	var contador = 0;
	var acumulador = 0;
	var numero = [];

	while (numero[contador] != NaN) {

		numero[contador] = prompt("Ingrese un número.");

		if (numero[contador] == "") {
			break;
		} else {
			numero[contador] = parseInt(numero[contador]);
			acumulador += numero[contador];
			contador++;
		} // con "" funciona. Con numero[contador] == NaN no funciona

	}

	document.getElementById('suma').value = acumulador;
	document.getElementById('promedio').value = acumulador/contador;

}