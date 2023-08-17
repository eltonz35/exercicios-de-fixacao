/**
 * Verifique se um ano é bissexto (divisível por 4 e não por 100,
 * a menos que seja divisível por 400).
 */

let ano = 2028;

if (ano % 4 == 0 && ano % 100 != 0) {
    console.log("O ano é bissexto!");
}else {
    console.log("O ano não é bissexto!");
}