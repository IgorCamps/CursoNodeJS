function rand(min = 0, max=3) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function esperaAI(msg, tempo){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof msg !== 'string') {
                reject('CAI NO ERRO');
                return;
            }

            resolve(msg.toUpperCase() + ' - Passei na promise');
            return;
        }, tempo);
    });
}
/*
esperaAI('Fase 1', rand())
.then(valor => {
    console.log(valor);
    return esperaAI('Fase 2', rand());
})
.then(fase => {
    console.log(fase);
    return esperaAI('Fase 3', rand())
})
.then(fase => {
    console.log(fase);
    return fase;
})
.then(fase => {
    console.log('Terminamos na fase', fase)
})
.catch(erro => {
    console.log(erro);
});
*/

async function executa() {
    try {
        const fase1 = esperaAI('Fase 1', 1000);
        console.log(fase1);

        setTimeout(function() {
            console.log('Essa promie estava pendente', fase1)
        }, 1100)
    
        const fase2 = await esperaAI('Fase 2', rand());
        console.log(fase2);
    
        const fase3 = await esperaAI('Fase 3', rand());
        console.log(fase3);
    
        console.log('Terminamos na fase', fase3);
    } catch(e) {
        console.log(e);
    }
};

// executa();

// pending -> pendente
// fullfilled -> resolvida
// rejected -> rejeitada

const teste2 = esperaAI('qlq', 5000);
console.log(teste2);