/*
Object.values
Object.entries
Object.assign(des, any)
Object.getOwnPropertyDescriptor(o, 'prop')
... (spread)

// Já vimos
Object.keys (retorna as chaves)
Object.freeze (congela o objeto)
Object.defineProperties (define várias propriedades)
Object.defineProperty (define uma propriedade)


-> Object.assign(des, any) e spread - copiar um objeto 

// Primeiro modo

const produto = {nome: 'Produto', preco: 1.8};
const caneca = {...produto,
meterial: 'porcelana'
};


caneca.nome = 'Outro nome';
caneca.preco = 2.5;
console.log(produto);
console.log(caneca);

// Segundo modo

const produto = {nome: 'Produto', preco: 1.8};
const caneca = Object.assign({}, produto, { material: 'porcelana'});


caneca.nome = 'Outro nome';
caneca.preco = 2.5;
console.log(produto);
console.log(caneca);

// Terceiro modo
const produto = {nome: 'Produto', preco: 1.8};
const caneca = { nome: produto.nome, preco: produto.preco };


caneca.nome = 'Outro nome';
caneca.preco = 2.5;
console.log(produto);
console.log(caneca);

// Retorna as propriedades -> Object.getOwnPropertyDescriptor
const produto = {nome: 'Produto', preco: 1.8};
Object.defineProperty(produto, 'nome', {
    writable: false,
    configurable: false,
    value: 'Qualquer outra coisa'
})
console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));
console.log(produto);



// Pegando só os valores
const produto = {nome: 'Produto', preco: 1.8};
console.log(Object.values(produto));

// Retornando os arrays
const produto1 = {nome: 'Produto', preco: 1.8};
console.log(Object.entries(produto1));
*/

const produto = {nome: 'Produto', preco: 1.8, material: 'porcelana'};

for (let valor of Object.entries(produto)) {
    console.log(valor[0], valor[1]);
}
