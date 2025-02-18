/*
Primitivos  (imutáveis) - string, number, boolean, undefined,
null (bigint, symbol) - Valores copiados
//          0123
let nome = 'Luiz';
nome[0] = 'R';
console.log(nome[0], nome);

let a = 'A';
let b = a; // Cópia
console.log(a, b);

a = 'Outra coisa';

console.log(a, b);

Referência (mutável) - array, object, function - Passados por referência
let a = [1,2,3];
// let b = a;
let b = [...a]; // Totalmente independente
let c = b; // Aponta para o mesmo valor de b

console.log(a,b);

a.push(4);

console.log(a, b);

b.pop();
console.log(a, b);

a.push('Luiz');
console.log(c);
*/
const a = {
    nome: 'Luiz',
    sobrenome: 'Otávio'
};

// const b = a; // Referencia o valor de 'a' para 'b'
const b = {...a}; // Copiando o valor de 'a' para 'b'

a.nome = 'Joao';

console.log(a);
console.log(b);