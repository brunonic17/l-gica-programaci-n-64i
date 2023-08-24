


   
    const Elementos=[]
const MC="Por favor, cargue un elemento"
for(let TE=Elementos.length;TE<=4;TE++){
    let CE=prompt(MC);
    CE= +CE;
    Elementos.push(CE);
 }

    let sum=0
    Elementos.forEach(Suma);
    function Suma(element) {
      sum += element;
    }
alert(sum)