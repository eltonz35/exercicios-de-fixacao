/**
 * Conte quantas vogais há em uma string
 */

function contarVogais(str: string) {
    const vogais = 'aeiouAEIOU';
    let count = 0;
  
    for (let i = 0; i < str.length; i++) {
      if (vogais.includes(str[i])) {
        count++;
      }
    }
  
    return count;
  }
  
  const minhaString = "Olá, como você está?";
  const quantidadeVogais = contarVogais(minhaString);
  console.log(`A string possui ${quantidadeVogais} vogais.`);
  

