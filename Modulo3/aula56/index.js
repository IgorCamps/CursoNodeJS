// Factory function (Função fábrica)
// Próxima -> Constructor function (funcão construtora)
function criaPessoa(nome, sobrenome, a, p) {
    return {
        nome,
        sobrenome,

        // Getter
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        },

        // Setter
        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        },

        fala(assunto = 'falando sobre NADA') {
            return `${this.nome} está ${assunto}.`;
        },
        altura: a,
        peso: p,
        // Getter
        get imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }

    };
};

const p1 = criaPessoa('Igor', 'Campos', 1.80, 80);
const p2 = criaPessoa('João', 'Campos', 1.90, 57);
const p3 = criaPessoa('Junior', 'Campos', 1.50, 110);

console.log(p1.imc);
console.log(p2.imc);
console.log(p3.imc);
// p1.nomeCompleto = 'Maria Oliveira Silva';
// console.log(p1.nome);
// console.log(p1.sobrenome);
// console.log(p1.fala());

<<<<<<< HEAD
const p1 = criaPessoa('Igor', 'Campos');
const p2 = criaPessoa('Maria', 'Joaquina');
console.log(p2.fala('falando sobre JS'));
=======
>>>>>>> ebb4b22b867672ec833c57f50a12b44096d19311
