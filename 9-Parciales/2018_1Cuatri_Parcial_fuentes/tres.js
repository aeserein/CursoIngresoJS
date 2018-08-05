function mostrar() {
    
    var precio, descuento, final;

    while (precio==undefined || isNaN(precio) || precio<0) {
        precio = prompt("Ingrese precio");
        precio = parseInt(precio);
    }
    while (descuento==undefined || isNaN(descuento) || descuento<0) {
        descuento = prompt("Ingrese descuento");
        descuento = parseInt(descuento);
    }    

    descuento = (100 - descuento) * 0.01;
    final = precio * descuento;

    document.getElementById("elPrecioFinal").value = final;

}
