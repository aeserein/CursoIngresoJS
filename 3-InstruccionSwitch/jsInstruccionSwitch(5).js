function mostrar() {

    var hora = document.getElementById('hora').value;

    if (hora <= 0 || hora >24) {
        alert("Hora no válida.");
    } else if (hora >= 7 && hora <=11) {
        alert("Es de mañana.");
    }
    
}