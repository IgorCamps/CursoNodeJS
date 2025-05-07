function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function esperaAI(msg, tempo){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof msg !== 'string') {
                reject('Cai no erro');
                return;
            }

            resolve(msg.toUpperCase() + ' - Passei na promise');
            return;
        }, tempo);
    });
}

// Promisse.all Promisse.race Promisse.resolve Promisse.reject
/*
const promises = [
    //'Primeiro valor',
    esperaAI(1000,rand(1,5)),
    esperaAI('Promisse 1', rand(1,5)),
    esperaAI('Promisse 2', rand(1,5)),
    esperaAI('Promisse 3', rand(1,5)),
    //'Outro valor',
];


Promise.all(promises)
    .then(function(valor){
    console.log(valor);
    })
    .catch(function(error){
        console.log(error)
    });
    
    Promise.race(promises)
    .then(function(valor){
        console.log(valor);
    })
    .catch(function(error){
        console.log(error)
    });
*/

function baixaPagina() {
    const emCache = true;
    
    if (emCache) {
        //return Promise.resolve('Página em cache');
        return Promise.resolve('Página em cache');
    } else {
        return esperaAI('Baixei a página', 3000);
    }
}

baixaPagina()
    .then(dadosPagina => {
        console.log(dadosPagina);
    })
    .catch(e => console.log('ERRO', e));