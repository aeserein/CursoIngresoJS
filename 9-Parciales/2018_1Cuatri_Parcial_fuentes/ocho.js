function mostrar() {

    var numero, letra;
    var respuesta = "si";
    var cPares = 0, cImpares = 0, cCeros = 0;
    var aPositivos = 0, cPositivos = 0;
    var aNegativos = 0;
    var numeroMax = -100, letraMax, numeroMin = 100, letraMin;

    while (respuesta=="si" || respuesta=="sí") {

        numero = undefined;
        letra = undefined;
    
        while (numero==undefined || isNaN(numero) || numero<-100 || numero>100) {
            numero = prompt("Ingrese número");
            numero = parseInt(numero);
        }
        while (letra==undefined) {
            letra = prompt("Ingrese letra");
            letra = letra.toUpperCase(letra);
        }

        if (numero%2==0) {
            cPares++;
        } else {
            cImpares++;
        }

        if (numero==0) {
            cCeros++;
        } else if (numero>0) {
            aPositivos = aPositivos + numero;
            cPositivos++;
        } else {
            aNegativos = aNegativos + numero;
        }
    
        if (numero>numeroMax) {
            numeroMax = numero;
            letraMax = letra;
        }
        if (numero<numeroMin) {
            numeroMin = numero;
            letraMin = letra;
        }

        respuesta = prompt("¿Desea ingresar más números?");
        respuesta = respuesta.toLowerCase(respuesta);
    }

    document.write("<b>Cantidad de pares:</b> " + cPares +"<br>");
    document.write("<b>Cantidad de impares:</b> " + cImpares + "<br>");
    document.write("<b>Cantidad de ceros:</b> " + cCeros + "<br>");
    document.write("<b>Promedio de positivos:</b> " + (aPositivos / cPositivos) + "<br>");
    document.write("<b>Suma de negativos:</b> " + aNegativos + "<br>");
    document.write("<b>Número mínimo:</b> " + numeroMin + " - Letra: " + letraMin + "<br>");
    document.write("<b>Número máximo:</b> " + numeroMax + " - Letra: " + letraMax + "<br>");


}
