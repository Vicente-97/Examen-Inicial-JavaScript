function Añadir(){
    let numero = document.getElementsByTagName("tr").length



    var tabla = document.getElementById("tabla");

    var  nuevaFila= document.createElement("tr");

    var crearCelda1 = document.createElement("td");

     let t = document.createTextNode(numero);

    var crearCelda2 = document.createElement("td");

    let texto2 =document.getElementById("texto2").value;

    let t1 = document.createTextNode(texto2);

   
    var crearCelda3 = document.createElement("td");

    let texto3 =document.getElementById("texto3").value;

    let t2 = document.createTextNode(texto3);

    var crearCelda4 = document.createElement("td");

    let texto4 =document.getElementById("texto4").value;

    let t3 = document.createTextNode(texto4);

    crearCelda1.appendChild(t);
    nuevaFila.appendChild(crearCelda1);
    
    crearCelda2.appendChild(t1);
    nuevaFila.appendChild(crearCelda2);
    
    crearCelda3.appendChild(t2);
    nuevaFila.appendChild(crearCelda3);
    
    crearCelda4.appendChild(t3);
    nuevaFila.appendChild(crearCelda4);
    
    tabla.appendChild(nuevaFila);

}
function BorrarFila(){
    let nuevoTexto = Number(prompt("Introduce el numero de la fila que quieras borrar"));
    let lista= document.getElementById("tabla");
    let aborrar = document.getElementsByTagName("tr")[nuevoTexto];
    aborrar.remove();

}