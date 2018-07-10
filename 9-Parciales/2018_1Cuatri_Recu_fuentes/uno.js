
function mostrar() {
    
    var lado1;
    var lado2;
    
    lado1 = prompt("Ingrese base del triángulo","");
    lado2 = prompt("Ingrese altura del triángulo","");
    lado1 = parseInt(lado1);
    lado2 = parseInt(lado2);

    var superficie = (lado1 * lado2) / 2;
    var perimetro = (lado1*3); // lado + lado + lado

    alert("Superficie: " + superficie + "\nPerímetro: " + perimetro);
    
}
