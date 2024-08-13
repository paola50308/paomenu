
function calcular(){

let nombre=document.getElementById("name1").value;
let edad=parseInt(document.getElementById("edad1").value);
var genero = document.querySelector('input[name="sexo"]:checked').value;
let aumento;
aumento=edad+10;
if(genero=="masculino")
     {
alert("excelente caballero, su edad aumentada es:"+aumento);
}
else {
    alert("excelente señorita, su edad aumentada es:"+aumento);  
}
}





