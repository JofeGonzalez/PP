const product = {
    nombre : "Monitor 20 pulgadas",
    precio : 300,
    disponible : true,    
}
//destructuring crea la variable y obtiene el valor
//si no existe la variable en el objeto la creara undefined
const { nombre, precio, disponible} = product;
console.log(nombre);
console.log(precio);
console.log(disponible);