while(true){let menú=["1-coloque base \n 2-Coloque potencia \n 3-ver resultado"]
let selección=prompt(menú)
switch(selección){
  case"1":var numero_base=prompt("coloque numero base")
  break
  case "2":var numero_potencia=prompt("coloque potencia")
  break
  case "3":
    function Producto(numero_base){
 return numero_base * numero_base
    }

    function Potencia( numero_potencia){
      for(let i=0;numero_potencia<i;i++)
      {Producto(numero_base)}
    
    }
      alert(Potencia(numero_potencia=i))
    break
}}




