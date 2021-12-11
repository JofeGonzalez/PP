const product = {
    nombre : "Monitor 20 pulgadas",
    precio : 300,
    disponible : true,    
    mostrarInfo: function(){
        //uso de la palabra this
        console.log(`El producto ${this.nombre} tiene un precio de ${this.precio}`);
    }
}
product.mostrarInfo();
//Los this se mantienen en el objeto, entonces puedes usarlo 
//en cada metodo de cada objeto sin errores de sintaxis