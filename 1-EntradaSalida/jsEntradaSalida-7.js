function getNumeros() {
    var numero1 = parseInt(document.getElementById("numeroUno").value);
    var numero2 = parseInt(document.getElementById("numeroDos").value);
    return { numero1, numero2 };
}

function sumar() {
    var { numero1, numero2 } = getNumeros();
	alert(numero1 + " + " + numero2 + " = " + (numero1+numero2));
}

function restar() {
    var { numero1, numero2 } = getNumeros();
	alert(numero1 + " - " + numero2 + " = " + (numero1-numero2));
}

function multiplicar() {
    var { numero1, numero2 } = getNumeros(); 
    alert(numero1 + " × " + numero2 + " = " + (numero1*numero2));
}

function dividir() {
    var { numero1, numero2 } = getNumeros();
    alert(numero1 + " ÷ " + numero2 + " = " + (numero1/numero2));	
}
