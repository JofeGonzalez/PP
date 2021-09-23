function guardarContacto() {
  var nombre = document.getElementById("name").value;
  var apellido = document.getElementById("lastname").value;
  var row =
    "<tr><td>" +
    nombre +
    "</td><td>" +
    apellido +
    "</td><td>" +
    "<button class=" +
    "borrar" +
    "onclick=" +
    "borrarContacto()" +
    ">" +
    "Borrar" +
    "</td></tr>";
  // <button class="borrar" onclick="borrarContacto()"></button>
  var add = document.createElement("TR");
  add.innerHTML += row;
  document.getElementById("body").appendChild(add);
}

function closeForm() {
  var cerrar = document.getElementById("containerform");
  cerrar.style.cssText = "visibility: hidden;";
}

function openForm() {
  var cerrar = document.getElementById("containerform");
  cerrar.style.cssText = "visibility: initial;";
}

function borrarContacto() {
  $(document).on("click", ".borrar", function (event) {
    event.preventDefault();
    $(this).closest("tr").remove();
  });
}
