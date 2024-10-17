// Funções declaradas:

function dizerOla() {
    console.log("Olá"); // conjunto de instruções
}

dizerOla()

// Função para Somar Dois Números:
function somar(a, b) {
    return a + b;
}

console.log(somar(5, 3)); // Saída: 8

// Função para Verificar se um Número é Par:
function ehPar(numero) {
    return numero % 2 === 0;
}

console.log(ehPar(4)); // Saída: true
console.log(ehPar(7)); // Saída: false

// Função para Verificar se uma Palavra é um Palíndromo:
function ehPalindromo(palavra) {
    const reverso = palavra.split('').reverse().join('');
    return palavra === reverso;
}

console.log(ehPalindromo("radar")); // Saída: true
console.log(ehPalindromo("carro")); // Saída: false

// Função para Gerar um Número Aleatório entre dois Limites:
function gerarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(gerarNumeroAleatorio(1, 100)); // Saída: um número aleatório entre 1 e 100


// Funções anônimas:
const dizerOi = function() { 
    console.log("Oi"); // conjunto de instruções
}

dizerOi()

// Função Anônima para Multiplicar Dois Números:
const multiplicar = function(a, b) {
    return a * b;
};

console.log(multiplicar(3, 4)); // Saída: 12

// Função Anônima para Calcular o Quadrado de um Número:
const quadrado = function(x) {
    return x * x;
};

console.log(quadrado(5)); // Saída: 25

// Função Anônima para Verificar se um Número é Positivo, Negativo ou Zero:
const verificarNumero = function(num) {
    if (num > 0) {
        return "Positivo";
    } else if (num < 0) {
        return "Negativo";
    } else {
        return "Zero";
    }
};

console.log(verificarNumero(-5)); // Saída: Negativo

// Arrow Function

 // Somar Dois Números:
const somar = (a, b) => {
    return a + b;
};

console.log(somar(5, 3)); // Saída: 8

// Verificar se um Número é Par:
const ehPar = numero => {
    return numero % 2 === 0;
};

console.log(ehPar(4)); // Saída: true
console.log(ehPar(7)); // Saída: false

//  Verificar se uma Palavra é um Palíndromo:
const ehPalindromo = palavra => {
    const reverso = palavra.split('').reverse().join('');
    return palavra === reverso;
};

console.log(ehPalindromo("radar")); // Saída: true
console.log(ehPalindromo("carro")); // Saída: false
