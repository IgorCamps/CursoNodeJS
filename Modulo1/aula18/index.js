const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25,

    // Método
    fala (){
        console.log(`A minha idade atual é ${this.idade}`)
    },

    incrementaIdade (){
        ++this.idade;
    }


};
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();



/*
// PARAMETRO
function criaPessoa(nome, sobrenome, idade){
    return { nome, sobrenome, idade};
}
// ARGUMENTO
const pessoa1 = criaPessoa('Luiz', 'Miranda', 25);
const pessoa2 = criaPessoa('Maria', 'Oliveira', 32);
const pessoa3 = criaPessoa('João', 'Moreira', 55);
const pessoa4 = criaPessoa('Junior', 'Lara', 44);
const pessoa5 = criaPessoa('Jean', 'Otávio', 69);

console.log(pessoa1.nome, pessoa1.sobrenome);
// Criando objeto literal
const pessoa1 = {
    nome: 'Igor',
    sobrenome: 'Campos',
    idade: 22
};

const pessoa2 = {
    nome: 'Maria',
    sobrenome: 'Oliveira',
    idade: 55
};

console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
console.log(pessoa1.idade);
*/