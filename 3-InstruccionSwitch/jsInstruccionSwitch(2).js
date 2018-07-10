function mostrar() {

    var mesDelAño = document.getElementById('mes').value;

    switch(mesDelAño) {
        case "Enero" :
        case "Febrero" :
        case "Marzo" :
        case "Abril" :
        case "Mayo" :
        case "Junio" : {
            alert("Falta para que llegue el invierno.");
            break;
        }
        case "Julio" :
        case "Agosto" : {
            alert("Abrigate, que hace frío.");
            break;
        }
        case "Septiembre" :
        case "Octubre" :
        case "Noviembre" :
        case "Diciembre" : {
            alert("Ya pasamos el frío, ahora hace calor.");
            break;
        }
    }

}