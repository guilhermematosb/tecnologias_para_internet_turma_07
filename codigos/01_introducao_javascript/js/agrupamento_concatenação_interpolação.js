/* Agrupamento de declarações */

let nome, sobrenome, idade;
nome = "Guilherme";
sobrenome = "Barbosa";
idade = 33;

// Múltiplos argumentos na função
console.log(nome, sobrenome, idade);

/* 
Concatenação
É a combinação de duas ou mais strings usando o operador de adição (+).
*/
console.log(nome + " " + sobrenome)

/* 
Interpolação
utilizamos crases (` `) e marcadores de posição ${ }, como no
*/
console.log(`O ${nome} tem ${idade} anos.`)