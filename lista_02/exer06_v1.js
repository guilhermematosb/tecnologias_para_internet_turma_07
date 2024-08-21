/*
  ** Jogo da adivinhação **

  Apresente a mensagem ao usuário:
  "Adivinhe o número que estou pensando? Está entre 0 e 10"

  Crie um lógica para gerar um número aleatório 
  e verificar se o número digitado é o mesmo que o aleatório gerado pelo sistema.

  Enquanto o usuário não adivinhar o número, mostrar a mensagem:
  "Erro, tente novamente:"

  Caso o usuário acerte o número, apresentar a mensagem:
  "Parabéns! Você adivinhou o número em x tentativas"

  Substitua o "x" da mensagem, pelo número de tentativas
*/
let result = prompt("Advinhe o número que estou pensando? Está entre 0 e 10") // Solicita ao usuário que adivinhe um número
const randomNumber = Math.round(Math.random() * 10) // Gera um número aleatório entre 0 e 10

let xAttempts = 1 // Inicializa o contador de tentativas

while (Number(result) != randomNumber) {
  // Enquanto o número adivinhado for diferente do número aleatório
  result = prompt("Erro, tente novamente:") // Solicita ao usuário que tente novamente
  xAttempts++ // Incrementa o contador de tentativas
}

alert(
  `Parabéns! O número que eu pensei foi ${randomNumber} e você adivinhou o número em ${xAttempts} tentativas`
) // Exibe uma mensagem de sucesso com o número de tentativas
