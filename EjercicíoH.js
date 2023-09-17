
    

 let Elementos=[]
 let numero =""
 let mensajetrue="La letra esta dentro del grupo"
 let mensajefalse="La letra no esta dentro del grupo"
 let mensajemenú= "Por favor, colocar 5 numeros al azar \n 1-Coloque elemento \n 2-Ver el orden ascendente \n 3-Ver el orden descendente "
 let mensajeelemet="Coloque un número"
 
 function ordenarasc(Elementos){
  for(let i=0;i<Elementos.length-1;i++){
    for(let j=0;j<Elementos.length-1-i;j++){
      if(Elementos[j]>Elementos[j+1]){
        [Elementos[j],Elementos[j+1]]=[Elementos[j+1],Elementos[j]];
          }
        }
      }
      return (Elementos)
    };

    function ordenardesc(Elementos){
      for(let i=0;i<Elementos.length-1;i++){
        for(let j=0;j<Elementos.length-1-i;j++){
          if(Elementos[j+1]>Elementos[j]){
            [Elementos[j],Elementos[j+1]]=[Elementos[j+1],Elementos[j]];
              }
            }
          }
          return (Elementos)
        };
    
 while (true) {
    let selección = prompt(mensajemenú)
    switch (selección) {
      case "1": 
      for(let i=0;Elementos.length<5;i++){
        numero = prompt(mensajeelemet)
        numero= +numero
        Elementos.push(numero)}
     
      console.log(Elementos)
        break
      case "2":
      alert(ordenarasc(Elementos))
       break
       case"3":
       alert(ordenardesc(Elementos))
       break
  }

 }


