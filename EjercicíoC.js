
let peso_pescado = [];
const menú=["1-Ingresar el peso del pescados \n 2-ver resultados"]
let continuar=true
 
while (continuar) {
    let M=prompt(menú);
    switch (M) {
      case "1":
        var n_peso = prompt("Peso del pescado");
        peso_pescado.push(n_peso)
        console.log(peso_pescado);
        break;
        case "2":    
           peso_pescado.sort(function (a, b) {
          return b - a;
        })
        console.log(peso_pescado.length);
        if(4 < peso_pescado.length <= 100){
        alert("1° puesto "+peso_pescado[0]+" \n "+"2° puesto "+peso_pescado[1]+"\n"+"3° puesto "+peso_pescado[2] )}
        else { alert("No se ingresar los valores necesarios para el podio")}
          break;
       }}