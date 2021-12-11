"use strict";

const product = {
    nombre : "Monitor 20 pulgadas",
    precio : 300,
    disponible : true,    
}
Object.seal(product); //Sella el objeto, no se puede eliminar ni agregar pero si modificar las variables dentp}ro
product.disponible = false; // Esto si se puede hacer
//product.imagen = "imagen.jpg"; //Esto da error
//delete product.nombre //Tampoco se puede
console.log(Object.isSealed(product)); //Saber si esta sellado
