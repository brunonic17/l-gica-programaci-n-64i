let M="Menú"
let Opciones=["1-Cargar Nombre y apellido del alumno","2-Cargar Notas","3-Sacar el promedio de las notas"]

Opciones.forEach((element)=>{
M += "\n"+element })

let OP=prompt(M)

switch(OP){
  case "1": do{let CNA=["1-Cargar Datos","2-Finalizar Carga"]
            let cna="Menú"
            CNA.forEach((element)=>{cna += "\n"+element})
            let CD=prompt(cna)
            switch(CD){ 
            case "1":  let Alumno =[]
            var CA=prompt("Nombre y apellido del alumno")
            Alumno.push(CA)
             break
            case "2":prompt(M)
            break    }}while(CA!=null)
  break
  case "2":do{ let cn="Menú"
            let CN=["1-Cargar Nota","2-Finalizar carga"]
            CN.forEach((element)=>{cn += "\n"+element})
            switch(CN){
              case "1":   let nota =[]
                          var N=prompt("Cargar nota")
                          N= +N
                          nota.push(N)
              break
              case "2":prompt(M)
              break
            }}while(N==Number)
            break
case"3": let sum=0
nota.forEach(Suma)
function Suma(element){sum += element}
let cociente=nota.lenght
function Promedio(Suma,cociente){Suma/cociente}
alert("El promedio de"+" "+Alumno+" es igual "+Promedio)
}