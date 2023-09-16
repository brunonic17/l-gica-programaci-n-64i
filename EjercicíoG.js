
    

 let Elementos=["A","S","M","E","B","N","G","F","P","Z"]
 let Elementoabuscar =""
 let mensajetrue="La letra esta dentro del grupo"
 let mensajefalse="La letra no esta dentro del grupo"

 while (true) {
    let menú = ["Dado al azar, 10 letras del abecedario adivina una de este grupo \n 1-Coloque una letra del abecedario \n 2-Ver resultado"]
    let selección = prompt(menú)
    switch (selección) {
      
      case "1": Elementoabuscar = prompt("Coloque la letra adivinar")
      Elementoabuscar=Elementoabuscar.toUpperCase()
      console.log(Elementoabuscar)
        break
      case "2": function busqueda(Elementoabuscar,Elementos){
        Elementos.forEach((element)=>{
          if(element=Elementoabuscar){ return mensajetrue}

           })
          
           
    //       else{alert(mensajefalse)}})
    //   }
        
    
    }
    alert(busqueda(Elementoabuscar,Elementos))
break
  }

 }


