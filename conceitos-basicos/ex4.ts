/**
 * Crie uma função que receba um array de números e retorne a média deles.
 */

function calcularMedia(numerosArray: any) {
    
    const soma = numerosArray.reduce((contador: number, numero: number) => contador + numero);
    const media = soma / numerosArray.lenght

    return media;
}

let valores1 = [5, 8, 15, 6];
const mediaArray = calcularMedia(valores1);

console.log(mediaArray);
