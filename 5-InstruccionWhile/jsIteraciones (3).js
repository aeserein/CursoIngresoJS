function mostrar() {

    var clave;
    clave = prompt("Ingrese la clave.");

    while (clave != "utn750") {

        if (clave == "") {
            break;
        }       

        alert("Clave incorrecta.");
        clave = prompt("Ingrese la clave.");

    }

    if (clave=="utn750") {
        alert("Bienvenido");
    }

}
