function mostrarReal() {

}

var cMujeres = 0, cHombres = 0;
var cMayoresEdad = 0, cMenoresEdad = 0;
var cHombresMayores = 0;
var edadMin = 100, edadMax = 0;
var aEdadesFem = 0, aEdadesMasc = 0, aEdadesTotal = 0;
var nombreMin, nombreMax;
var sexoMasViejo, mujerMasVieja;
var promMasc,promFem,promTotal;


function mostrar() {

    var nombre, edad, sexo;
    var c = 0;

    while (c<4) {
        nombre = prompt("Ingrese nombre","Nombre");

        edad = "";
        sexo = "";
        while (edad<0 || edad>100 || isNaN(edad) || edad=="") {
            edad = prompt("Ingrese edad","Edad");
            edad = parseInt(edad);
        }
        while ( (sexo!="m" && sexo!="f") || sexo=="") {
            sexo = prompt("Ingrese sexo","Sexo");
            sexo = sexo.toLowerCase(sexo);
        }

        hombreMujer(sexo);
        mayoriaEdad(edad,sexo);
        edadMaximaMinima(edad,sexo,nombre);
        aEdades(edad,sexo);
        promedios();
        c++;
    }

    document.write("<b>Cantidad de hombres:</b> " + cHombres + "<br>");
    document.write("<b>Cantidad de mujeres:</b> " + cMujeres + "<br>");
    document.write("<b>Cantidad de mayores de edad:</b> " + cMayoresEdad + "<br>");
    document.write("<b>Cantidad de menores de edad:</b> " + cMenoresEdad + "<br>");
    document.write("<b>Cantidad de hombres mayores de edad:</b> " + cHombresMayores + "<br><br>");

    document.write("<b>Edad más baja:</b> " + edadMin + "<br>");
    document.write("<b>Edad más alta:</b> " + edadMax + "<br>");
    document.write("<b>Promedio de edad de mujeres:</b> " + promFem + "<br>");
    document.write("<b>Promedio de edad de hombres:</b> " + promMasc + "<br>");
    document.write("<b>Promedio de todas las edades:</b> " + promTotal + "<br><br>");

    document.write("<b>Nombre de la persona más vieja:</b> " + nombreMax + "<br>");
    document.write("<b>Nombre de la persona más joven:</b> " + nombreMin + "<br>");
    document.write("<b>Sexo de la persona más vieja:</b> " + sexoMasViejo.toUppercase(sexoMasViejo) + "<br>");
    document.write("<b>Nombre de la mujer más vieja:</b> " + mujerMasVieja + "<br>");
}

function hombreMujer(i) {
    if (i=="m") {
        cHombres++;
    } else {
        cMujeres++;
    }
}

function mayoriaEdad(f,i) {
    if (f>=18) {
        if (i=="m"){
            cHombresMayores++;
        }
        cMayoresEdad++;
    } else {
        cMenoresEdad++;
    }
}

function edadMaximaMinima(f,i,n) {
    if (f<edadMin) {
        edadMin = f;
        nombreMin = n;
    }
    if (f>edadMax) {
        if (i=="f") {
            mujerMasVieja = n;
        }
        edadMax = f;
        sexoMasViejo = i;
        nombreMax = n;
    }
}

function aEdades (f,i) {
    if (i=="m") {
        aEdadesMasc += f;
    }
    if (i=="f") {
        aEdadesFem += f;
    }
    aEdadesTotal += f;
}

function promedios() {
    promMasc = aEdadesMasc / cHombres;
    promFem = aEdadesFem / cMujeres;
    promTotal = aEdadesTotal / (cHombres+cMujeres);
}