try {
    // É executada quando não há erros
    // console.log(a);
    console.log('Abri um arquivo');
    console.log('Manipulei o arquivo e gerou erro');
    console.log('Fechei o arquivo')

    try {
        console.log(b);
    } catch (b) {
        console.log('Deu erro');
    } finally {
        console.log('Também sou finally');
    }
    
} catch (e) {
    // É executada quando há erros
    console.log('Tratando o erro')
} finally {
    // Será executado sempre, mas pode ser omitido
    console.log('FINALLY: Eu sempre sou executado');
}