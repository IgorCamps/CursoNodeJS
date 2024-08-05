/*
    // Função normal
        function soma(x = 1, y = 1) {
        const resultado = x + y;
        return resultado;
        }
        const resultado = soma(4, 2);
        console.log(resultado);

    // Variavel recebendo uma função
        const raiz = function (n){
            return n ** 0.5;
        };
        console.log(raiz(9));
        console.log(raiz(16));
        console.log(raiz(25));

    // Arrow function
        const raiz = n => n ** 0.5;
        console.log(raiz(9));
        console.log(raiz(16));
        console.log(raiz(25));
*/

const soma = (x, y) => x + y;

console.log(soma(2,2))