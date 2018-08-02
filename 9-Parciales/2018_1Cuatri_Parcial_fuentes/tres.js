function mostrar() {

    var precio, descuento, precioFinal;

    while (precio==undefined || precio<0 || isNaN(precio)) {
        precio = prompt("Ingrese precio","Precio");
        precio = parseInt(precio);
    }
    while (descuento==undefined || descuento<0 || isNaN(descuento)) {
        descuento = prompt("Ingrese descuento","Descuento");
        descuento = parseInt(descuento);
    }

    descuento = (100 - descuento) * 0.01;
    precioFinal = precio * descuento;

    document.getElementById("elPrecioFinal").value = precioFinal;
}
