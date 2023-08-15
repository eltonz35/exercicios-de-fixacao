/**
 * Crie um loop que imprima a sequência de Fibonacci até o 10º termo.
 * Formula (Fn = Fn -1 + Fn -2)
 */

let fn = 1;

for (let i = 1; i <= 10; i++) {
    if (i <= 10) {
        fn = i - 1 + i - 2;
        
        console.log(fn);
        
    }
}