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
//entrar a objeto dentro de objeto con esta sintaxis
const { nombre, informacion: {fabricacion} } = product;
console.log(nombre);
console.log(fabricacion);