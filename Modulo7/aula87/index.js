function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function esperaAI(msg, tempo, cb){
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') reject(new Error('ERRO'));

        setTimeout(() => {
            resolve(msg);
        }, tempo);
    });
}

esperaAI('Conexão com o BD.', rand(1, 3))
    .then(resposta => {
        console.log(resposta);
        return esperaAI('Buscando dados da BASE.', rand(1,3));
    })
    .then(resposta => {
        console.log(resposta);
        return esperaAI(22222222, rand(1, 3));
    }).then(resposta => {
        console.log(resposta);
    }).then(() => {
        console.log('Exibe dados na tela.')
    })
    .catch(e => {
        console.log('ERRO:', e);
    })

console.log('Isso aqui será exibido antes de qualquer promisse.');