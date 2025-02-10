const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30
};


for (let chave in pessoa) {
    console.log(chave, pessoa[chave]);
}




const frutas = ['Pêra', 'Maçã', 'Uva'];

for (let i in frutas) {
    console.log(frutas[i]);
}

    for (let i = 0; i < frutas.length; i++) {
     console.log(frutas[i]);
    }