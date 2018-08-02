function mostrar() {

    var planeta;

    planeta = prompt("Ingrese un planeta","Planeta");
    planeta = planeta.toLowerCase(planeta);

    switch (planeta) {
        case "mercurio" :
        case "venus" : {
            alert("Acá hace más calor");
            break;
        }
        case "tierra" : {
            alert("Acá vivimos");
            break;
        }
        case "marte" :
        case "júpiter" :
        case "jupiter" :
        case "urano" :
        case "neptuno" : {
            alert("Acá hace más frío");
            break;
        }
        case "pluton" :
        case "plutón" : {
            alert(":(");
            break;
        }
        default : {
            alert("No es un planeta");
        }
    }
}
