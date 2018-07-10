function CalcularPrecio () {

    var cantidadLamparas;
    var marca;
    var descuento;
    var precio , precioConDescuento;

    marca = document.getElementById("Marca").value;
    cantidadLamparas = document.getElementById("Cantidad").value;
    cantidadLamparas = parseInt(cantidadLamparas);
    
    if (cantidadLamparas <= 0) {
        alert("No compró nada.");
    } else {
        switch (cantidadLamparas) {
            case 5 : {
                if (marca == "ArgentinaLuz") {
                    descuento = 40;
                } else {
                    descuento = 30;
                }
                break;
            }
            case 4 : {
                if (marca == "ArgentinaLuz" || marca == "FelipeLamparas") {
                    descuento = 25;
                } else {
                    descuento = 20;
                }
                break;
            }
            case 3 : {
                if (marca == "ArgentinaLuz") {
                    descuento = 15;
                } else if (marca == "FelipeLamparas") {
                    descuento = 10;
                } else {
                    descuento = 5;
                }
                break;
            }
            case 2 :
            case 1 : {
                descuento = 0;
                break;
            }
            default : {
                descuento = 50;
                break;
            }
        }

        descuento = (100 - descuento) * 0.01;
        precio = 35 * cantidadLamparas;
        precioConDescuento = precio * descuento;

        document.getElementById("precioDescuento").value = precioConDescuento;
        if (precioConDescuento >= 120) {
            alert("Su compra supera los $120.\n\nUsted pagará un impuesto de " + precioConDescuento*0.1 + ".");
        }
    }

}