/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar() {
    var numero1 = parseInt(document.getElementById("numeroUno").value);
    var numero2 = parseInt(document.getElementById("numeroDos").value);
    alert(numero1 + " + " + numero2 + " = " + (numero1+numero2));
}