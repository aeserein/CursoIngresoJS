function mostrar() {

    var nombre, paginas, ventas, tema;
    var respuesta = "SI";
    var cPaginasPares = 0, cPaginasImpares = 0;
    var cCeroVentas = 0;
    var aVentas = 0, cVentas = 0, promVentas;
    var aPaginasProgramacion = 0;

    while (respuesta=="SI" || respuesta=="SÍ") {

        nombre = undefined;
        paginas = undefined;
        ventas = undefined;
        tema = undefined;

        while (nombre==undefined || nombre=="") {
            nombre = prompt("Ingrese nombre del libro");
        }
        while (paginas==undefined || isNaN(paginas) || paginas<0) {
            paginas = prompt("Ingrese cantidad de páginas");
            paginas = parseInt(paginas);
        }
        while (ventas==undefined || isNaN(ventas) || ventas<0) {
            ventas = prompt("Ingrese cantidad de ventas");
            ventas = parseInt(ventas);
        }
        while (tema!="programacion" && tema!="programación" && tema!="robotica" && tema!="robótica" && tema!="patrones" && tema!="base de datos") {
            tema = prompt("Ingrese tema del libro");
            tema = tema.toLowerCase(tema);
        }

        if (paginas%2==0) {
            cPaginasPares++;
        } else {
            cPaginasImpares++;
        }

        if (ventas==0) {
            cCeroVentas++;
        }

        aVentas += ventas;
        cVentas++;

        if (tema=="programacion" || tema=="programación") {
            aPaginasProgramacion += paginas;
        }

        respuesta = prompt("¿Desea ingresar más datos?","Sí");
        respuesta = respuesta.toUpperCase(respuesta);

    }

    promVentas = aVentas/cVentas;

    document.write("<b>Cantidad de libros de páginas pares:</b> " + cPaginasPares + "<br>");
    document.write("<b>Cantidad de libros de páginas impares:</b> " + cPaginasImpares + "<br>");
    document.write("<b>Cantidad de libros con cero ventas:</b> " + cCeroVentas + "<br>");
    document.write("<b>Promedio de todas las ventas:</b> " + promVentas + "<br>");
    document.write("<b>Cantidad de páginas de todos los libros de programación:</b> " + aPaginasProgramacion);


}
