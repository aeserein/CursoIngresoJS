function mostrar() {

    var precio, descuento;
    var descuento2, precio2;

    while (precio==undefined || isNaN(precio) || precio<0) {
        precio = prompt("Ingrese precio");
        precio = parseInt(precio);    
    }
    while (descuento==undefined || isNaN(descuento) || descuento<0) {
        descuento = prompt("Ingrese descuento");
        descuento = parseInt(descuento);
    }    

    descuento = (100-descuento)*0.01;
    precio2 = precio*descuento;
    descuento2 = precio-precio2;

    alert("Descuento en dinero: " + descuento2 + "\n\nPrecio con descuento: "+ precio2 + "\n\nIVA: 21%");

    document.getElementById("elPrecioFinal").value = precio2*1.21;

}
