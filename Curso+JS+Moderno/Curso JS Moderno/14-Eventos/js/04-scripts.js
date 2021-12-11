const form = document.querySelector('#formulario');
form.addEventListener('submit', (evt) => {
    evt.preventDefault();//Evita el error de irse a la otra pag

    console.log(evt);
})
//El preventDefault también puede ser utilizado para prevenir 
//la próxima acción si quieres que primero cargue algo