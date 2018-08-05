function mostrarAumento() {

    var sueldo = parseInt(document.getElementById("sueldo").value);
    var sueldoAumentado = sueldo*1.1;
    document.getElementById("resultado").value = sueldoAumentado;
    
}
