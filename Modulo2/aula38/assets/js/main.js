const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);
const backgorundColorBody = estilosBody.backgroundColor;

console.log(backgorundColorBody);

for (let p of ps){
    p.style.backgroundColor = backgorundColorBody;
    p.style.color = 'white';
}