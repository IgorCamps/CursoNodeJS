//                0        1       2           3       4
let alunos = ['Luiz', 'Maria', 'João']; // Luiza, Eduardo
alunos = 123;


console.log(typeof alunos);
console.log(alunos instanceof Array); // instanceof verifica se é um array

/*

    alunos.push('Luiza'); // Adiciona no final
    alunos.push('Eduardo');

    Fatiar o array
    console.log(alunos.slice(0, -2)); // Retorna um novo array

    console.log(alunos[50]); // undefined
    console.log(alunos);

    delete alunos[1]; // Deleta o valor, mas mantém o índice
    console.log(alunos[1]); // undefined

    const removido = alunos.shift(); // Elimina do começo
    console.log(removido);

    const removido = alunos.pop(); // Elimina do final
    console.log(removido);

    alunos.unshift('Fábio'); // Adiciona no começo
    alunos.unshift('Luiza');
    alunos.push('Luiza'); // Adiciona no final
    alunos.push('Fábio');

    alunos[alunos.length] = 'Luiza';
    alunos[alunos.length] = 'Fábio';
    alunos[alunos.length] = 'Luana';

    alunos[0] = 'Eduardo';
    alunos[3] = 'Luiza';

    console.log(alunos);
    console.log(alunos[0]);
    console.log(alunos[2]);
*/