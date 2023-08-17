/**
 * Encontre o maior valor em um array de números
 */

let valores = [5, 6, 3, 9, 15, 67, 43, 87, 32];

const maior = Math.max.apply(null, valores);

console.log(maior);
