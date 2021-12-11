function getPeople(correct, wrong) {
  var xhttpGetPeople = new XMLHttpRequest();
  xhttpGetPeople.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let vector = new Array(JSON.parse(this.response));
      correct(vector);
    } else if ((this.readyState != 4) & (this.status == 404)) {
      console.log(wrong);
    }
  };
  xhttpGetPeople.open("GET", "http://localhost:3000/personas", true);
  xhttpGetPeople.send();
}

function getLocalities(correct, wrong) {
  var xhttpGetLocalities = new XMLHttpRequest();
  xhttpGetLocalities.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let vector = new Array(JSON.parse(this.response));
      correct(vector);
    } else if ((this.readyState != 4) & (this.status == 404)) {
      console.log(wrong);
    }
  };
  xhttpGetLocalities.open("GET", "http://localhost:3000/localidades", true);
  xhttpGetLocalities.send();
}

function modifySomeoneData(persona, filaTabla) {
  var xhttpModifyData = new XMLHttpRequest();
  xhttpModifyData.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      filaTabla.childNodes[1].innerHTML = persona.nombre
      filaTabla.childNodes[2].innerHTML = persona.apellido
      filaTabla.childNodes[3].innerHTML = persona.localidad.nombre
      filaTabla.childNodes[4].innerHTML = persona.sexo
      var spinner = document.getElementById("spinner");
      spinner.style.cssText = "visibility: hidden;"
      var table = document.getElementById("containerTable");
      table.style.cssText = "visibility: initial;"
      var container = document.getElementById("containerForm");
      container.style.cssText = "visibility: hidden;"
    } else {
      console.log("Error");
    }
  };
  xhttpModifyData.open("POST", "http://localhost:3000/editar");
  xhttpModifyData.setRequestHeader("content-type", "application/json");
  let Persona = {
    id: persona.id,
    nombre: persona.nombre,
    apellido: persona.apellido,
    localidad: persona.localidad,
    sexo: persona.sexo,
  };
  xhttpModifyData.send(JSON.stringify(Persona));
}
