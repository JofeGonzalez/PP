//Object literal
const product = {
    nombre : "Monitor 20 pulgadas",
    precio : 300,
    disponible : true,
}

//Object constructor
function Producto(nombre, precio){
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true;
}
//Uso de los constructores en JS
const producto2 = new Producto("Monitor 24 pulgadas", 2000);
console.log(producto2);