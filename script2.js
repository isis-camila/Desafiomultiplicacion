var numeroingresado = Math.floor(parseInt(prompt('Ingrese un número mayor a 1 y menor a 20')));
var resultado = 1

//factorización
var factorial = (numeroingresado) => {
    //validación del número ingresado
    while(numeroingresado <1 || numeroingresado >20){
        console.log('Fuera de rango. Recuerda que debe ser mayor a 1 y menor a 20');
        numeroingresado = Math.floor(parseInt(prompt('Ingrese un número válido, del 1 al 20')));
    }
    for(i=1; i<= numeroingresado; i++){
        resultado = resultado * i
        
    }
    console.log(`El factorial de ${numeroingresado} es ${resultado}`) 
 
    //multiplicacion
    for (let i = 1; i <= 20; i++) {
        resultado = numeroingresado * i;
        console.log(`${numeroingresado} X ${i} = ${resultado}`);
    }
    
    
}
factorial(numeroingresado)

