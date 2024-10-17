/* 
O fluxo padrão vai linha a linha executando todas as linhas, mas nós podemos alterar isso utilizando estruturas condicionais.
*/

// if Statement:
let idade = 18

if (idade >= 18) {
//   console.log("Você é maior de idade.")
}

// if...else Statement:
let hora = 14

if (hora < 12) {
//   console.log("Bom dia!")
} else {
//   console.log("Boa tarde!")
}

// else if Statement:
// Vamos fazer um exemplo para medir a febre de uma pessoa:
// let temperatura = 37

// if(temperatura >= 37.5) {
//     console.log('Febre alta')
// } else if(temperatura < 37.5 && temperatura >= 37) {
//     console.log('Febre moderada')
// } else {
//     console.log('Saudável')
// }

// Podemos melhorar o código criando variáveis com relevância, que indiquem o que significa
// let temperaturaAlta = temperatura >= 37.5
// let temperaturaMedia = temperatura < 37.5 && temperatura >= 37

// if(temperaturaAlta) {
//     console.log('Febre alta')
// } else if(temperaturaMedia) {
//     console.log('Febre moderada')
// } else {
//     console.log('Saudável')
// }

// Podemos tirar as chaves caso dentro da condição tenha apenas uma linha
// if
//     (temperaturaAlta) console.log("Febre alta")
// else if
//     (temperaturaMedia) console.log("Febre moderada")
// else
//     console.log("Saudável")

//Em quais condições irá entrar?
// let temperatura = 37.5
// if(temperatura >= 37.5) {
//     console.log('Febre alta')
// } else if(temperatura >= 37.5 && temperatura >= 37) {
//     console.log('Febre moderada')
// } else {
//     console.log('Saudável')
// }

/* 
switch Statement:
A declaração switch é usada para selecionar um dos muitos blocos de código a serem executados. 
Ele avalia uma expressão, combina o valor da expressão com os valores de caso e executa blocos 
de código associados com esse caso.
*/

let diaSemana = 3;
let mensagem;

switch (diaSemana) {
    case 1:
        mensagem = "Segunda-feira";
        break;
    case 2:
        mensagem = "Terça-feira";
        break;
    case 3:
        mensagem = "Quarta-feira";
        break;
    case 4:
        mensagem = "Quinta-feira";
        break;
    case 5:
        mensagem = "Sexta-feira";
        break;
    case 6:
        mensagem = "Sábado";
        break;
    case 7:
        mensagem = "Domingo";
        break;
    default:
        mensagem = "Dia inválido";
}

// console.log("Hoje é " + mensagem);


// TOMAR CUIDADO
// console.log(3 > 2 > 1);
// Nesse caso ele verifica se 3 > 2 que é true, depois ele compara se true é maior que 1, que da falso, pois,
// true ==  1 -> agora sim seria verdadeiro

// para comparar os valores deveria ser assim:
console.log(3 > 2 && 2 > 1);