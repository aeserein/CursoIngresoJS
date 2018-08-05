function mostrar() {

	document.getElementById('suma').value = "La suma acumulada";
	document.getElementById('promedio').value = "El promedio";
	
	var acumulador = 0;
	var numero;
	var respuesta = "si";
	var cNumeros = 0;

	while (respuesta=="si" || respuesta=="sí") {

		numero = prompt("Ingrese un número.");
		numero = parseInt(numero);

		acumulador += numero;
		
		respuesta = prompt("¿Desea ingresar más números?");
		cNumeros++;
		
	}

	document.getElementById('suma').value = acumulador;
	document.getElementById('promedio').value = acumulador/cNumeros;

}