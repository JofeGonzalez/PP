const product = {
    nombre : "Monitor 20 pulgadas",
    precio : 300,
    disponible : true,
}

console.log(Object.keys(product));
//nos retorna las llaves del objeto, en este
// caso serían nombre, precio y disponible

console.log(Object.values(product));
//nos retorna los valores del objeto, en este
//caso sería Monitor... 300 y true

console.log(Object.entries(product));
//nos retorna tanto las keys como los values