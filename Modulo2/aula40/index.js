const numeros = [1,2,3,4,5,6,7,8,9];

// Continue continua para a próxima iteração
// Break sai do laçp

for (let i in numeros) {
    let numero = numeros[i];

    if (numero === 2){
        console.log('Pulei o número 2');
        continue;
    }

    if (numero === 7) {
        break;
    }

    console.log(numero);
}