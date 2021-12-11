class Persona {
  constructor(persona_id, persona_nombre, persona_apellido) {
    this.id = persona_id;
    this.nombre = persona_nombre;
    this.apellido = persona_apellido;
  }
}

class Cliente extends Persona {
  constructor(
    cliente_id,
    cliente_nombre,
    cliente_apellido,
    cliente_edad,
    cliente_sexo
  ) {
    super(cliente_id, cliente_nombre, cliente_apellido);
    this.edad = cliente_edad;
    this.sexo = cliente_sexo;
  }
}

class App {
  static list;

  static async getFromApi() {
    try {
      let response = await fetch("http://localhost:3001/clientes", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      if (response.status.toString() == "200") {
        await response.json().then((array) => App.FullList(array));
        console.log(App.list);
        App.fillTable(App.list);
      }
    } catch {
      console.log("Error al obtener los elementos");
    }
  }

  static FullList(listaJson) {
    let listaObjetos = new Array();
    listaJson.map(function (cliente) {
      listaObjetos.push(
        new Cliente(
          cliente.id,
          cliente.nombre,
          cliente.apellido,
          cliente.sexo,
          cliente.edad
        )
      );
    });
    App.list = listaObjetos;
  }
  static fillTable(listaJson) {
    console.log(listaJson);
    for (let i = 0; i < listaJson.length; i++) {
      let fila = document.createElement("tr");
      let clienteId = document.createElement("td");
      let clienteNombre = document.createElement("td");
      let clienteApellido = document.createElement("td");
      let clienteSexo = document.createElement("td");
      let clienteEdad = document.createElement("td");
      let tableId = document.createTextNode(listaJson[i].id);
      let tableNombre = document.createTextNode(listaJson[i].nombre);
      let tableApellido = document.createTextNode(listaJson[i].apellido);
      let tableEdad = document.createTextNode(listaJson[i].edad);
      let tableSexo = document.createTextNode(listaJson[i].sexo);
      clienteId.appendChild(tableId);
      clienteNombre.appendChild(tableNombre);
      clienteApellido.appendChild(tableApellido);
      clienteSexo.appendChild(tableSexo);
      clienteEdad.appendChild(tableEdad);
      fila.appendChild(clienteId);
      fila.appendChild(clienteNombre);
      fila.appendChild(clienteApellido);
      fila.appendChild(clienteEdad);
      fila.appendChild(clienteSexo);
      fila.addEventListener("click", App.fillForm);
      document.getElementById("table").appendChild(fila);
    }
  }
  static addClient() {
    let nombre = document.getElementById("NombreCliente").value;
    let apellido = document.getElementById("ApellidoCliente").value;
    let edad = document.getElementById("EdadCliente").value;
    let sexo = document.getElementById("SexoCliente").value;
    let id = App.list.reduce((valorAcumulado, valorActual) => {
      if (valorActual.id > valorAcumulado.id) {
        return valorActual;
      } else {
        return valorAcumulado;
      }
    });
    App.list.push(new Cliente(id.id + 1, nombre, apellido, sexo, edad));
    App.refreshTable();
    App.fillTable(App.list);
  }
  static fillForm(event) {
    var cliente = event.target.parentNode;
    document.getElementById("IdCliente").value = cliente.children[0].innerHTML;
    document.getElementById("NombreCliente").value =
      cliente.children[1].innerHTML;
    document.getElementById("ApellidoCliente").value =
      cliente.children[2].innerHTML;
    document.getElementById("SexoCliente").value =
      cliente.children[3].innerHTML;
    document.getElementById("EdadCliente").value =
      cliente.children[4].innerHTML;
  }
  static deleteClient() {
    let id = document.getElementById("IdCliente").value;
    App.list.forEach((element) => {
      if (element.id == id) {
        App.list.splice(App.list.indexOf(element), 1);
        App.refreshTable();
        App.fillTable(App.list);
      } else {
        console.log("El cliente no existe");
      }
    });
  }
  static refreshTable() {
    var elmtTable = document.getElementById("table");
    var tableRows = elmtTable.getElementsByTagName("tr");
    var rowCount = tableRows.length;
    for (var x = rowCount - 1; x > 0; x--) {
      elmtTable.removeChild(tableRows[x]);
    }
  }
  static calcProm(correct, wrong) {
    var prom = 0;
    try {
      prom = App.list.reduce(
        (previousValue, currentValue) =>
          previousValue + parseInt(currentValue.sexo),
        0
      );
      prom = prom / App.list.length;
      correct(prom);
    } catch {
      console.log(wrong);
    }
  }
  static fillPromLabel(prom) {
    document.getElementById("Prom").value = prom;
  }
  static promPromise() {
    var promPromise = new Promise(App.calcProm);
    promPromise.then(App.fillPromLabel).catch("Error");
  }
  static filterTable(correct, wrong) {
    var filtro = document.getElementById("SexoClienteFiltro").value;
    var filterList = App.list.filter((persona) => persona.edad == filtro);
    try {
      App.refreshTable();
      correct(filterList);
    } catch {
      console.log(wrong);
    }
  }
  static filterPromise() {
    var filterPromise = new Promise(App.filterTable);
    filterPromise.then(App.fillTable).catch("Error");
  }
  static showFields(number) {
    var columnaID;
    var stl;
    switch (number) {
      case 0:
        columnaID = document.getElementById("Id");
        break;

      case 1:
        columnaID = document.getElementById("Nombre");
        break;

      case 2:
        columnaID = document.getElementById("Apellido");
        break;
      case 3:
        columnaID = document.getElementById("Sexo");
        break;
      case 4:
        columnaID = document.getElementById("Edad");
        break;
    }
    if (columnaID.checked) {
      stl = "table-cell";
    } else {
      stl = "none";
    }
    var tbl = document.getElementById("table");
    var th = tbl.getElementsByTagName("th");
    var rows = tbl.getElementsByTagName("tr");
    th[number].style.display = stl;
    for (var row = 1; row < rows.length; row++) {
      var cels = rows[row].getElementsByTagName("td");
      cels[number].style.display = stl;
    }
  }
}
document.getElementById("Add").addEventListener("click", App.addClient);
document.getElementById("Delete").addEventListener("click", App.deleteClient);
document.getElementById("Clean").addEventListener("click", App.refreshTable);
document.getElementById("calc").addEventListener("click", App.promPromise);
document
  .getElementById("SexoClienteFiltro")
  .addEventListener("change", App.filterPromise);
window.addEventListener("load", App.getFromApi);
