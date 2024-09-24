// 2)	Crie uma função em JavaScript que realiza operações matemáticas com base em um callback. A função deve seguir as especificações abaixo:

// a)	A função deve receber três parâmetros:
// i)	Dois números (num1 e num2) que serão usados na operação.
// ii)	Uma função de callback, responsável por realizar a operação matemática.

// b)	Callback de operações matemáticas:
// i)	O callback passado para a função deve definir qual operação matemática será realizada.
// ii)	O callback pode representar uma das quatro operações básicas: adição, subtração, multiplicação ou divisão.

// Função para realizar operação matemática
const operacaoMatematica = (num1, num2, callback) => {
    return callback(num1, num2);
};

// Funções de callback para operações básicas
const adicao = (a, b) => a + b;
const subtracao = (a, b) => a - b;
const multiplicacao = (a, b) => a * b;
const divisao = (a, b) => b !== 0 ? a / b : "Divisão por zero não é permitida";

// Exemplo de uso
console.log("Adição:", operacaoMatematica(5, 3, adicao)); // 8
console.log("Subtração:", operacaoMatematica(5, 3, subtracao)); // 2
console.log("Multiplicação:", operacaoMatematica(5, 3, multiplicacao)); // 15
console.log("Divisão:", operacaoMatematica(5, 3, divisao)); // 1.666...
