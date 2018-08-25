function mostrar() {

    var nota, sexo, edad;
    var aNotas = 0, promNotas;
    var notaMin = 10, sexoMin;
    var cVarones6 = 0;
    var sexoMasJoven, notaMasJoven, edadMasJoven = 100;
    var bPrimeraMujer = false, edadPrimeraMujer, notaPrimeraMujer, mensajePrimeraMujer;

    for (f=0 ; f<5 ; f++) {

        nota = undefined;
        edad = undefined;
        sexo = undefined;

        while (nota==undefined || isNaN(nota) || nota<0 || nota>10) {
            nota = prompt("Ingrese nota");
            nota = parseInt(nota);
        }
        while (edad==undefined || isNaN(edad) || edad<0 || edad>100) {
            edad = prompt("Ingrese edad");
            edad = parseInt(edad);
        }
        while (sexo==undefined || (sexo!="M" && sexo!="F") ) {
            sexo = prompt("Ingrese sexo (M o F)");
            sexo = sexo.toUpperCase(sexo);
        }

        aNotas += nota;

        if (nota<notaMin) {
            notaMin = nota;
            sexoMin = sexo;
        }

        if (sexo=="M" && nota>=6) {
            cVarones6++;
        }

        if (edad<edadMasJoven) {
            edadMasJoven = edad;
            sexoMasJoven = sexo;
            notaMasJoven = nota;
        }

        if (!bPrimeraMujer && sexo=="F") {
            edadPrimeraMujer = edad;
            notaPrimeraMujer = nota;
            bPrimeraMujer = true;            
        }

    }

    promNotas = aNotas/5;
    if (bPrimeraMujer) {
        mensajePrimeraMujer = "" + edadPrimeraMujer + ", nota: " + notaPrimeraMujer;
    } else {
        mensajePrimeraMujer = "No se ingresaron mujeres";
    }

    alert("Promedio total de notas: " + promNotas + "\n\nNota más baja: " + notaMin + " (" + sexoMin + ")\n\nCantidad de varones mayores con 6 o más: " + cVarones6 + "\n\nSexo del alumno/a más joven: " + sexoMasJoven + ", nota: " + notaMasJoven + "\n\nPrimera mujer ingresada: " + mensajePrimeraMujer);

}
