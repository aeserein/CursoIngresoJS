function mostrar() {
    var edad = parseInt(document.getElementById("edad").value);
    if (edad < 18 && document.getElementById("estadoCivil").value != "Soltero") {
        alert("Es muy pequeño para no ser soltero");
    }
}