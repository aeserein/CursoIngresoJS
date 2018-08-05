function mostrar() {

    var n1, n2;
    var perimetro;

    while (n1==undefined || isNaN(n1)) {
        n1 = prompt("Ingrese primer lado");
        n1 = parseInt(n1);
    }
    while (n2==undefined || isNaN(n2)) {
        n2 = prompt("Ingrese segundo lado");
        n2 = parseInt(n2);
    }
    perimetro = (n1*2) + (n2*2);

    alert("Perímetro: " + perimetro);

}
