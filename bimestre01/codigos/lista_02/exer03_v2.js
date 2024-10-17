/* 
  Solicite 2 números, faça a soma deles
  e apresente o resultado final ao usuário
*/

/* 
  Vamos resolver o exercício proposto de adicionar outras operações (subtração, multiplicação e divisão) 
  e permitir que o usuário escolha qual operação deseja realizar. Vamos também fornecer exemplos para cada caso.
*/

function solicitarNumero(mensagem) {
  let numero = prompt(mensagem)
  while (isNaN(numero) || numero.trim() === "") {
    alert("Por favor, digite um número válido.")
    numero = prompt(mensagem)
  }
  return Number(numero)
}

function solicitarOperacao() {
  let operacao = prompt("Escolha a operação (+, -, *, /):")
  while (!["+", "-", "*", "/"].includes(operacao)) {
    alert("Por favor, escolha uma operação válida (+, -, *, /).")
    operacao = prompt("Escolha a operação (+, -, *, /):")
  }
  return operacao
}

function calcularResultado(num1, num2, operacao) {
  switch (operacao) {
    case "+":
      return num1 + num2
    case "-":
      return num1 - num2
    case "*":
      return num1 * num2
    case "/":
      if (num2 === 0) {
        alert("Divisão por zero não é permitida.")
        return null
      }
      return num1 / num2
    default:
      return null
  }
}

function executarCalculadora() {
  alert("Calculadora de operações básicas")

  let numberOne = solicitarNumero("Digite o primeiro número:")
  let numberTwo = solicitarNumero("Digite o segundo número:")
  let operacao = solicitarOperacao()

  let result = calcularResultado(numberOne, numberTwo, operacao)

  if (result !== null) {
    alert("Resultado final: " + result)
  }
}

executarCalculadora()

/* 
Explicação do Código

  Função solicitarNumero(mensagem):
      Solicita um número do usuário e valida a entrada.

  Função solicitarOperacao():
      Solicita a operação do usuário e valida a entrada para garantir que seja uma das operações permitidas (+, -, *, /).

  Função calcularResultado(num1, num2, operacao):
      Realiza o cálculo com base na operação escolhida.
      Utiliza um switch para determinar a operação a ser realizada.
      Verifica se a operação é uma divisão por zero e trata essa situação com uma mensagem de alerta.

  Função executarCalculadora():
      Gerencia o fluxo principal da calculadora, chamando as funções para solicitar números e a operação, e exibindo o resultado final.
*/

/* 
Exemplos de Uso

Exemplo 1: Soma

  Entrada do usuário:
      Primeiro número: 5
      Segundo número: 3
      Operação: +

  Saída:
      Resultado final: 8

Exemplo 2: Subtração

  Entrada do usuário:
      Primeiro número: 10
      Segundo número: 4
      Operação: -

  Saída:
      Resultado final: 6

Exemplo 3: Multiplicação

  Entrada do usuário:
      Primeiro número: 7
      Segundo número: 6
      Operação: *

  Saída:
      Resultado final: 42

Exemplo 4: Divisão

  Entrada do usuário:
      Primeiro número: 20
      Segundo número: 5
      Operação: /

  Saída:
      Resultado final: 4

Exemplo 5: Divisão por Zero

  Entrada do usuário:
      Primeiro número: 10
      Segundo número: 0
      Operação: /

  Saída:
      Alerta: "Divisão por zero não é permitida."
      Sem resultado final.
*/
