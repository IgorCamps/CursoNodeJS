function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        fala(assunto) {
            return `${this.nome} está ${assunto}.`;
        },
    }
}

const p1 = criaPessoa('Igor', 'Campos');
const p2 = criaPessoa('Maria', 'Joaquina');
console.log(p2.fala('falando sobre JS'));
