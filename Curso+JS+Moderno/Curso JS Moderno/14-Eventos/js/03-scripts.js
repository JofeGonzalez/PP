const busqueda = document.querySelector('.busqueda');

busqueda.addEventListener('input', (evt) => {
    if(evt.target.value === " "){
        console.log("Error");
    }
})

//keydown y keyup para cuando pisas y sueltas una tecla respectivamente
//blur cuando entras y sales de un campo o formulario
//copy es para cuando copias un texto ingresado
//paste para cuando pegas
//cut para cuando cortas el texto
//input es para todas las anteriores menos el blur

//evento.target.value sirve para obtener letra por letra lo que el usuario esta escribiendo
//Como para ir filtrando el texto.

