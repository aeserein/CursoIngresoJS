function mostrar() {

    var nota, mensaje;

    nota = document.getElementById("laHora").value;
    nota = parseInt(nota);

    switch (nota) {
        case 0 :
        case 1 :
        case 2 :
        case 3 : {
            mensaje = "La próxima se puede.";
            break;
        }
        case 4 :
        case 5 :
        case 6 : {
            mensaje = "Raspando.";
            if (nota<5) {
                mensaje = mensaje + " Debes preocuparte más."
            }
            break;
        }
        case 7 :
        case 8 :
        case 9 :
        case 10 : {
            mensaje = "Aprobó.";
            if (nota>8) {
                mensaje = mensaje + " Muy bien."
            }
            break;
        }
        default : {
            mensaje = "Nota no válida.";
        }

    }

    alert(mensaje);

}
