function mostrar() {

	var nSecreto,numero;
	nSecreto = Math.random()*10 + 1;
	nSecreto = parseInt(nSecreto);
	numero = 0;

	while (numero != nSecreto) {
		numero = prompt("Ingrese un número entre 1 y 10.");
		numero = parseInt(numero);
	}

	document.getElementById("Numero").value = numero;

}