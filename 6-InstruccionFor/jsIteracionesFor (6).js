function mostrar() {

    var n, cN = 0;
    n = prompt("Ingrese un número:");

    for (f=1 ; f<=n ; f++) {

        if (f%2 == 0) {
            cN++;
        }

    }

    alert(cN);

}