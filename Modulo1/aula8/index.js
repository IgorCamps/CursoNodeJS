/*
Luiz Otávio Miranda tem 30 anos, pesa 84 kg
tem 1.8 de altura e seu IMC é de 25.9259
Luiz Otávio nasceu em 1980
*/

const nome = 'Igor'
const sobrenome = 'Campos'
const idade = 22;
const peso = 67;
const alturaEmM = 1.86;
let imc; // peso / (altura * altura)
let anoNascimento = 2024 - idade;

imc = peso / (alturaEmM*alturaEmM);

console.log(`${nome}  ${sobrenome}  tem  ${idade}  anos  pesa  ${peso} kg`);
console.log(`Tem ${alturaEmM} de altura e seu IMC é de ${imc}`);
console.log(`${nome} nasceu em ${anoNascimento}.`);
