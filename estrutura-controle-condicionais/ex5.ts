/**
 * Verifique se uma string é um palíndromo (lê-se da mesma forma de trás para frente).
 */

import PromptSync from "prompt-sync";

const prompt = PromptSync();

console.log("Verificar se uma palavra é palindromo! ")

let texto = prompt("Digite alguma palavra: ");

const palindromo = texto.split("")
    .reverse()
    .join("");

if (palindromo == texto) {
    console.log("A palavra digitada é um palindromo!");
} else {
    console.log("A palavra digitada não é um palindromo!");
}