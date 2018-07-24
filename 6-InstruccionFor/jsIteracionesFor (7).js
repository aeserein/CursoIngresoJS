function mostrar() {

    var numero;
    var divisores = [];
    var lista = "";
    dir = 0;
    numero = prompt("Ingrese un número:");
    numero = parseInt(numero);

    for (f=1 ; f<=numero ; f++) {

        if (numero%f == 0) {
            divisores[dir] = f;
            dir++;
        }

    }

    for (f=0 ; f<dir ; f++) {

        divisores[f] = divisores[f].toString();

        if (f!=dir-1) {
            lista = lista + divisores[f] + ", ";
        } else {
            lista = lista + divisores[f] + ".";
        }

    }

    alert("Divisores: " + lista);

}