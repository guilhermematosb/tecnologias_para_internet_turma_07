/* 
    O Scope ou Escopo determina a visibilidade de uma variável em um código, 
    e para entender scope precisamos primeiramente entender block statement, 
    que é o código presente dentro de chaves.
*/

// --------------------------------
/*  
    O escopo do var é global, ou seja, uma variável declarada com var poderá ser usada em todo o código.
*/

// var x = 0;
// console.log('> existe x antes do bloco? ', x);

// {
//     var x = 0;
// }

// console.log('> existe x depois do bloco? ', x);

// --------------------------------

/* 
    Diferentemente de var, const e let são variáveis com escopo local, ou seja, só são visíveis no escopo 
    onde foram criadas e em escopos interiores ao de criação. Em uma variável let, porém, pode-se alterar 
    o valor em um escopo e o valor irá persistir no escopo de criação.
*/

// let y = 1;
// console.log('> existe y antes do bloco? ', y);

{  
    // console.log('> existe y antes do bloco? ', y);
    // let y = 0;

    // y = 1;
}
    
// console.log('> existe y depois do bloco? ', y);


// Exercício 1: Variáveis e Constantes
// Declare uma variável usando var, let e const, e tente acessá-las fora do seu escopo.

// Usando var
// var a = 10;
// function testVar() {
//     var b = 20;
//     console.log(a);
//     console.log(b);
// }
// console.log(a);
// console.log(b);

// Usando let
// let c = 30;
// function testLet() {
//     let d = 40;
//     console.log(c);
//     console.log(d);
// }
// console.log(c);
// console.log(d);


// Exemplo com var
// function testScopeVar() {
//     if (true) {
//         var a = 10;
//     }
//     console.log(a);
// }

// testScopeVar();

// Exemplo com let e const
// function testScopeLetConst() {
//     let b = 20;
//     if (true) {
//         b = 60;
//         const c = 30;
//         console.log(b);
//         console.log(c);
//     }
//     console.log(b);
//     console.log(c);
// }
// testScopeLetConst();
