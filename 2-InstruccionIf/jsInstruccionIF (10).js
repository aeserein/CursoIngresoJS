function mostrar() {
	var nota = parseInt(Math.random()*(11-1)+1);
	if (nota >=9) {
		alert("Nota: " + nota + ".\n\nExcelente");
	} else if (nota >=4) {
		alert("Nota: " + nota + ".\n\nAprobado");
	} else {
		alert("Nota: " + nota + ".\n\nVamos, la próxima se puede");
	}
}