const product = {
    nombre : "Monitor 20 pulgadas",
    precio : 300,
    disponible : true,    
}
const medidas = {
    peso: "1kg",
    medida: "1m",
}

const resultado = Object.assign(product,medidas);
console.log(resultado);
//Esta sintaxis es mas utilizada, ya que es mas sencilla y no depende del metodo de Object.assign
const resultado2 = { ...product, ...medidas};

console.log(resultado2);