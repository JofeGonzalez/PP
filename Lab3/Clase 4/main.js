// function guardarContacto() {
//   var nombre = document.getElementById("name").value;
//   var apellido = document.getElementById("lastname").value;
//   var row =
//     "<tr><td>" +
//     nombre +
//     "</td><td>" +
//     apellido +
//     "</td><td>" +
//     "<button class=" +
//     "borrar" +
//     "onclick=" +
//     "borrarContacto()" +
//     ">" +
//     "Borrar" +
//     "</td></tr>";
//   // <button class="borrar" onclick="borrarContacto()"></button>
//   var add = document.createElement("TR");
//   add.innerHTML += row;
//   document.getElementById("body").appendChild(add);
// }

// function closeForm() {
//   var cerrar = document.getElementById("containerform");
//   cerrar.style.cssText = "visibility: hidden;";
// }

// function openForm() {
//   var cerrar = document.getElementById("containerform");
//   cerrar.style.cssText = "visibility: initial;";
// }

// function borrarContacto() {
//   $(document).on("click", ".borrar", function (event) {
//     event.preventDefault();
//     $(this).closest("tr").remove();
//   });
// }

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    let respuesta = this.response;
    console.log(respuesta);
  }
};
xhttp.open("GET", "http://localhost:3000/personas", true);
xhttp.send();

function edit() {
  xhttp.open("POST", "http://localhost:3000/editar", true);
  xhttp.setRequestHeader("content-type", "application/json");
  let nuevaPersona = {
    id: 1,
    nombre: "Jose",
    apellido: "Gonzalez",
    fecha: "1999-10-22",
    sexo: "Masculino",
  };
  xhttp.send(JSON.stringify(nuevaPersona));
}

function getId(nombre, apellido) {
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let respuesta = this.response;
      let vector = JSON.parse(respuesta);
      vector.forEach((Element) => {
        if (Element.nombre == nombre || Element.apellido == apellido) {
          console.log(Element.id);
        }
      });
    }
  };
  xhttp.open("GET", "http://localhost:3000/personas", true);
  xhttp.send();
}

function pruebagetId() {
  getPersona("Renata", "Bofield");
}

function getPersona(nombre, apellido) {
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let respuesta = this.response;
      let vector = JSON.parse(respuesta);
      vector.forEach((Element) => {
        if (Element.nombre == nombre && Element.apellido == apellido) {
          deleteContact(Element);
        }
      });
    }
  };
  xhttp.open("GET", "http://localhost:3000/personas", true);
  xhttp.send();
}

function deleteContact(persona) {
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let respuesta = this.response;
      console.log(respuesta);
    } else {
      console.log("No entro a la api");
    }
  };
  xhttp.open("POST", "http://localhost:3000/eliminar", true);
  xhttp.setRequestHeader("content-type", "application/json");
  let Persona = {
    id: persona.id,
    nombre: persona.nombre,
    apellido: persona.apellido,
    fecha: persona.fecha,
    sexo: persona.sexo,
  };
  xhttp.send(JSON.stringify(Persona));
}
