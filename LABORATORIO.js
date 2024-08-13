let alumno,tarjeta,seccion,Fecha,total,opc,opc2;
var x=0;
var costo=new Array(20);

alumno=prompt("Ingrese su primer nombre y apellido  : ");

seccion=prompt("escoja entre las secciones \n1-DS1-1 \n2-DS2-1 \n3-DS3-1",opc2);
trajetas=prompt("La cantidad de tarjetas maximo 20 :");
if (tarjeta>=20){
    trajetas=parseInt(prompt("La cantidad de tarjetas maximo 20 :"));
}
else (tarjeta<20)
{
    alert("Maximo 20 tarjetas")
}

switch(opc2)
{
  case 1: 
  {
    print("DS1-1");
    break;
  } 
  case 2:
    {
        print("DS2-1");
        break;
    }
    case 3:
        {
            print("DS3-1");
            break;
        }
        default:{
            print("escoja entre las opciones ")

        }
}


trajetas=parseInt(prompt("La cantidad de tarjetas maximo 20 :"));


{
Fecha=parseInt(prompt("Ingrese la fecha de hoy :"));

document.write("El nombre del alumno:"+alumno+"<br>");
document.write("la seccion del alumno es :"+seccion+"<br>");
document.write("la cantidad de tarjetas es de :"+tarjeta+"<br>");
document.write("la fecha es de :"+Fecha+"<br>");
document.write("el total a pagar"+costo+"<br>");
    }
    
    
























