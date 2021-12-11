var xhttp = new XMLHttpRequest();
var MaleCB = document.getElementById("MaleCB");
var FemaleCB = document.getElementById("FemaleCB");
window.addEventListener("load", loader());

function closeForm() {
  var cerrar = document.getElementById("containerForm");
  cerrar.style.cssText = "visibility: hidden;";
}

function openForm() {
  var cerrar = document.getElementById("containerForm");
  cerrar.style.cssText = "visibility: initial;";
}

MaleCB.addEventListener("change", function () {
  if (FemaleCB.checked) {
    FemaleCB.checked = false;
  }
});

FemaleCB.addEventListener("change", function () {
  if (MaleCB.checked) {
    MaleCB.checked = false;
  }
});

xhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    let respuesta = this.response;
    console.log(respuesta);
    let vector = JSON.parse(respuesta);
    vector.forEach((Element) => {
      fillPeopleTable(Element);
    });
  }
};
xhttp.open("GET", "http://localhost:3000/personas", true);
xhttp.send();

function fillPeopleTable(persona) {
  var row =
    "<tr><td>" +
    persona.nombre +
    "</td><td>" +
    persona.apellido +
    "</td><td>" +
    persona.fecha +
    "</td><td>" +
    persona.sexo +
    "</td></tr>";
  var add = document.createElement("TR");
  add.innerHTML += row;
  document.getElementById("body").appendChild(add);
}

function loader() {
  var loader = document.getElementById("container");
  var table = document.getElementById("containerTable");
  setTimeout(function () {
    loader.style.cssText = "visibility : hidden;";
  }, 3000);
  table.style.cssText = "visibility : initial;";
}

function validName(Name) {
  if (Name.length > 3) {
    return true;
  } else {
    return false;
  }
}

function validDate(date) {
  var dateLess = 24 * 60 * 60 * 1000 * 2;
  if (new Date(date).getTime() < new Date().getTime() - dateLess) {
    return true;
  } else {
    return false;
  }
}
/* ------------------------------------------------------------------ */
function getId(nombre, apellido, fecha, sexo) {
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let respuesta = this.response;
      let vector = JSON.parse(respuesta);
      vector.forEach((Element) => {
        if (Element.nombre == nombre || Element.apellido == apellido) {
          requestEditContact(Element.id, nombre, apellido, fecha, sexo);
        }
      });
    }
  };
  xhttp.open("GET", "http://localhost:3000/personas", true);
  xhttp.send();
}

function requestEditContact(id, nombre, apellido, fecha, sexo) {
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var spinner = document.getElementById("spinner");
      spinner.style.cssText = "visibility : hidden;";
    } else {
      console.log("No");
    }
  };
  xhttp.open("POST", "http://localhost:3000/editar", true);
  xhttp.setRequestHeader("content-type", "application/json");
  let Persona = {
    id: id,
    nombre: nombre,
    apellido: apellido,
    fecha: fecha,
    sexo: sexo,
  };
  xhttp.send(JSON.stringify(Persona));
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

function deleteContactCall() {
  var nombre = document.getElementById("name").value;
  var apellido = document.getElementById("lastname").value;
  getPersona(nombre, apellido);
}

function editContactCall() {
  var nombre = document.getElementById("name").value;
  var apellido = document.getElementById("lastname").value;
  var fecha = document.getElementById("fechaNacimiento").valueAsDate;
  var sexo;
  if (MaleCB.checked) {
    sexo = "Masculino";
  } else {
    sexo = "Femenino";
  }

  if (validName(nombre) && validName(apellido) && validDate(fecha)) {
    var spinner = document.getElementById("spinner");
    spinner.style.cssText = "visibility : initial;";
    getId(nombre, apellido, fecha, sexo);
  } else {
    console.log("No");
  }
}
