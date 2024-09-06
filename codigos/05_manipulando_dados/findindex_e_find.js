// o método findIndex() que é responsável por retornar o índice do primeiro elemento que satisfaz uma condição em um array. Se nenhum elemento satisfizer a condição, ele retorna "-1".

const numbers = [1, 2, 3, 4, 5];

// Usando findIndex()
const firstEvenIndex = numbers.findIndex(number => number % 2 === 0);
console.log(firstEvenIndex); // 1


// método find() em JavaScript, que retorna o primeiro elemento de um array que satisfaz uma condição.

// Usando find()
const firstEven = numbers.find(number => number % 2 === 0);
console.log(firstEven); // 2
