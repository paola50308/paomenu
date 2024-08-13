var inicio=parseInt(prompt("ingrese el valor inicial de la tabla"));
    var fin=parseInt(prompt("ingrese el valor final de la tabla"));

function tablita(inicio, fin){
    let valor =parseInt(prompt("ingrese que tabla de multiplicar quiere obtener"));
   if(inicio<=fin){

document.write("mostrando contenido de forma ascendente <br>");

    for( let f=1; f<= 10; f++){
        let tabla = f * valor;
        document.write(f +"*"+ valor +"="+ tabla+'<br>');
    }
   }
   else{
document.write("mostrando contenido de forma descendente <br>");
    for(let f=inicio; f>= fin; f--){
        let tabla = f * valor;
        document.write(f +"*"+ valor +"="+ tabla+'<br>');
    }
   }
}