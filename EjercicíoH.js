
    

 let Elementos=[]
 let Elementoabuscar =""
 let mensajetrue="La letra esta dentro del grupo"
 let mensajefalse="La letra no esta dentro del grupo"
 let mensajemenú= "Dado al azar, 10 letras del abecedario adivina una de este grupo \n 1-Coloque una letra del abecedario \n 2-Ver resultado"
 let mensajeletra="Coloque la letra adivinar"
 
 function busqueda(Elementoabuscar,Elementos){
  Elementos.forEach((element)=>{
    if(element==Elementoabuscar){alert(mensajetrue)}
    else{alert(mensajefalse) }})};

 while (true) {
    let menú = mensajemenú
    let selección = prompt(menú)
    switch (selección) {
      case "1": Elementoabuscar = prompt(mensajeletra)
      Elementoabuscar=Elementoabuscar.toUpperCase()
      console.log(Elementoabuscar)
        break
      case "2":
   alert(busqueda(Elementoabuscar,Elementos))
       break
  }

 }


