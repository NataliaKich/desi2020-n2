let visor = document.getElementById("visor");
let valorCalculo = 0;
let operacaoCalculo;
let limparVisor = true;
let calcularResultado = false;


function clickNumero(numero) {
    if(limparVisor){
        visor.innerHTML = "";
        limparVisor = false;
    }

    visor.innerHTML += numero;
}

function limpar(){
    visor.innerHTML = "0";
    limparVisor = true;
    calcularResultado = false;
    valorCalculo = 0;
}

function apagarUltimo(){
    let valorVisor = visor.innerHTML;
    if(valorVisor.length === 1){
        limpar();
    }else if(valorVisor !== "0"){
        visor.innerHTML = valorVisor.substring(0, valorVisor.length - 1);
    }
}

function inserirVirgula(){
    if(visor.innerHTML.indexOf(",") === -1){
        visor.innerHTML += ",";
    }
}

function inserirOperacao(operacao){
    let valorVisor = visor.innerHTML.replace(",", ".");
    valorCalculo = Number(valorVisor);
    operacaoCalculo = operacao;
    limparVisor = true;
    calcularResultado = true;
}

function resultado(){
    let valorVisor = Number(visor.innerHTML.replace(",", ".")); 

    switch(operacaoCalculo){
        case "+":
            valorCalculo = valorCalculo + valorVisor;
            break;
        case "-":
            valorCalculo = valorCalculo - valorVisor;
            break;
        case "*":
            valorCalculo = valorCalculo * valorVisor;
            break;
        case "/":
            valorCalculo = valorCalculo / valorVisor;
            break;
    }
    visor.innerHTML = new Intl.NumberFormat("pt-BR").format(valorCalculo);
    calcularResultado = false;
}