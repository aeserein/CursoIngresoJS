function mostrar() {

    var n1, n2;
    var resultado;

    while (n1==undefined || isNaN(n1)) {
        n1 = prompt("Ingrese primer número");
        n1 = parseInt(n1);
    }

    while (n2==undefined || isNaN(n2)) {
        n2 = prompt("Ingrese segundo número");
        n2 = parseInt(n2);
    }

    if (n1==n2) {
        resultado = n1 + "" + n2;
        alert(resultado);
    } else if (n1>n2) {
        resultado = n1 - n2;
        alert(resultado);
    } else {
        resultado = n1 + n2;
        if (resultado>10) {
            alert("La suma es " + resultado + " y es mayor que 10")
        } else {
            alert(resultado);
        }
    }

}
