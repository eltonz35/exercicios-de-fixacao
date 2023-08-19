/**
 * Implemente a sequência de Collatz: comece com um número n e, se n for par, divida-o por 2;
 * se for ímpar, multiplique por 3 e some 1. Repita o processo até n se tornar 1.
 */

function sequenciaCollatz(n: number) {
    const sequencia = [n];
  
    while (n !== 1) {
      if (n % 2 === 0) {
        n = n / 2;
      } else {
        n = 3 * n + 1;
      }
      sequencia.push(n);
    }
  
    return sequencia;
  }
  
  const valorInicial = 27; // Pode substituir esse número pelo valor desejado
  const sequencia = sequenciaCollatz(valorInicial);
  console.log(`Sequência de Collatz para ${valorInicial}: ${sequencia.join(' -> ')}`);
  