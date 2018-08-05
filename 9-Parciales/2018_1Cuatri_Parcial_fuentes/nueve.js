function mostrar() {

    var marca, peso, temperatura;
    var respuesta = "SI";
    var b = false;
    var cTemperaturasPares = 0;
    var pesoMax = 1, pesoMin = 100, marcaMax;
    var cProductosTempNegativa = 0;
    var aPesos = 0, cProductos = 0, promPesos;

    while (respuesta=="SI" || respuesta=="SÍ") {

        peso = undefined;
        temperatura = undefined;

        marca = prompt("Ingrese marca del producto");
        while (peso==undefined || peso<1 || peso>100 || isNaN(peso)) {
            peso = prompt("Ingrese peso del producto");
            peso = parseInt(peso);
        }
        while (temperatura==undefined || temperatura<-30 || temperatura>30) {
            temperatura = prompt("Ingrese temperatura");
            temperatura = parseInt(temperatura);
        }

        if (temperatura%2==0) {
            cTemperaturasPares++;
        }
        if (peso>pesoMax) {
            pesoMax = peso;
            marcaMax = marca;
        }
        if (peso<pesoMin) {
            pesoMin = peso;
        }
        if (temperatura<0) {
            cProductosTempNegativa++;
        }
        aPesos += peso;
        cProductos++;

        respuesta = prompt("¿Desea ingresar más números?");
        respuesta = respuesta.toUpperCase(respuesta);

    }

    promPesos = aPesos/cProductos;

    document.write("<b>Cantidad de temperaturas pares:</b> " + cTemperaturasPares + "<br>");
    document.write("<b>Marca del producto más pesado:</b> " + marcaMax + "<br>");
    document.write("<b>Cantidad de productos que se conservan a menos de 0 grados:</b> " + cProductosTempNegativa + "<br>");
    document.write("<b>Promedio de pesos de todos los productos:</b> " + promPesos + "<br>");
    document.write("<b>Peso máximo:</b> " + pesoMax + "<br>");
    document.write("<b>Peso mínimo:</b> " + pesoMin + "<br>");

}
