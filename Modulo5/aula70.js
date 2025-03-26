/*
const pessoa = {
    nome: 'Igor',
    sobrenome: 'Campos'
};

const chave = 'nome';
console.log(pessoa[chave]);
console.log(pessoa['nome']);

// new Array(); []
const pessoa1 = new Object();
pessoa1.nome = 'Igor';
pessoa1.sobrenome = 'Campos';

const pessoa2 = {
    nome: 'Luiz',
    sobrenome: 'Otávio'
};

console.log(pessoa1, pessoa2);

const pessoa1 = new Object();
pessoa1.nome = 'Igor';
pessoa1.sobrenome = 'Campos';
pessoa1.idade = 22;

// delete pessoa1.nome;
// console.log(pessoa1);

pessoa1.falarNome = function() {
    return (`${this.nome}, está falando seu nome.`);
};
pessoa1.getDataNascimento = function () {
    const dataAtual = new Date();

    return dataAtual.getFullYear() - this.idade;
}

for (let chave in pessoa1) {
    console.log(pessoa1[chave]);
}
*/

/* Factory functions

function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,

        nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        }
    };
};

const p1 = criaPessoa('Igor', 'Campos');
console.log(p1.nomeCompleto());

*/  

// Constructor functions
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    Object.freeze(this);
};

const p1 = new Pessoa('Igor', 'Campos');
delete p1.nome;
const p2 = new Pessoa('Maria', 'Santos');

console.log(p1);
console.log(p2);



// Classes