function mostrar() {

    var numero, lista;
    var cDivisores = 0;
    var lista = "";
    numero = prompt("Ingrese un número:");
    numero = parseInt(numero);

    for (f=1 ; f<=numero ; f++) {

        if (numero%f == 0) {
            cDivisores++;
            f = f.toString();
            if (f!=numero) {
                lista += f + ", ";
            } else {
                lista += f + ".";
            }
        }

    }

    alert(cDivisores + " divisores.\n\nDivisores: " + lista);

}