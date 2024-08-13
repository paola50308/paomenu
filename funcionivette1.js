function tablita() {
    let valor=parseInt(prompt("ingrese la tabla que desea obtener"));
    for(let f=1; f<=10 ; f++){
        let tabla = f * valor;
        document.write(f +"*" + valor + "=" + tabla + "<br>")
    }

   }