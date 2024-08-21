// Crie uma calculadora simples usando funções. A calculadora deve ter funções para adição, subtração, multiplicação e divisão. Todas as funções devem ser declaradas utilizando pelo menos uma vez cada uma das formas: função tradicional, função anônima e arrow function.

// Crie uma função principal que recebe três parâmetros: dois números e uma string indicando a operação ("soma", "subtracao", "multiplicacao", "divisao"). A função deve chamar a operação correta com os dois números e retornar o resultado.

// Funções de operação
function soma(a, b) {
    return a + b;
}

const subtracao = function(a, b) {
    return a - b;
}

const multiplicacao = (a, b) => a * b;

const divisao = (a, b) => a / b;

// Função principal
function calculadora(num1, num2, operacao) {
    switch (operacao) {
        case 'soma':
            return soma(num1, num2);
        case 'subtracao':
            return subtracao(num1, num2);
        case 'multiplicacao':
            return multiplicacao(num1, num2);
        case 'divisao':
            return divisao(num1, num2);
        default:
            return 'Operação inválida';
    }
}

// Testes
console.log(calculadora(10, 5, 'soma')); // Saída: 15
console.log(calculadora(10, 5, 'subtracao')); // Saída: 5
console.log(calculadora(10, 5, 'multiplicacao')); // Saída: 50
console.log(calculadora(10, 5, 'divisao')); // Saída: 2
console.log(calculadora(10, 5, 'modulo')); // Saída: Operação inválida
