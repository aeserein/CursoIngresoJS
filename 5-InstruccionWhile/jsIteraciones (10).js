var sPositivos, sNegativos;
var cPositivos, cNegativos, cCeros;
var cPares;
var pPositivos, pNegativos;
var difPosNeg;

function mostrar() {

	var respuesta = "SÍ";
	var numero = [];
	var dArray = 0
	sPositivos = 0;
	sNegativos = 0;
	cPositivos = 0;
	cNegativos = 0;
	cCeros = 0;
	cPares = 0;

	while (respuesta == "SI" || respuesta == "SÍ") {
		
		numero[dArray] = prompt("Ingrese un número");
		
		posNegCero(numero[dArray]);
		par(numero[dArray]);

		respuesta = prompt("¿Desea ingresar otro número?");
		respuesta = respuesta.toUpperCase(respuesta);

	}

	pPositivos = sPositivos / cPositivos;
	pNegativos = sNegativos / cNegativos;
	difPosNeg = sPositivos - sNegativos;

	// ????????????

	document.writeln("Suma de númeors positivos: " + sPositivos);
	document.writeln("Suma de números negativos: " + sNegativos);

	Document.writeln // ????????????

	// ?????????????????????

}

function posNegCero(n) {	

	if (n == 0) {

		cCeros++;

	} else if (n > 0) {

		sPositivos += n;
		cPositivos++;

	} else {

		sNegativos -= n;
		cNegativos++;

	}
}

function par(n) {
	if (n%2 == 0){
		cPares++;
	}
}