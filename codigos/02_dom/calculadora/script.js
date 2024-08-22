function calcular() {
  const numberOne = parseFloat(document.getElementById("numberOne").value)
  const numberTwo = parseFloat(document.getElementById("numberTwo").value)
  const operation = document.getElementById("operation").value
  const resultadoElement = document.getElementById("resultado")

  if (isNaN(numberOne) || isNaN(numberTwo)) {
    resultadoElement.textContent = "Por favor, digite números válidos."
    return
  }

  let resultado
  switch (operation) {
    case "+":
      resultado = numberOne + numberTwo
      break
    case "-":
      resultado = numberOne - numberTwo
      break
    case "*":
      resultado = numberOne * numberTwo
      break
    case "/":
      if (numberTwo === 0) {
        resultadoElement.textContent = "Divisão por zero não é permitida."
        return
      }
      resultado = numberOne / numberTwo
      break
    default:
      resultadoElement.textContent = "Operação inválida."
      return
  }

  resultadoElement.textContent = "Resultado: " + resultado
}
