let numeros = document.querySelectorAll('#numbers');
let operations = document.querySelectorAll('#operation');
let previewsElement = document.querySelector('#mini-resultado');
let resultadoElement = document.querySelector('#resultado');
let preview = previewsElement;
let resultado = resultadoElement;

class Calculadora {
    constructor(previewsElement, resultadoElement) {
        this.resultadoElement = resultadoElement;
        this.previewsElement = previewsElement;
        this.limpar();
    }

    limpar() {
        this.resultado = "";
        this.previews = "";
        this.operation = undefined;
    }

    atualizar() {
        this.resultadoElement.innerText = this.resultado;
        this.previewsElement.innerText = `${this.previews}${this.operation || ""}`
    }

    adicionarNumero(number) {
        this.resultadoElement = `${this.resultadoElement}${number.toString()}`;
        if (this.resultado.includes(",") && number == ",") return;

    }


    adicionarOperation(operation) {
        if (preview !== '') {
            this.calcular();
        }

        this.operation = operation;
        this.resultado = "";
        this.previews = this.resultado
    }

    calcular() {
        let result = 0;
        let parsepreview = parseFloat(this.previews);
        let parsedebaixo = parseFloat(this.resultado);

        if (isNaN(parsepreview) || isNaN(parsedebaixo)) return


        switch (this.operation) {
            case "+":
                result = (parsepreview + parsedebaixo)
                break;
            case "-":
                result = (parsepreview - parsedebaixo)
                break;
            case "÷":
                result = (parsepreview / parsedebaixo)
                break;
            case "×":
                result = (parsepreview * parsedebaixo)
                break;
            default:
                return
        }
        this.resultado = result;
        this.operation = undefined;
        this.previews = "";
    }
}

const calculador = new Calculadora(previewsElement, resultadoElement);
for (const numero of numeros) {
    numero.addEventListener('click', () => {
        calculador.adicionarNumero();
        calculador.atualizar();
    })
}

for (const operation of operations) {
    operation.addEventListener('click', () => {
        calculador.adicionarOperation(operation.innerText);
        calculador.atualizar();
    })
}