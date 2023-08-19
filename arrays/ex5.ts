/**
 * Crie um programa que encontre o valor mais frequente em um array de números.
 */

function findMostFrequentValue(arr: number[]): number | null {
    const frequencyMap: { [key: number]: number } = {};
    let maxFrequency = 0;
    let mostFrequentValue: number | null = null;
  
    for (const num of arr) {
      frequencyMap[num] = (frequencyMap[num] || 0) + 1;
  
      if (frequencyMap[num] > maxFrequency) {
        maxFrequency = frequencyMap[num];
        mostFrequentValue = num;
      }
    }
  
    return mostFrequentValue;
  }
  
  let valorex = [5, 6, 3, 9, 15, 67, 43, 87, 32, 15, 15];
  const mostFrequent = findMostFrequentValue(valorex);
  console.log(`O valor mais frequente é: ${mostFrequent}`);
  
  


