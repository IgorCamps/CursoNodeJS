// String, number, undefined, null, boolean, symbol
const nome = 'Igor'; // string
const nome1 = "Igor"; // string
const nome2 = `Igor`; // string
const num1 = 10; //number
const num2 = 10.52; // number
let nomeAluno; // undefined = não aponta pra local nenhum na memória
const sobrenomeAluno = null; // Nulo -> não aponta pra local nenhum na memória (basicamente não tem nenhum valor | campo em branco)
const aprovado = false; // Boolean = true, false (lógico)

let a = 2;
let b = a;

console.log(a, b); // 2, 2

a = 3;
console.log(a, b); // 3, 2