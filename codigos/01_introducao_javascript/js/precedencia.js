/* 
    De cima para baixo, do mais importante ao menos importante:
        * grouping                      ( )
        * negação e incremento          ! ++ --
        * multiplicação e divisão       * /
        * adição e subtração            + -
        * relacional                    < <= > >=
        * igualdade                     == != === !==
        * AND                           && 
        * OR                            ||
        * condicional                   ?:
        * assignment (atribuição)       = += -= *= %=  
*/

// Parênteses (): 
// Eles têm a precedência mais alta e são usados para 
// forçar a ordem de avaliação em expressões.

//com essa precedência, nosso resultado é 17.
// let total1 = 2 + 3 * 5
// console.log(total1)

// o cálculo mudou a precedência, fazendo nosso resultado tornar-se 25.
// let total2 = (2 + 3) * 5
// console.log(total2)

// Exponenciação **: 
// Este operador calcula uma base elevada a uma potência.
// resultado = 2 ** 3 * 4

// Multiplicação *, Divisão /, Divisão inteira //, e Módulo %: 
// Estes operadores têm a mesma precedência e são avaliados 
// da esquerda para a direita.
// resultado = 10 / 2 * 3

// Adição + e Subtração -: 
// Assim como a categoria anterior, estes operadores têm a mesma 
// precedência e são avaliados da esquerda para a direita.
resultado = 10 - 5 + 3

// Operadores de comparação (<, <=, >, >=, ==, !=) e in, not in, is, is not: 
// Eles são usados para comparar valores e têm menor precedência que os 
// operadores aritméticos.
resultado = 10 <= 5 + 3 * 2
console.log(resultado)
