//Event Bubbling

const cardDiv = document.querySelector('.card');

cardDiv.addEventListener('click', (e) =>{
    if(e.target.classList.contains("titulo")){
        console.log("Click en titulo");
    }
})
//Hacer lo mismo para cada caso es el delegation