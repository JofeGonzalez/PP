/*
const enlace = document.createElement('A');
//Agregando el texto
enlace.textContent = "Hola";

//Ref
enlace.href = "/Hola-enlace";

enlace.target = "_blank";

console.log(enlace);

enlace.onclick = miFuncion;

const nav = document.querySelector('.navegacion');
//nav.appendChild(enlace); //Al final de los hijos del enlace

nav.insertBefore(enlace, nav.children[1]);//El nav.children es la posicion, se inserta antes de ese

//Todo esto sirve para crear HTML desde JS

function miFuncion(){
    alert("Diste click");
}
*/

//Crear un card de forma dinámica

const parrafo1 = document.createElement('p');
parrafo1.textContent = "Concierto";
parrafo1.classList.add('categoria', 'concierto');

const parrafo2 = document.createElement('p');
parrafo2.textContent = "Concierto de Rock";
parrafo2.classList.add('titulo');

const parrafo3 = document.createElement('p');
parrafo3.textContent = "$800 por persona";
parrafo3.classList.add('precio');

const info = document.createElement('div');
info.classList.add('info');
info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);

const img = document.createElement('img');
img.src = 'img/hacer2.jpg';
img.alt = "alternativo";

const card = document.createElement('div');
card.classList.add('card');
card.appendChild(img);
card.appendChild(info);

//insertar en el HTMl
const contenedor = document.querySelector('.hacer .contenedor-cards');
contenedor.appendChild(card);
//contenedor.insertBefore(card, contenedor.children[0]); //Para insertar en posicion especifica