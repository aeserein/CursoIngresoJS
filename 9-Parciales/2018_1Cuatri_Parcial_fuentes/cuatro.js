function mostrar() {

    var n1, n2;

    while (n1==undefined || isNaN(n1)) {
        n1 = prompt("Ingrese el primer número","Número");
        n1 = parseInt(n1);
                
    }
    while (n2==undefined || isNaN(n2)) {
        n2 = prompt("Ingrese el segundo número","Número");
        n2 = parseInt(n2);
    }

    if (n1==n2) {
        alert(n1 + "" + n2);
    } else if (n1>n2) {
        alert(n1-n2);
    } else {
        if (n1+n2>10) {
            alert("La suma es " + (n1+n2) +". Es mayor a 10.");
        } else {
            alert(n1+n2);
        }
    }
}
