// (condição) ? 'Valor para verdadeiro' : 'Valor para falso';

const pontuacaoUsuario = 500;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário Normal';

const corUsuario = 'Rosa';
const corPadrao = corUsuario || 'Preta';

console.log(nivelUsuario, corPadrao);
