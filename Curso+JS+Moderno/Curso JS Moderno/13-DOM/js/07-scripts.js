const encabezado = document.querySelector('h1');

encabezado.style.backgroundColor = 'red';

encabezado.style.fontFamily = 'Arial';
encabezado.style.textTransform = 'uppercase';

//Todo esto es bueno saberlo mas es responsabilidad del css
//Hace el código JS muy largo

const card = document.querySelector('.card');
card.classList.add('nueva-clase', 'segunda clase');
card.classList.remove('nueva-clase');
card.classList.remove('segunda-clase');
console.log(card.classList);