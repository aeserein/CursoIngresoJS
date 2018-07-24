function mostrar() {

    var s1,s2;
    s1 = Math.random() * (2) + 1;
    s1 = parseInt(s1);
    if (s1==1) {
        s1 = "M";
    } else {
        s1 = "F";
    }

    console.log(s1 + "\n");

    while (s1 != s2) {
        s2 = prompt("Ingrese F o M.");
        s2 = s2.toUpperCase();
    }

    document.getElementById("Sexo").value = s1;

}