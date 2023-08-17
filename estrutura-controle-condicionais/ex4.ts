/**
 * Crie uma calculadora simples que opera com dois números e um operador (+, -, *, /).
 */

import PromptSync from "prompt-sync";
const prompt = PromptSync();

let valor1: any = prompt("Digite o primeiro número: ");
let valor2: any = prompt("Digite o segundo número: ");
let operador = prompt("Escolha um operador (+, -, *, /): ");

if(operador == "+") {
    let soma = valor1 + valor2;
    console.log(`A soma de ${valor1} + ${valor2} = ${soma}`);

}else if(operador == "-") {
    let subtracao = valor1 - valor2;
    console.log(`A subtração de ${valor1} - ${valor2} = ${subtracao}`);
    
}else if(operador == "*") {
    let multiplicacao = valor1 * valor2;
    console.log(`A multiplicação de ${valor1} * ${valor2} = ${multiplicacao}`);
    
}else if(operador == "/") {
    let divisao = valor1 / valor2;
    console.log(`A divisão de ${valor1} / ${valor2} = ${divisao}`);
    
}else{
    console.log("Ação Indisponível!");
}