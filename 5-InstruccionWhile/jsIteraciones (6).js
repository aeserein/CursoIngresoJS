function mostrar() {

	document.getElementById('suma').value = "La suma acumulada";
	document.getElementById('promedio').value = "El promedio";
	
	var contador = 0;
	var acumulador = 0;
	var numero = [];

	while (contador < 5) {
		numero[contador] = prompt("Ingrese un número.");
		numero[contador] = parseInt(numero[contador]);
		acumulador += numero[contador];
		contador++;
	}

	document.getElementById('suma').value = acumulador;
	document.getElementById('promedio').value = acumulador/5;

}