const form = document.querySelector('#formulario');

form.addEventListener('submit', function (e){
    e.preventDefault();
    console.log('Evento previnido');
    setResultado('Olá Mundo!')
});

function setResultado (msg){
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = msg;
}

