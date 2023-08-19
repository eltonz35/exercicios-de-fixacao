/**
 * Converta uma temperatura de Celsius para Fahrenheit usando funções.
 */

function converterTemp(celsius: number) {
    let fahrenheit = celsius * 1.8 + 32;

    return fahrenheit;
}

console.log(converterTemp(25));
