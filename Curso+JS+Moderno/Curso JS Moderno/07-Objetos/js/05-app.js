const product = {
    nombre : "Monitor 20 pulgadas",
    precio : 300,
    disponible : true,   
    //objeto dentro de otro objeto
    informacion: {
        medidas: { 
            peso : "1kg",        
            medida : "1m",
        },
        fabricacion: {
            pais : "China",
        }        
    } 
}
console.log(product);
//acceder a un objeto dentro de otro objeto
console.log(product.informacion.medidas.peso);
//2 objetos con informacion diferente dentro de un objeto
console.log(product.informacion.fabricacion.pais);