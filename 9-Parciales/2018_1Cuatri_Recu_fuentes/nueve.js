function mostrar() {

    var nombre, peso, temperatura;
    var respuesta = "SI";
    var cTemperaturasPares = 0;
    var nombreMasPesado, temperaturaMasPesado, pesoMasPesado = 0;
    var cTemperaturaBajoCero = 0;
    var aPesos = 0, promPesos, cAnimales = 0;
    var pesoMaxBajoCero = 0, pesoMinBajoCero = 1000;
    var bMaxBajoCero = false, bMinBajoCero = false, mensajeMinBajoCero, mensajeMaxBajoCero;

    while (respuesta=="SI" || respuesta=="SÍ") {

        nombre = undefined;
        peso = undefined;
        temperatura = undefined;

        while (nombre==undefined || nombre=="") {
            nombre = prompt("Ingrese nombre del animal");
        }
        while (peso==undefined || isNaN(peso) || peso<1 || peso>1000) {
            peso = prompt("Ingrese peso del animal");
            peso = parseInt(peso);
        }
        while (temperatura==undefined || isNaN(temperatura) || temperatura<-30 || temperatura>30) {
            temperatura = prompt("Ingrese temperatura del hábitat del animal");
            temperatura = parseInt(temperatura);
        }

        if (temperatura%2==0) {
            cTemperaturasPares++;
        }

        if (peso>pesoMasPesado) {
            nombreMasPesado = nombre;
            temperaturaMasPesado = temperatura;
            pesoMasPesado = peso;
        }

        if (temperatura<0) {
            cTemperaturaBajoCero++;
            if (peso>pesoMaxBajoCero) {
                pesoMaxBajoCero = peso;
                bMaxBajoCero = true;
            }
            if (peso<pesoMinBajoCero) {
                pesoMinBajoCero = peso;
                bMinBajoCero = true;
            }

        }

        aPesos += peso;
        cAnimales++;

        respuesta = prompt("¿Desea ingresar más animales?","Sí");
        respuesta = respuesta.toUpperCase(respuesta);

    }

    promPesos = aPesos / cAnimales;

    if (bMaxBajoCero) {
        mensajeMaxBajoCero = "" + pesoMaxBajoCero;
    } else {
        mensajeMaxBajoCero = "No hay animales que vivan en temperaturas bajo cero";
    }

    if (bMinBajoCero) {
        mensajeMinBajoCero = "" + pesoMinBajoCero;
    } else {
        mensajeMinBajoCero = "No hay animales que vivan en temperaturas bajo cero";
    }

    document.write("<b>Cantidad de animales que viven en temperaturas pares:</b> " + cTemperaturasPares + "<br>");
    document.write("<b>Animal más pesado:</b> " + nombreMasPesado + "<b>, temperatura:</b>" + temperaturaMasPesado + "<br>");
    document.write("<b>Cantidad de animales que viven en menos de cero grados:</b> " + cTemperaturaBajoCero + "<br>");
    document.write("<b>Promedio de peso de todos los animales:</b> " + promPesos + "<br>");
    document.write("<b>Peso máximo de animales que viven en temperaturas bajo cero:</b> " + mensajeMaxBajoCero + "<br>");
    document.write("<b>Peso mínimo de animales que viven en temperaturas bajo cero:</b> " + mensajeMinBajoCero + "<br>");

}
