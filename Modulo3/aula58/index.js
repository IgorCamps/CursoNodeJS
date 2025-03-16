// Função contrutora -> Objetos
// Função fabrica -> Objetos
// Contrutora -> Pessoa (new)

function Pessoa(nome, sobrenome) {
    // Atributos ou métodos privados
    const ID = 123456;
    const metodoInterno = function () {
        
    }

    // Atributos ou métodos públicos
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function() {
        console.log(this.nome + ': Sou um metodo');
    }
}

const p1 = new Pessoa('Igor', 'Campos');
const p2 = new Pessoa('Maria', 'Oliveira');
p2.metodo();