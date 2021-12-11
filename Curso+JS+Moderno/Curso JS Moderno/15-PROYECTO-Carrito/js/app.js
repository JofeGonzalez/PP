//Variables
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarrito = document.querySelector('#vaciar-carrito')
const listaCursos = document.querySelector('#lista-cursos');
let articulosCarrito = [];
cargarEventListener();

//Funciones
//Evento cargar carrito
function cargarEventListener(){
    //Cuando agregas un curso presionando Agregar al carrito
    listaCursos.addEventListener('click', agregarCurso);

    //Elimina cursos del carrito
    carrito.addEventListener('click', eliminarCurso);

    //Vaciar carrito
    carrito.addEventListener('click', () =>{
        articulosCarrito = []; //Resetear el carrito
        limpiarHTML(); //Eliminamos el html
    })
}
//Agrega al carrito
function agregarCurso(e){
    e.preventDefault();
    if(e.target.classList.contains("agregar-carrito")){
        const curso = e.target.parentElement.parentElement;
        extraerInformacionCurso(curso);
    }
}
//Elimina un curso del carrito
function eliminarCurso(e){
    if(e.target.classList.contains('borrar-curso')){
        const cursoId = e.target.getAttribute('data-id');
        //Elimina del arreglo por el dataId
        articulosCarrito = articulosCarrito.filter((curso) => curso.idCurso !== cursoId);
        muestraCarritoHTML();
    }
}
//Lee el contenido del HTML al que le dimos click y extrae la info
function extraerInformacionCurso(curso){
    //Objeto para la info
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        idCurso: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1,
    }
    //Revisa si un elemento ya existe en el carrito
    const existe = articulosCarrito.some((curso) => curso.idCurso === infoCurso.idCurso);
    if(existe){
        //Actualizamos la cantidad
        const cursos = articulosCarrito.map((curso) => {
            if(curso.idCurso === infoCurso.idCurso){
                curso.cantidad++;
                return curso;//Retorna la cantidad actualizada
            }else {
                return curso;//Retorna el objeto como estaba
            }
        });
        articulosCarrito = [...cursos];
    } else {
        //Agregamos al carrito
        articulosCarrito = [...articulosCarrito, infoCurso];
    }
    muestraCarritoHTML();
}
//Mostrar el carrito en el HTML
function muestraCarritoHTML(){
    //Limpia el HTML
    limpiarHTML();
    //Recorre el carrito y genere el HTML
    articulosCarrito.forEach((curso) =>{
        const { imagen, titulo, precio, cantidad, idCurso} = curso;
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><img src = "${imagen}" width = "100" ></td>
            <td>${titulo}</td>
            <td>${precio}</td>
            <td>${cantidad}</td>
            <td>
                <a href = "#" class = "borrar-curso" data-id = "${idCurso}" > X </a>
            </td>
        `;
        //Agrega el HTML del carrito en el tbody
        contenedorCarrito.appendChild(row);
    })
}

function limpiarHTML(){
    //contenedorCarrito.innerHTML = ""; //Forma Lenta

    while(contenedorCarrito.firstChild){
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    } //Forma mas rápida
}