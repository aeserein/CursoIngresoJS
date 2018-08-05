function mostrar() {

    var mesDelAño = document.getElementById("mes").value;

    switch (mesDelAño) {
        case "Febrero" : {
            alert("28 días.");
            break;
        }
        case "Abril" :
        case "Junio" :
        case "Septiembre" :
        case "Noviembre" : {
            alert("30 días.");
            break;
        }
        case "Enero" :
        case "Marzo" :
        case "Mayo" :
        case "Julio" :
        case "Agosto" :
        case "Octubre" :
        case "Diciembre" : {
            alert("31 días.");
                break;
        }
    }

}