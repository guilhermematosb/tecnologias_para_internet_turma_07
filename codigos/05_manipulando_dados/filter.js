// método filter(), que cria um novo array com elementos que atendem a uma condição
const words = ["Javascript", "HTML", "CSS", "Java"]

const result = words.filter((word) => word.length > 3)
console.log(result);

const products = [
    {description: "Teclado", promotion: true},
    {description: "Mouse", promotion: false},
    {description: "Monitor", promotion: true},
]

const promotion = products.filter((product) => product.promotion === true)
console.log(promotion);
