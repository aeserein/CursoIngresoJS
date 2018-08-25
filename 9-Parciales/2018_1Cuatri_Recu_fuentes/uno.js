function mostrar() {

    var base, altura;
    var perimetro, superficie;

    while (base==undefined || isNaN(base) || base<0) {
        base = prompt("Ingrese base");
        base = parseInt(base);
    }
    while (altura==undefined || isNaN(altura) || altura<0) {
        altura = prompt("Ingrese altura");
        altura = parseInt(altura);
    }

    perimetro = (base*3);
    superficie = (base * altura) /2;

    alert("El perímetro es " + perimetro + "\n\nLa superficie es " + superficie);    
    
}
