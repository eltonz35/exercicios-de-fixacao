/**
 * Verifique se um número é primo ou não.
 */

let primo = 3;

if (primo % 1 == 0 && primo % primo == 0) {  //Falta finalizar alguma restrição!!!
    console.log(`O numero ${primo} é primo`);
} else {
    console.log(`O numero ${primo} não é primo`);
}