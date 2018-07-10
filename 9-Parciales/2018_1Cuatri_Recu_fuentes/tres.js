function mostrar() {
    var precio,descuento;
    var precioConDescuento;
    var precioTotal;

    precio = prompt("Ingrese precio:","Precio");
    descuento = prompt("Ingrese descuento","Descuento");
    precio = parseInt(precio);
    descuento = parseInt(descuento);

    precioConDescuento = precio * ( (100-descuento) * 0.01)

    alert("Descuento: " + descuento + "\n\nPrecio con descuento: " + precioConDescuento + "\n\nIva: 21%");
    precioTotal = (precioConDescuento*1.21);
    document.getElementById("elPrecioFinal").value = precioTotal;
}
