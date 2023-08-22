let Elementos=[]
const MC="Por favor, cargue un elemento"

// Elementos.forEach(Elemento)


for(let TE=Elementos.length;TE<=4;TE++){
    let CE=prompt(MC) 
    Elementos.push(CE)   
 }

let Suma=Elementos[0]+Elementos[1]+Elementos[2]+Elementos[3]+Elementos[4]

alert(Suma)