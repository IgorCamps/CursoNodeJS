// Global 
function retornaFuncao(nome) {
    return function () {
        return nome;
    }
}

const funcao = retornaFuncao('Igor');
const funcao2 = retornaFuncao('Joao');
console.dir(funcao);
console.dir(funcao2);

console.log(funcao(), funcao2());