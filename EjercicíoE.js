newFunction()
    



function newFunction() {
  while (true) {
    let menú = ["1-Coloque base \n 2-Coloque potencia \n 3-Ver resultado"]
    let selección = prompt(menú)
    switch (selección) {
      case "1": var numero_base = prompt("coloque numero base")
        break
      case "2": var numero_potencia = prompt("coloque potencia")
        break
      case "3":
        numero_base = +numero_base
        numero_potencia = +numero_potencia
        function Potencia(numero_potencia, numero_base) {
          let produ = 0

          produ = numero_base ** numero_potencia

          return produ
        }

        alert(Potencia(numero_potencia, numero_base))
        break
    }

  }
}

