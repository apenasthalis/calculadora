let resultadoo = document.querySelector('#resultado').innerText;
let miniresultado = document.querySelector('#mini-resultado').innerText
let currentOperacao = ""

function adicionarNumero(x) {
    let resultado = document.querySelector('#resultado').innerText;
    if ((resultado == "" || resultado.includes(".")) && x == ".") return;
    document.querySelector('#resultado').innerText = resultado + x;
}

function somarUmUltimoDecimal(numero) {
    const partes = numero.toString().split('.');

    if (partes.length === 1) {
        return numero;
    }

    const parteInteira = partes[0];
    const parteDecimal = partes[1];

    if (parteDecimal === "") {
        return numero;
    }

    const ultimoDecimal = parseInt(parteDecimal.charAt(parteDecimal.length - 1));
    const novoDecimal = ultimoDecimal + 1;

    return parseFloat(parteInteira + '.' + parteDecimal.slice(0, -1) + novoDecimal);
}

function limitarCasasDecimais(numero, casasDecimaisMax) {
    const casasDecimais = (numero.toString().split('.')[1] || '').length;
    if (casasDecimais > casasDecimaisMax) {
        return parseFloat(numero.toFixed(casasDecimaisMax));
    }
    return numero;
}



function calcular() {

    let result;
    let preview = document.querySelector('#resultado').innerText;
    let debaixo = document.querySelector('#mini-resultado').innerText;
    let parsepreview = parseFloat(debaixo);
    let parsedebaixo = parseFloat(preview);

    if (isNaN(parsepreview) || isNaN(parsedebaixo)) return;

    switch (currentOperacao) {
        case "+":
            result = (parsepreview + parsedebaixo);
            break;
        case "-":
            result = (parsepreview - parsedebaixo);
            break;
        case "÷":
            result = (parsepreview / parsedebaixo);
            break;
        case "%":
            result = (parsepreview * parsedebaixo) / 100
            break;
        case "×":
            result = (parsepreview * parsedebaixo);
            break;
        default:
            return
    }
    result = limitarCasasDecimais(result, 3)
    result = somarUmUltimoDecimal(result)
    document.querySelector('#resultado').innerText = result;
    document.querySelector('#mini-resultado').innerText = ""
    console.log(result);
}

function adicionarOperacoes(x) {
    if (currentOperacao != "") {
        calcular()
    }
    let preview = document.querySelector('#mini-resultado').innerText;
    let operacoess = document.querySelector('#resultado').innerText;
    if (operacoess == "") return
    document.querySelector('#mini-resultado').innerText = operacoess + x;
    document.querySelector('#resultado').innerText = "";


    currentOperacao = x
    if (preview !== '') {
        calcular();
    }

}

function limpar() {
    document.querySelector('#resultado').innerText = "";
    document.querySelector('#mini-resultado').innerText = "";
}

function apagar() {
    let resultado = document.querySelector('#resultado').innerText;
    document.querySelector('#resultado').innerText = resultado.substring(0, resultado.length - 1);
}