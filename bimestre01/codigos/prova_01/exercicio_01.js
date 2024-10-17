// Crie uma função anônima ou uma arrow function para calcular a média aritmética das notas de estudantes. Siga os seguintes passos:

// i)	Crie um array de objetos representando estudantes. Cada objeto deve ter duas propriedades: nome (string) e nota (número).
// ii)	A função deve receber um array de objetos como argumento.
// iii)	A função deve calcular e retornar a média aritmética das notas dos estudantes.

// Array de estudantes
const estudantes = [
    { nome: "Ana", nota: 8 },
    { nome: "Pedro", nota: 6 },
    { nome: "João", nota: 9 },
    { nome: "Maria", nota: 7 }
];

// Função para calcular a média aritmética com for
const calcularMedia = (estudantes) => {
    let somaNotas = 0;
    for (let i = 0; i < estudantes.length; i++) {
        somaNotas += estudantes[i].nota;
    }
    return somaNotas / estudantes.length;
};

// Chamando a função
const mediaFor = calcularMedia(estudantes);
console.log(`Média aritmética com for: ${mediaFor}`);


// Função para calcular a média aritmética
const calcularMediaComReduce = (estudantes) => {
    const somaNotas = estudantes.reduce((soma, estudante) => soma + estudante.nota, 0);
    return somaNotas / estudantes.length;
};

// Chamando a função
const media = calcularMediaComReduce(estudantes);
console.log(`Média aritmética: ${media}`);
