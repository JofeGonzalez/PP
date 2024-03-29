const btnEnviar = document.querySelector("#enviar");
const formulario = document.querySelector("#enviar-mail")
const email = document.querySelector("#email");
const asunto = document.querySelector("#asunto");
const mensaje = document.querySelector("#mensaje");
const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
eventListeners();
function eventListeners(){
    // arranca la app
    document.addEventListener("DOMContentLoaded", iniciarApp);
    // campos del formulario y validacion
    email.addEventListener("blur", validarFormulario); //blur es cuando te sales del campo
    asunto.addEventListener("blur", validarFormulario);
    mensaje.addEventListener("blur", validarFormulario);
}
function iniciarApp(){
    btnEnviar.disabled = true;
    btnEnviar.classList.add("cursor-not-allowed", "opacity-50");
}
function validarFormulario(e){
    
    if(e.target.value.length > 0){
        const error = document.querySelector('p.error');
        if(error){
            error.remove();
        }
        e.target.classList.remove('border', 'border-red-500');
        e.target.classList.add('border', 'border-green-500');
    } else{
        e.target.classList.remove('border', 'border-green-500');
        e.target.classList.add('border', 'border-red-500');
        mostrarError("Todos los campos son obligatorios.");
    }
    if(e.target.type === 'email'){    
        if(er.test(e.target.value)){
            const error = document.querySelector('p.error');
            if(error){
                error.remove();
            }            e.target.classList.remove('border', 'border-red-500');
            e.target.classList.add('border', 'border-green-500');
        } else {
            e.target.classList.remove('border', 'border-green-500');
            e.target.classList.add('border', 'border-red-500');
            mostrarError("Email no valido.");
        }
    }

    if(er.test(email.value) && asunto.value != '' && mensaje.value != ''){
        btnEnviar.disabled = false;
        btnEnviar.classList.remove("cursor-not-allowed", "opacity-50");
    }
}
function mostrarError(mensaje){
    const mensajeError = document.createElement('p');
    mensajeError.textContent = mensaje;
    mensajeError.classList.add('border', 'border-red-500', "background-red-100", 'text-red-500', 'p-3', 'mt-5', 'text-center', 'error');
    const errores = document.querySelectorAll('.error');
    if(errores.length === 0){
        formulario.appendChild(mensajeError);
    }
    //Si usamos insertBefore podemos manejar mejor donde queremos el mensaje de error
}

function enviarEmail(e) {

    e.preventDefault();


     // Spinner al presionar Enviar
     const spinner = document.querySelector('#spinner');
     spinner.style.display = 'flex';

     // Gif que envia email
     const enviado = document.createElement('p');
     enviado.textContent = 'Mensaje Enviado Correctamente';
     enviado.classList.add('bg')

     // Ocultar Spinner y mostrar gif de enviado
     setTimeout( () => {
          spinner.style.display = 'none';

          document.querySelector('#loaders').appendChild( enviado );

          setTimeout(() =>  {
               enviado.remove();
               formularioEnviar.reset();
          }, 5000);
     }, 3000);

     
}