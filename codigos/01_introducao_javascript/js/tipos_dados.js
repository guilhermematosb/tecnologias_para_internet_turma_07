/* 
String
Representa uma cadeia de caracteres, como uma palavra, uma frase, ou um texto.
*/
let nome = "Guilherme Barbosa";
console.log(nome);

// ------------------------------------------------------------------------------------------------

/* 
Number
É um tipo de dado numérico. Os números podem ser inteiros, reais, positivos ou negativos.
*/
let idade = 12;
let pontuacao = -8.9;
console.log(idade, pontuacao);

// ------------------------------------------------------------------------------------------------

/* 
Boolean
É um tipo de dado lógico que tem apenas dois valores possíveis: 
verdadeiro (true) ou falso (false).
*/
let finalDeSemana = false;
let segunda = true;

// ------------------------------------------------------------------------------------------------

/*
Objeto
É um tipo de dado estrutural que representa um objeto, do mundo real ou não, 
que recebe atributos (propriedades) e métodos (funcionalidades).
*/
let usuario = {
    nome: "Gui Barbosa",
    idade: 20,
}
// Para imprimir na tela o objeto todo:
console.log(usuario);
// Para imprimir na tela apenas uma propriedade do objeto:
console.log(usuario.nome);

// ------------------------------------------------------------------------------------------------

/*
Array
Representa um agrupamento de dados, de diferentes tipos, em forma de lista.
*/
const lista = ["leite", "suco", "chocolate", 2, 3.9 ]
// Para imprimir na tela o array todo:
console.log(lista)
// Para imprimir apenas um elemento do array na tela você deve acessar a posição que ele está.
// O primeiro elemento em um array sempre está na posição 0 e cada elemento subsequente é numerado sequencialmente
// a partir dele:
console.log(lista[0]) // leite 
console.log(lista[2]) // chocolate
// Se você quiser saber quantos elementos tem no array:
console.log(lista.length)

/*
Undefined
Uma variável que não recebeu um valor específico ainda, recebe o valor undefined (indefinido) 
*/
let assunto 
console.log(assunto);

// ------------------------------------------------------------------------------------------------

/* 
Null
É um valor nulo, vazio. 
*/
let texto = null;
console.log(texto);