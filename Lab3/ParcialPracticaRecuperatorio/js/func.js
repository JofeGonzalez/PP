var MaleCB = document.getElementById("MaleCB");
var FemaleCB = document.getElementById("FemaleCB");

var personas = new Array();
var localidades = new Array();

var personaAModificar = new Object();

function closeForm() {
  var form = document.getElementById("containerForm");
  form.style.cssText = "visibility: hidden;";
}

function openForm(event) {
  var form = document.getElementById("containerForm");
  form.style.cssText = "visibility: initial;";
  var persona = event.target.parentNode;
  personaAModificar = persona;
  var nombre = document.getElementById("name");
  var apellido = document.getElementById("lastname");
  var localidad = document.getElementById("localidades");
  nombre.value = persona.children[1].innerHTML;
  apellido.value = persona.children[2].innerHTML;
  localidad.value = persona.children[3].innerHTML;
  if (persona.children[4].innerHTML == "Female") {
    FemaleCB.checked = true;
    MaleCB.checked = false;
  } else {
    MaleCB.checked = true;
    FemaleCB.checked = false;
  }
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

function fillPeopleTable(persona) {
  personas = persona[0];
  for (let i = 0; i < persona[0].length; i++) {
    let fila = document.createElement("tr");
    let clientId = document.createElement("td");
    let clientNombre = document.createElement("td");
    let clientApellido = document.createElement("td");
    let clientLocalidad = document.createElement("td");
    let clientSexo = document.createElement("td");
    let tableId = document.createTextNode(persona[0][i].id);
    let tableNombre = document.createTextNode(persona[0][i].nombre);
    let tableApellido = document.createTextNode(persona[0][i].apellido);
    let tableLocalidad = document.createTextNode(
      persona[0][i].localidad.nombre
    );
    let tableSexo = document.createTextNode(persona[0][i].sexo);
    clientId.appendChild(tableId);
    clientNombre.appendChild(tableNombre);
    clientApellido.appendChild(tableApellido);
    clientLocalidad.appendChild(tableLocalidad);
    clientSexo.appendChild(tableSexo);
    fila.appendChild(clientId);
    fila.appendChild(clientNombre);
    fila.appendChild(clientApellido);
    fila.appendChild(clientLocalidad);
    fila.appendChild(clientSexo);
    fila.addEventListener("click", openForm);
    document.getElementById("table").appendChild(fila);
  }
}

function fillSelect(localidad) {
  localidades = localidad[0];
  for (let i = 0; i < localidad[0].length; i++) {
    var option = document.createElement("option");
    var valor =
      "<option value=" +
      localidad[0][i].nombre +
      ">" +
      localidad[0][i].nombre +
      "</option>";
    option.innerHTML += valor;
    document.getElementById("localidades").appendChild(option);
  }
}

function changeData(localidadesList, persona) {
  var spinner = document.getElementById("spinner");
  spinner.style.cssText = "visibility: initial;";
  var nombre = document.getElementById("name").value;
  var apellido = document.getElementById("lastname").value;
  var localidad = document.getElementById("localidades").value;
  var sexo;

  if (MaleCB.checked) {
    sexo = "Masculino";
  } else {
    sexo = "Femenino";
  }

  if (validName(nombre) && validName(apellido) && sexo != null) {
    let localidadJsonId = localidadesList.find(function (Element) {
      if (Element.nombre == localidad) {
        return Element.id;
      }
    });
    let personaJson = {
      id: persona.children[0].innerHTML,
      nombre: nombre,
      apellido: apellido,
      localidad: localidadJsonId,
      sexo: sexo,
    };
    var nombreBox = document.getElementById("name");
    var apellidoBox = document.getElementById("lastname");
    var table = document.getElementById("containerTable");
    nombreBox.style.cssText = "border-color: black;"
    apellidoBox.style.cssText = "border-color: black;"
    table.style.cssText = "visibility: hidden;"
    modifySomeoneData(personaJson, persona);
  } else {
    spinner.style.cssText = "visibility: hidden;";
    var nombreBox = document.getElementById("name");
    var apellidoBox = document.getElementById("lastname");
    nombreBox.style.cssText = "border-color: red;"
    apellidoBox.style.cssText = "border-color: red;"
  }
}

function validName(Name) {
  if (Name.length > 3) {
    return true;
  } else {
    return false;
  }
}

function sendModify() {
  changeData(localidades, personaAModificar);
}
