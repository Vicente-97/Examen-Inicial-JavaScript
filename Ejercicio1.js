function Inicializar(){

let array =[]
let nombre;
let primeraLetra=[];

for (let i=0; i <5; i ++){
        nombre=(prompt("Introduce el nombre").toUpperCase());
        
    while(array.includes(nombre)){
        alert("El nombre ya existe, introduxca uno valido");
        nombre=(prompt("Introduce el nombre nuevamente").toUpperCase());
        
    }
    let letra = nombre.substring(0,1);
    primeraLetra.push(letra);

    array.push(nombre);
    
    }

    array.sort();
    console.log(array);
    console.log(primeraLetra);
}
Inicializar();
    












