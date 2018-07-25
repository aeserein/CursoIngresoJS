function numerosPares() {
     
    var n = 0;
    var c = 0;

    n = document.getElementById("numero").value;
    n = parseInt(n);    
            
    if (n>0 && !isNaN(n)) {

        for (f=0 ; f<=n ; f++) {

            if (f%2==0) {
                c++;
            }
    
        }
    
        alert(c + " números pares.");    
    }   

}

function numerosImpares() {
     
    var n = 0;
    var c = 0;

    n = document.getElementById("numero").value;
    n = parseInt(n);    
            
    if (n>0 && !isNaN(n)) {

        for (f=0 ; f<=n ; f++) {

            if (f%2==1) {
                c++;
            }
    
        }
    
        alert(c + " números impares.");    
    }   

}

function numerosDivisibles() {
     
    var n = 0;
    var c = 0;

    n = document.getElementById("numero").value;
    n = parseInt(n);    
            
    if (n>0 && !isNaN(n)) {

        for (f=1 ; f<=100 ; f++) {

            if (f%n==0) {
                c++;
            }
    
        }
    
        alert(c + " números divisibles.");    
    }   

}

function verificarPrimo() {
     
    var n = 0;
    var esPrimo = true;

    n = document.getElementById("numero").value;
    n = parseInt(n);    
            
    if (n>0 && !isNaN(n)) {

        esPrimo = primo(n);

        if (esPrimo) {
            alert("Es primo");
        } else {
            alert("No es primo");
        }

    }   

}

function numerosPrimos() {
     
    var n = 0;
    var c = 0;
    var esPrimo;

    n = document.getElementById("numero").value;
    n = parseInt(n);    
            
    if (n>0 && !isNaN(n)) {

        for (i=1 ; i<=n ; i++) {

            esPrimo = primo(i);

            if(esPrimo) {
                c++;
            }

        }

        alert(c + " números primos");

    }   

}

function primo(n) {

    bandera = true;

    if (n!=1) {

        for (f=2 ; f<n ; f++) {
     
            if (n%f==0) {
                bandera = false;
            }

        }

    } else {
        bandera = false;
    }

    return bandera;

}