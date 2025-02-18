/*
Escreva um função chama ePaisagem que recebe dois argumentos,
largura e altura de uma imagem (number)
Retorne true se a imagem estiver no modo paisagem.



// Function padrão
function ePaisagem(largura, altura) {
    return largura >= altura;
}

console.log(ePaisagem(1920, 1920));
*/

// Arrow function
const ePaisagem = (largura, altura) => largura > altura;

console.log(ePaisagem(1920, 1920));