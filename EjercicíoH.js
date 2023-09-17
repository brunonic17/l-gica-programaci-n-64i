
    

 let Elementos=[]
 let numero =""
 let mensajetrue="La letra esta dentro del grupo"
 let mensajefalse="La letra no esta dentro del grupo"
 let mensajemenú= "Por favor, colocar 5 numeros al azar \n 1-Coloque elemento \n 2-Ver el orden"
 let mensajeelemet="Coloque un número"
 
 function busqueda(Elementoabuscar,Elementos){
  Elementos.forEach((element)=>{
    if(element==Elementoabuscar){alert(mensajetrue)}
    else{alert(mensajefalse) }})};

 while (true) {
    let menú = mensajemenú
    let selección = prompt(menú)
    switch (selección) {
      case "1": 
      for(let i=0;Elementos.length()<5;i++){
        numero = prompt(mensajeelemet)
        numero= +numero
        Elementos.push(numero)}
     
      console.log(Elementos)
        break
      case "2":
   alert(busqueda(Elementoabuscar,Elementos))
       break
  }

 }


