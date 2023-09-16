
    

 let Elementos=[]
 let numero_producto =""

  do {
    let menú = ["1-Coloque los elementos \n 2-Coloque número de productos \n 3-Ver resultado"]
    let selección = prompt(menú)
    switch (selección) {
      case "1": 
     
      for(let i=0;Elementos.length<5; i++){
        let MElemetos = prompt("Coloque Elementos")
        MElemetos=+MElemetos
        Elementos.push(MElemetos) 
      }
     
        break
      case "2": numero_producto = prompt("Coloque número para el producto")
        break
      case "3":
        let producto=Elementos.map((Elemento)=>{return Elemento*numero_producto})
    alert(producto)
      break}

  }while (true)


