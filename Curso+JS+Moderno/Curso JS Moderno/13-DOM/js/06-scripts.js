const encabezado = document.querySelector('.contenido-hero h1').textContent;
console.log(encabezado);

//acceder al texto

//console.log(encabezado.innerText); //Si en el CSS visibility:hidden no lo vo a encontrar
//console.log(encabezado.textContent); //No importa el visibility en el CSS
//console.log(encabezado.innerHTML); //Se trae el HTML

//document.querySelector('.contenido-hero h1').textContent = 'nuevo heading';

const imagen = document.querySelector('.card img');
imagen.src = "img/hacer2.jpg";