function SacarResto() {

    var numeroUno, numeroDos, numeroTres
    numeroUno = parseInt(document.getElementById("numeroDividendo").value);
    numeroDos = parseInt(document.getElementById("numeroDivisor").value);
    numeroTres = numeroUno%numeroDos;
    alert("El resto es " + (numeroTres));
}
