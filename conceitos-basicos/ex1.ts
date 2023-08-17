/**
 * Crie uma função que calcule o fatorial de um número inteiro.
 */


function calcularFatorial(n: any) {
    let fatorial = 1;

    for(let i = 1; i <= n; i++) {
        fatorial = fatorial * i;
    }
    return fatorial;
}

const resultado = calcularFatorial(3);
console.log(resultado);
