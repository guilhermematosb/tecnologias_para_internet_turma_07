// Crie uma função tradicional que recebe dois números como parâmetros e retorna a soma deles.
function soma(a, b) {
    return a + b;
}
console.log(soma(3, 5)); // Saída: 8

// Crie uma função anônima que recebe dois números como parâmetros e retorna o produto deles. Atribua essa função a uma variável.
const produto = function(a, b) {
    return a * b;
}
console.log(produto(3, 5)); // Saída: 15


// Crie uma arrow function que recebe dois números como parâmetros e retorna a divisão do primeiro pelo segundo.
const divisao = (a, b) => a / b;
console.log(divisao(10, 2)); // Saída: 5

// Crie uma função que recebe um número como parâmetro e retorna o quadrado dele. Se nenhum parâmetro for passado, a função deve retornar 0.
function quadrado(n = 0) {
    return n * n;
}
console.log(quadrado(4)); // Saída: 16
console.log(quadrado()); // Saída: 0

// Crie uma função que retorna outra função. A função retornada deve receber um nome como parâmetro e retornar uma saudação.
function saudacaoFactory() {
    return function(nome) {
        return `Olá, ${nome}!`;
    }
}
const saudacao = saudacaoFactory();
console.log(saudacao('Guilherme')); // Saída: Olá, Guilherme!
