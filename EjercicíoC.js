let M="Menú"
let Opciones=["1-Cargar Nombre y apellido del alumno","2-Cargar Notas","3-Sacar el promedio de las notas","4-Terminar carga de datos"]
let cnaa=true
Opciones.forEach((element)=>{
M += "\n"+element })
let Alumno =[]
let nota =[]
while(cnaa){let OP=prompt(M)
switch(OP){
  case "1": 
  var CA=prompt("Nombre y apellido del alumno");
  Alumno.push(CA);
  console.log(Alumno)
  break
  case "2": 
  var N=prompt("Cargar nota")
if(N==Number){
  N= +N
nota.push(N)
}
else{
  N=prompt("Porfavor, coloque caracteres numericos")
  N= +N
  nota.push(N)
}
if(N==null){ N=prompt("Porfavor, coloque caracteres numericos")
N= +N
nota.push(N)}
console.log(nota)
break
case"3": let sum=0
nota.forEach(Suma)
function Suma(element){sum += element}
let cociente=  nota.length
alert("El promedio de"+" "+Alumno+" es igual "+sum/cociente)
break
case "4":
  let respuesta = prompt("Está seguro que desea finalizar? y/n");
  if (respuesta.toUpperCase() === "Y") {
    cnaa = false;
  }
default:
  break;
}}
