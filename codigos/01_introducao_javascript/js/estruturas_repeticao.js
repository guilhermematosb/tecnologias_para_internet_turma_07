/* 
A estrutura de repetição for tem a seguinte sintaxe:

for(inicialização de uma variável; condição de continuação para o loop; expressão final)
*/

// Vamos ver um exemplo simples de um loop for que imprime os números de 1 a 5 no console:
/* for (let i = 1; i <= 5; i++) {
  console.log(i);
} */

// Vamos ver um exemplo simples de um loop for que imprime os números de 5 a 1 no console:
/* for (let i = 5; i > 0; i--) {
  console.log(i)
} */

// Podemos tirar as chaves caso dentro da condição tenha apenas uma linha
// for (let i = 0; i < 10; i++) console.log(i)

//Exemplo com Condição de Parada usando `continue`:
// Suponha que queremos imprimir apenas os números pares de 1 a 10.
// Podemos adicionar uma condição de parada dentro do loop para verificar se o número atual é par.
// Se não for, podemos pular para a próxima iteração do loop.
/* for (let i = 1; i <= 10; i++) {
    if (i % 2 !== 0) {
        continue; // pula para a próxima iteração se o número não for par
    }
    console.log(i);
} */

// Exemplo com Condição de Parada usando break:
// Vamos considerar um exemplo onde queremos imprimir os números de 1 até encontrar um número maior que 5.
// Nesse caso, podemos usar break para sair do loop assim que encontrarmos o número maior que 5.
/* for (let i = 1; i <= 10; i++) {
    console.log(i);
    if (i > 5) {
        break; // sai do loop quando o número for maior que 5
    }
} */

// Vamos ver um exemplo simples de um loop while que imprime os números de 1 a 5 no console:
/* let i = 1;
while (i <= 5) {
    console.log(i);
    i++;
} */