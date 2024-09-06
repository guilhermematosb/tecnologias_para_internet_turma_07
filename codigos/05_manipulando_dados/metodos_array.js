// ForEach
const numbers = [1, 2, 3, 4, 5];
// numbers.forEach(number => {
//   console.log(number * 2);
// });

// map()
// Cria um novo array com os resultados da aplicação de uma função a cada elemento.
// const numbers = [1, 2, 3, 4, 5];
// const doubled = numbers.map(number => number * 2);
// console.log(doubled);

// filter()
// Cria um novo array com todos os elementos que passam no teste da função fornecida.
// const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(number => number % 2 === 0);
console.log(evenNumbers);

// reduce()
// Reduz o array a um único valor, aplicando uma função acumuladora.
// const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, number) => accumulator + number, 0);
// console.log(sum);

// find()
// Retorna o primeiro elemento que satisfaz a função fornecida.
// const numbers = [1, 2, 3, 4, 5];
const firstEven = numbers.find(number => number % 2 === 0);
console.log(firstEven);

// some() e every()
// some(): Verifica se pelo menos um elemento satisfaz a função fornecida.
// every(): Verifica se todos os elementos satisfazem a função fornecida.
// const numbers = [1, 2, 3, 4, 5];
// const hasEven = numbers.some(number => number % 2 === 0);
// const allEven = numbers.every(number => number % 2 === 0);
// console.log(hasEven); // true
// console.log(allEven); // false

// sort()
// Ordena os elementos do array in-place e retorna o array.
// const numbers = [5, 3, 8, 1, 2];
// numbers.sort((a, b) => a - b);
// console.log(numbers);

// concat()
// Junta dois ou mais arrays e retorna um novo array.
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = arr1.concat(arr2);
// console.log(combined);
