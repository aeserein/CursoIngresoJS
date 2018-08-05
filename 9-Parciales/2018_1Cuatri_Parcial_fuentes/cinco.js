function mostrar() {

    var planeta;

    planeta = prompt("Ingrese un planeta");
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
        case "saturno" :
        case "urano" :
        case "neptuno" : {
            alert("Acá hace más frío");
            break;
        }
        default : {
            alert("Planeta no válido");
        }
    }

}
