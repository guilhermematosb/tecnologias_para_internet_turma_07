/* 
Expressões são bem tranquilas, porque expressões são qualquer linha de código 
que resolve alguma coisa no JavaScript, um exemplo é a expressão:
*/

// let number

/* 
Isso é uma expressão, já que estamos declarando uma variável, nesse caso com o valor de undefined.

Toda expressão do Javascript pode ou não terminar com ; (ponto e vírgula), o final de uma expressão 
é facultativa, mas em algumas outras linguagens é obrigatório o uso de ; (ponto e vírgula).

Em alguns casos é necessário o uso de ; (ponto e vírgula), como numa função auto-executável, 
é um dos poucos casos onde faz falta, e é em um cenário como o seguinte:
*/

// let number = 1

// (function(){
//   console.log('alo')
// })()

/* 
Caso você tente executar esse código, ele vai tentar atribuir essa função ao valor 1, onde o Javascript 
vai tentar executar o 1, passar uma função como argumento, e o 1 vai receber uma outra função. 
Um dos pouquíssimos casos onde o ; (ponto e vírgula) faz falta.
*/

/* 
Veremos também sobre operadores, nesse exemplo temos o binário, unário e ternário.
*/
/* unário */
// let number = 1

// console.log(++number)

/* binário */
// let number = 1

// console.log(number + 1)

/* ternário */
// console.log(true ? 'alo' : 'nada')


// ------------------------------------------------------------------------------------------------

/* 
Em operadores unários, os mais comuns são o typeof e o delete, onde o typeof serve para saber o tipo 
de dado que temos na expressão, e o delete vai deletar alguma propriedade de um objeto, desde que ela exista.

Exemplos de uso:
*/

/* 
delete
Nesse caso estamos deletando a propriedade age do objeto person. 
*/
// const person = {
//     name: 'Mayk',
//     age: 25,
// }
// delete person.age

// console.log(person)

/* 
Aqui vemos qual o tipo de dado que temos, nesse caso uma string.
*/
// console.log(tyepof "mayk")


// ------------------------------------------------------------------------------------------------
// Falsy e truthy

/*
O falsy é quando um valor é considerado falso em contextos que onde um booleano é obrigatório (condicionais e loops), exemplo a seguir:

	Todos os valores abaixo seriam representados como false em um boolean.
	
    false
    0
    -0
    ""
    null
    undefined
    NaN
*/
console.log( NaN ? 'verdadeiro' : 'falso' )

/* 
O truthy é quando um valor é considerado verdadeiro (true) em contextos onde um booleano é obrigatório (condicionais e loops), exemplo a seguir:

	Todos os valores abaixo seriam representados como false em um boolean.
	
    true
    {}
    []
    1
    3.23
    "0"
    "false"
    -1
    Infinity
    -Infinity
*/
console.log( Infinity ? 'verdadeiro' : 'falso' )

