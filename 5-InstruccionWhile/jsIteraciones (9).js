function mostrar() {

	var numero = [];
	var menor = 1000000;
	var mayor = -1000000;
	var respuesta = "si";
 
	while (respuesta == "si" || respuesta == "sí") {

		numero = prompt("Ingrese un número.");
		numero = parseInt(numero);

		if (numero > mayor) {
			mayor = numero;
		}
		
		if (numero < menor) {
			menor = numero;
		}

		respuesta = prompt("¿Desea ingresar más números?");
		respuesta = respuesta.toLowerCase(respuesta);
	}

	document.getElementById("maximo").value = mayor;
	document.getElementById("minimo").value = menor;

}