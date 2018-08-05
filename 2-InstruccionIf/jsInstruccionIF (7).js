function mostrar() {

    var edad, eCivil;

    edad = parseInt(document.getElementById("edad").value);
    eCivil = document.getElementById("estadoCivil").value;
    
    if (edad < 18 && eCivil != "Soltero") {
        alert("Es muy pequeño para no ser soltero");
    }
}