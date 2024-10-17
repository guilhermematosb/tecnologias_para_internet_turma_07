/* 
  Solicite 2 números, faça a soma deles
  e apresente o resultado final ao usuário
*/

/* 
  Validação de Entrada:
      Certifique-se de que os valores inseridos pelo usuário são números válidos.

  Estrutura de Função:
      Encapsule a lógica em uma função para melhorar a reutilização e organização do código.

  Mensagens mais Informativas:
      Adicione mensagens de erro e feedback para o usuário.
*/

alert("Iremos somar 2 números")
function solicitarNumero(mensagem) {
  let numero = prompt(mensagem)
  while (isNaN(numero) || numero.trim() === "") {
    alert("Por favor, digite um número válido.")
    numero = prompt(mensagem)
  }
  return Number(numero)
}

function somarDoisNumeros() {
  alert("Iremos somar 2 números")

  let numberOne = solicitarNumero("Digite o primeiro número:")
  let numberTwo = solicitarNumero("Digite o segundo número:")

  let result = numberOne + numberTwo

  alert("Resultado final: " + result)
}

somarDoisNumeros()

/* 
Explicação das Melhorias

  Função solicitarNumero(mensagem):
      Solicita um número ao usuário e valida a entrada.
      isNaN(numero) verifica se a entrada não é um número.
      numero.trim() === "" garante que a entrada não esteja vazia.
      
  Função somarDoisNumeros():
      Organiza a lógica principal de solicitação de números e soma.
      Chama a função solicitarNumero para cada entrada, garantindo validação.
*/
