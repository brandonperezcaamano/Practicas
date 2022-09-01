let contador = 0;

function incremento(){
    document.querySelector("#contador").innerHTML = contador;
    contador++;
}

function decremento(){
    if (contador < 0){
        contador = 0;
    }
    document.querySelector("#contador").innerHTML = contador;
    contador--;
}

function reset(){
    contador = 0;
    document.querySelector("#contador").innerHTML = contador;
}
