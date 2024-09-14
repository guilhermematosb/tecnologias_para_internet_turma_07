// Exercico 07 - lista 02

// let opcao
// let itens = []

// while (opcao != 3) {
//     opcao = Number(
//         prompt(`
//             Olá usuário! Digite o número de uma opção desejada

//             1. Cadastrar um item na lista;
//             2. Mostrar itens cadastrados;
//             3. Sair do programa.
//         `)
//     )

//     if (opcao == 1) {
//         let item = prompt("Digite o nome do item")
//         itens.push(item)
//     } else if (opcao == 2) {
//         if (itens.length == 0) {
//             alert("Não existem itens na lista")
//         } else {
//             alert(itens)
//         }
//     } else {
//         alert("Até mais")
//     }
// }


// Crie uma função que receba um array de objetos representando estudantes,
// cada objeto deve ter as propriedades nome e nota. A função deve retornar o
// nome do estudante com a maior nota.

// let estudantes = [
//     {nome: 'Aluno 01', nota: 70},
//     {nome: 'Aluno 02', nota: 85},
//     {nome: 'Aluno 03', nota: 100}
// ]

// // console.log(estudantes[2].nome);


// function maiorNota(estudantes) {
//     let melhorEstudante = estudantes[0]
    
//     for (let index = 1; index < estudantes.length; index++) {
//         if (estudantes[index].nota > melhorEstudante.nota) {
//             melhorEstudante = estudantes[index]
//         }
//     }

//     console.log(melhorEstudante.nome);
// }

// maiorNota(estudantes)

// Crie uma função que recebe uma string e verifica se ela é um
// palíndromo (lê-se da mesma forma de trás para frente).

function inverteString(palavra) {
    let invertida = ''

    for (let index = palavra.length - 1; index >= 0; index--) {
        invertida += palavra[index]
    }

    return invertida
}

function palindromo (palavra) {
    let invertida = inverteString(palavra)

    return palavra == invertida
}

// console.log(inverteString("radar"));
// console.log(palindromo("radar"));

// Crie uma função de alta ordem que recebe um array e uma função de callback. A
// função de alta ordem deve aplicar a função de callback em cada elemento do array e
// retornar um novo array com os resultados

const dobrar = (numero) => {
    return numero * 2
}

function criarContador (numero) {
    return ++numero
}

const percorrerArray = function(arr, callback) {
    let resultado = []

    for (let i = 0; i < arr.length; i++) {
        resultado.push(callback(arr[i]))
    }

    return resultado
}

let numeros = [1,2,3,4,5]

let resultado = percorrerArray(numeros, dobrar)
console.log(resultado);

let resultado2 = percorrerArray(numeros, criarContador)
console.log(resultado2);