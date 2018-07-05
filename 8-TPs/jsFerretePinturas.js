function FahrenheitCentigrados () {
	var temperatura = parseInt(document.getElementById("Temperatura").value);
    alert( ( (temperatura-32) / 1.8 ) + " grados celcius");
}

function CentigradosFahrenheit () {
	var temperatura = parseInt(document.getElementById("Temperatura").value);
    alert(temperatura*1.8+32 + " grados farenheit");
}
