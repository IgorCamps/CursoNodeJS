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
console.log(p1.fala('falando sobre JS'));