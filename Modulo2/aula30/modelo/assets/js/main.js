// PRIMEIRA MANEIRA
/*const data = new Date();
const h1 = document.querySelector('.container h1');

function getDiaSemanaTexto(diaSemana) {
    let diaSemanaTexto;
    
    switch (diaSemana) {
        case 0:
            diaSemanaTexto = 'Domingo';
            return diaSemanaTexto;
        case 1:
            diaSemanaTexto = 'Segunda-feira';
            return diaSemanaTexto;
        case 2:
            diaSemanaTexto = 'Terça-feira';
            return diaSemanaTexto;
        case 3:
            diaSemanaTexto = 'Quarta-feira';
            return diaSemanaTexto;
        case 4:
            diaSemanaTexto = 'Quinta-feira';
            return diaSemanaTexto;
        case 5:
            diaSemanaTexto = 'Sexta-feira';
            return diaSemanaTexto;
        case 6:
            diaSemanaTexto = 'Sábado';
            return diaSemanaTexto;

        default:
            return diaSemanaTexto = ' ';
    }
}

function getMesDoAno(mesAno){
    let mesAnoTexto;
    switch (mesAno) {
        case 1: 
        mesAnoTexto = 'Janeiro';
        return mesAnoTexto;
        case 2: 
        mesAnoTexto = 'Fevereiro';
        return mesAnoTexto;
        case 3: 
        mesAnoTexto = 'Março';
        return mesAnoTexto;
        case 4: 
        mesAnoTexto = 'Abril';
        return mesAnoTexto;
        case 5: 
        mesAnoTexto = 'Maio';
        return mesAnoTexto;
        case 6: 
        mesAnoTexto = 'Junho';
        return mesAnoTexto;
        case 7: 
        mesAnoTexto = 'Julho';
        return mesAnoTexto;
        case 8: 
        mesAnoTexto = 'Agosto';
        return mesAnoTexto;
        case 9: 
        mesAnoTexto = 'Setembro';
        return mesAnoTexto;
        case 10: 
        mesAnoTexto = 'Outubro';
        return mesAnoTexto;
        case 11: 
        mesAnoTexto = 'Novembro';
        return mesAnoTexto;
        case 12: 
        mesAnoTexto = 'Dezembro';
        return mesAnoTexto;
        default : 
        mesAnoTexto = ' ';
        return mesAnoTexto;
    }
}
function zeroEsquerda(num){
    return num>= 10 ? num : `0${num}`;
}

function criaData(data){
    const diaSemana = data.getDay();
    const numeroMes = data.getMonth();

    const nomeDia = getDiaSemanaTexto(diaSemana);
    const nomeMes = getMesDoAno(numeroMes);

    return (
        `${nomeDia}, ${data.getDate()} de ${nomeMes}` +
        ` de ${data.getFullYear()} ` +
        `${zeroEsquerda(data.getHours())}:${zeroEsquerda(data.getMinutes())}`
    );
}

// SEGUNDA MANEIRA
h1.innerHTML = criaData(data);
const h1 = document.querySelector('.container h1');
const data = new Date();
const opcoes = {
    dateStyle: 'full',
    timeStyle: 'short'
};
h1.innerHTML = data.toLocaleString('pt-BR', opcoes);


// TERCEIRA MANEIRA
const h1 = document.querySelector('.container h1');
const data = new Date();
h1.innerHTML = data.toLocaleString('pt-BR', {dateStyle: 'full', timeStyle:'short'});
*/

const data = new Date();
const h1 = document.querySelector('.container h1');

function getDiaSemanaTexto(diaSemana) {
    const diasSemana = ['Domingo', 'Segunda-fera', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
    return diasSemana[diaSemana];
}

function getMesDoAno(numeroMes){
    const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

    return meses[numeroMes];
}

function zeroEsquerda(num){
    return num>= 10 ? num : `0${num}`;
}

function criaData(data){
    const diaSemana = data.getDay();
    const numeroMes = data.getMonth();

    const nomeDia = getDiaSemanaTexto(diaSemana);
    const nomeMes = getMesDoAno(numeroMes);

    return (
        `${nomeDia}, ${data.getDate()} de ${nomeMes}` +
        ` de ${data.getFullYear()} ` +
        `${zeroEsquerda(data.getHours())}:${zeroEsquerda(data.getMinutes())}`
    );
}
h1.innerHTML = criaData(data);