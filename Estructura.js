
        let servicio,forma,frecuente,costo;

        alert ("servicios disponibles");
        servicio=parseInt(prompt("ingrese el codigo del servicio solicitado/nIngrese 1-alisado 2-tinte"));
        while (servicio<1 || servicio<2);
    {
        servicio=parseInt(prompt("ingrese correctamente el codigo del servicio solicitado"))
    }

    forma=parseInt(prompt("ingrese la forma de pago/nIngrese 1-credito 2-efectivo"))
    while (forma<1 || forma<2);
    {
        forma=parseInt(prompt("ingrese la forma de pago /nIngrese 1-credito 2-efectivo"))
    }

    switch(servicio)

{
    case 1:{
        costo=50;
        break;
    }
    case 2:{
        costo=60;
        break;
    }
}

document.write("+++++++++++++++++++++++++++ <br>")
if((forma==1 && servicio==1) || (forma==1 && servicio==2));
{
    document.write("usted se hizo un alisado</h3><br>")
    document.write("usted a pagado el credito<br>")
    document.write("el costo inicial del servicio es"+costo+"<br>")
    document.write("usted se hizo un alisado</h3><br>")
    document.write("debe pagar una comision de"+costo*1.10+"<br>")
}

elif(forma==2 && servicio==1)
{
    document.write("usted se hizo un alisado</h3><br>")
    document.write("usted ha pagado el contado<br>")
    document.write("el costo inicial del servicio es"+costo+"<br>")
}

elif(forma==2 && servicio==2)
{
    document.write("usted se hizo un tinte</h3><br>")
    document.write("usted ha pagado el contado<br>")
    document.write("el costo inicial del servicio es"+costo+"<br>")
}
    