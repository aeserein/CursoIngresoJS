function mostrar() {

    var edad = parseInt(document.getElementById("edad").value);

    if (edad < 18 && document.getElementById("estadoCivil").value != "Soltero") {
        // no hago nada
    } else if (edad >= 18 && document.getElementById("estadoCivil").value == "Soltero") {
        alert("Es mayor y es soltero");
    }
}