/*
&& -> false && true -> false "o valor mesmo"
|| -> true || false -> vai retornar "o valor verdadeiro"

    FALSY
    {
        *false 
        0
        '' "" ``
        null / undefined
        NaN
    } 

    
    function falaOi (){
        return 'Oi';
    }
    const vaiExecutar = 'Igor';
    
    console.log(vaiExecutar && falaOi());


console.log(0 || false || null || 'Igor' || true);

const corUsuario = 'vermelho';
const corPadrao = corUsuario || 'preto';

console.log(corPadrao);
*/
const a = 0;
const b = null;
const c = 'false'; // Dentro de string não é false
const d = false;
const e = NaN;

console.log(a || b || 'Igor' || c || d || E);