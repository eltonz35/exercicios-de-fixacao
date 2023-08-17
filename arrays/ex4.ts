/**
 * Crie um programa que some os elementos de dois arrays de mesma dimensão, criando um terceiro array com os resultados.
 */

let primeiroArray = [1, 2, 3, 4];
let segundoArray = [6, 7, 8, 9];
let terceiroArray = []; 

for (let i = 0; i < primeiroArray.length; i++) {
    let soma = primeiroArray[i] + segundoArray[i];

    terceiroArray.push(soma);
}


console.log(terceiroArray);
