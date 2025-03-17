//                -5      -4       -3         -2        -1
//                 0       1        2          3         4
const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];

// nomes.splice(índice atual, delete, elem1, elem2, elem3);
// pop

// const removidos = nomes.splice(3, 2, 'Luiz', 'Otávio');

// Simulando pop
// const pop = nomes.splice(-1,1);

// Simulando shift
// const shift = nomes.splice(0,1);

// Simulando push
// const push = nomes.splice(nomes.length,0, 'Luiz', 'Otavio','Miranda');

// Simulando unshift
const unshift = nomes.splice(0, 0, 'Luiz', 'Otavio');

console.log(nomes, unshift);
console.log(Number.MAX_VALUE);