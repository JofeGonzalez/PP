const nav = document.querySelector('.navegacion');

//registrar un evento

nav.addEventListener('mouseout', () =>{
    console.log("Nav");
    nav.style.backgroundColor = 'black';
})

//mouseenter es cuando pasas el mouse sobre la cosa
//mouseout es lo mismo pero al salir el mouse de la cosa
//mousedown == click
//mouseup == cuando sueltas el click
//dblclick == doble click
