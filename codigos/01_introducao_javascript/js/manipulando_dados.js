/* 
    O JavaScript possui uma característica chamada Prototype, que é uma série de funcionalidades 
    e atributos que já existem nativamente em diversos tipos de dados, que são lidados como objetos.
*/

/* 
    Type conversion (typecasting) vs Type coersion

    Type conversion se trata de uma conversão de tipo feita pelo dev, explicitamente, 
    e pode ser feita de diversas maneiras, por exemplo com o método Number(), 
    já type coersion é uma mudança de tipos feita pelo próprio JavaScript, implicitamente, 
    por exemplo quando você tenta somar um número na forma string com um número do tipo número.
*/

console.log(Number('9') + 5);

/* 
    Manipulando strings em números
*/

let string = "12345";
let numero = 321;

/* 
    É possível transformar números em formato de string através do método Number()
    e números em formato number em string usando o método String().
*/
console.log("Transformar String em Número e Número em String");
console.log(Number(string));
console.log(String(numero));

/*  
    Para contar a quantidade de caracteres em uma string é possível usar o método length(), 
    também é possível contar a quantidade de algarismos em um número transformando o número 
    em string e usando o mesmo método.
*/
console.log("Contando caracteres em uma palavra e dígitos em um número");
console.log(string.length);
console.log(String(numero).length);

/* 
    Para determinar uma quantia de casas decimais de um número pode-se usar o método toFixed() 
    colocando como argumento quantas casas decimais o número terá. Para mudar a formatação do 
    número de separado por ponto para separado por vírgula é possível usar o método replace(".", ",").
    O resultado final será do tipo string, e a conversão para o tipo número não será possível
    por que a vírgula não é considerada parte de um número.
*/
console.log("Casas decimais");
let numeroQuebrado = 123.456;
console.log(numeroQuebrado.toFixed(2).replace(".", ","));

/* 
    Para transformar uma string em letras maiúsculas pode-se usar o método toUpperCase(),
    e ao contrário, também é possível usar o toLowerCase() para transformar uma string em 
    todas letras minúsculas.
*/
console.log("Minúsculas e Maiúsculas");
let frase = "PROGRAMAR é muito bacana";
console.log(frase.toLocaleLowerCase());
console.log(frase.toLocaleUpperCase());

/* 
    Para separar um texto por espaços, pode-se usar o método split(" "), que transforma 
    o texto em um array de strings baseado no argumento, que no caso são os espaços. 
    Para juntar esse array é possível usar o método join('"), que juntaria essas palavras 
    sem nenhum separador, porém colocando um argumento, no caso um underscore ( join("_") ) 
    as palavras são juntadas com o argumento de separador.
*/
console.log("Separando strings");
let meuArray = frase.split(" ");
console.log(meuArray);

console.log("Juntando valores do array");
let fraseComUnderscore = meuArray.join("_");
console.log(fraseComUnderscore);

/* 
    Para verificar se um texto possui uma palavra específica, podemos usar o método includes(),
    passando como argumento a palavra a ser verificada, que retorna um valor true se encontrar 
    a palavra, e falso se não, lembrando sempre que o método é case sensitive.
*/
console.log("Encontrando palavras em frases");
console.log(frase.includes("bacana"));
console.log(frase.includes("Bacana"));

/* 
    Para criar um array com um método construtor, usa-se new Array(args), passando como argumento
    o tamanho deste vetor ou os valores, por exemplo: const array = new Array("a", "b", "c").
*/
console.log("Criando array com construtor");
let meuArrayComConstrutor = new Array('a', 'b', 'c');
console.log(meuArrayComConstrutor);

/* 
    Para contar a quantidade de elementos em um array pode-se usar o método length.
*/
console.log("Contar elementos do Array");
console.log([1, 2, 3].length);

/*  
    Para transformar uma string em um array, pode-se usar o objeto Array com o método from(),
    passando como argumento a string a ser transformada em array.
*/
console.log("Strings para arrays");
console.log(Array.from(frase));

/* 
Existem várias maneiras de manipular arrays, como: 
    o método push(), que adiciona um elemento no final do array, 
    o método unshift(), que adiciona um elemento no começo do array, 
    o método pop(), que retira um elemento do final do array, 
    o método shift(), que retira um elemento do começo do array, 
    o método slice(), que recebe como argumentos a posição de início e a posição do fim da 
        parte que você quer selecionar, e retorna os valores destas posições,
    o método splice(), que recebe como argumentos a posição de início e a quantidade 
        de elementos que você quer remover
    e o método indexOff(), que encontra o index do valor que recebe como argumento em um array.
*/
console.log("Manipulando arrays");

let tecnologias = ["html", "css", "js"];
console.log(tecnologias);

// adicionar um item no fim
tecnologias.push("jquery");
console.log(tecnologias);

// adicionar um item no começo
tecnologias.unshift("java");
console.log(tecnologias);

// remover um item do fim
tecnologias.pop();
console.log(tecnologias);

// remover um item do começo
tecnologias.shift();
console.log(tecnologias);

console.log(tecnologias.indexOf('css'));
