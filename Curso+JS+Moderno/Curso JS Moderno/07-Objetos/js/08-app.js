"use strict";

const product = {
    nombre : "Monitor 20 pulgadas",
    precio : 300,
    disponible : true,    
}
//Object methods
Object.freeze(product); //Congela al objeto, ya no es modificable

console.log(Object.isFrozen(product)); //Para saber si esta congelado o no

