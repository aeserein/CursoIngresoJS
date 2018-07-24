/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */

function comenzarIngreso () {

    var edad, sexo, eCivil, sueldo, legajo, nacionalidad;

        edad = ingresarEdad();
        sexo = ingresarSexo();
        eCivil = ingresarEstadoCivil();
        sueldo = ingresarSueldo();
        legajo = ingresarLegajo();
        nacionalidad = ingresarNacionalidad();

        document.getElementById("edad").value = edad;
        document.getElementById("sexo").value = sexo;
        document.getElementById("estadoCivil").value = eCivil;
        document.getElementById("sueldo").value = sueldo;
        document.getElementById("legajo").value = legajo;
        document.getElementById("nacionalidad").value = nacionalidad;
}

function ingresarEdad() {
    var i = 0;
    while (i<18 || i>90 || isNaN(i)) {
        i = prompt("Edad");
        i = parseInt(i)
    }
    return i;
}

function ingresarSexo() {
    var i;
    while (i!="M" && i!="F") {
        i = prompt("Ingrese sexo\n\nM: Masculino\nF: Femenino");
        i = i.toUpperCase(i);
    }
    return i;
}

function ingresarEstadoCivil() {
    var i = 0;
    while (i<1 || i>4 || isNaN(i)) {
        i = prompt("Ingrese estado civil\n\n1: Soltero\n2: Casado\n3: Divorciado\n4: Viudo");
    }
    switch (i) {
        case 1 : {
            i = "Soltero/a";
            break;
        }
        case 2 : {
            i = "Casado/a";
            break;
        }
        case 3 : {
            i = "Divorciado/a";
            break;
        }
        case 4 : {
            i = "Viudo/a";
        }
    }
    return i;
}

function ingresarSueldo() {
    var i;
    while (i<8000 || isNaN(i)) {
        i = prompt("Ingrese sueldo bruto");
    }
    return i;
}

function ingresarLegajo() {
    var i;
    while (i<=1000 || i>9999 || isNaN(i)) {
        i = prompt("Ingrese número de legajo");
    }
    return i;
}

function ingresarNacionalidad() {
    var i;
    while (i!="A" && i!="E" && i!="N") {
        i = prompt("Ingrese nacionalidad\n\nA: Argentino\nE: Extranjero\nN: Nacionalizado");
        i = i.toUpperCase(i);
    }
    switch (i) {
        case "A" : { 
            i = "Argentino/a";
            break;
        }
        case "E" : {
            i = "Extranjero/a";
            break;
        }
        case "N" : {
            i = "Nacionalizado/a";
        }
    }
    return i;
}