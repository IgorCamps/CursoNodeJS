const falar = {
    falar() {
        console.log(`${this.nome} está falando`);
    }
}

const comer = {
    comer() {
        console.log(`${this.nome} está comendo`);
    }
}

const beber = {
    beber() {
        console.log(`${this.nome} está bebendo`);
    }
}
// const pessoaPrototype = {...falar, ...comer, ...beber};
const pessoaPrototype = Object.assign({}, falar, comer, beber);


function criaPessoa(nome, sobrenome) {  
    // const pessoaPrototype = {
    //     falar() {
    //         console.log(`${this.nome} está falando`);
    //     },

    //     comer() {
    //         console.log(`${this.nome} está comendo`);
    //     },

    //     beber() {
    //         console.log(`${this.nome} está bebendo`);
    //     }
    // }
    return Object.create(pessoaPrototype, {
        nome: { value: nome },
        sobrenome: { value: sobrenome }
    });
};

const p1 = criaPessoa('Igor', 'Campos');
const p2 = criaPessoa('Maria', 'Santos');
console.log(p1);
console.log(p2);
p1.falar();
p1.comer();
p1.beber();