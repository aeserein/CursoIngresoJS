function mostrar() {

    var numero;
    var b = true;
    numero = prompt("Ingrese un número:");

    for (f=2 ; f<numero ; f++) {

        if (numero%f == 0){
            b = false;
            break;
        }

    }

    if (b) {
        alert("El número " + numero + " es primo.")
    } else {
        alert("El número " + numero + " no es primo.");
    }
    
}