// defineProperty - defineProperties
function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    
    let estoquePrivado = estoque;
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave 
        configurable: true, // reconfiguar a propriedade
        get: function() {
            return estoquePrivado;
        },
        set: function(valor) {
            if(typeof valor !== 'number'){
                throw new TypeError('Mensagem');
            }

            estoquePrivado = valor;
        }
    });
};

function CriaProduto(nome) {
    return {
        get nome() {
            return nome;
        },
        set nome(valor) {
            nome = valor;
        }
    }
}

// const p1 = new Produto('Camiseta', 20, 3);
// p1.estoque = 10;
// console.log(p1.estoque);
const p2 = CriaProduto('Camiseta');
console.log(p2.nome);