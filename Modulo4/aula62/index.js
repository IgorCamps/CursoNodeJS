// Valor por referência
/*
    Serve também para String, Objetos, Funções, Números
    const nomes = new Array('Eduado', 'Maria', 'Joana');
*/
//                 0         1        2         3           4
// const nomes = ['Eduardo', 'Maria', 'Joana', 'Wallace', 'Rosana'];

/*
    Usando splice para fatiar o array
    const novo = nomes.slice(1,-1);
    console.log(novo);
*/

// Cópia do nome
// const novo = [...nomes];
// Cópia por referência
// const novo = nomes;


// const nome = 'Luiz Otávio Miranda';
// const nomes = nome.split(' ');
const nomes = [ 'Luiz', 'Otávio', 'Miranda' ];
// Transfromando o array em palavra com join();
const nome = nomes.join(' ');
console.log(nome);