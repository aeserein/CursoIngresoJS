function mostrar() {

    var dia;

    dia = prompt("Ingrese día");
    dia = dia.toLowerCase(dia);

    switch (dia) {
        case "lunes" :
        case "martes" :
        case "miercoles" :
        case "miércoles" :
        case "jueves" :
        case "viernes" : {
            alert("A trabajar");
            break;
        }
        case "sabado" :
        case "sábado" :
        case "domingo" : {
            alert("Buen fin de semana");
            break;
        }
        default : {
            alert("Día no válido");

        }
    }

}
