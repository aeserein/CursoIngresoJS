var n1,n2,n3;

function aceptarValores(){
    n1 = parseInt(document.getElementById("PrecioUno").value);
    n2 = parseInt(document.getElementById("PrecioDos").value);
    n3 = parseInt(document.getElementById("PrecioTres").value);
}

function Sumar () {
    aceptarValores();
    alert("Precio total: " + (n1 + n2 + n3) );	
}

function Promedio () {
    aceptarValores();
    alert("Promedio total: " + (n1 + n2 + n3)/3 );
}

function PrecioFinal () {
    aceptarValores();
    alert("Precio final +IVA: " + (n1 + n2 + n3)*1.21);	
}
