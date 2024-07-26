/* 
    Para entender variáveis podemos pensar nelas como nomes simbólicos para algum valor, atalhos de código ou identificadores. 
    Para criar uma variável, podemos usar uma das palavras reservadas: var, let e const, por exemplo: var clima = "quente", 
    onde var é a palavra que simboliza a criação da variável, clima é o nome da variável, o sinal de igual denota que a variável 
    está recebendo um valor e "quente" é a string que está sendo recebida. As variáveis declaradas com "var" e "let" podem 
    ter seu valor mudado, já a const não.
*/
var nome1 = "Guilherme Barbosa";
let nome2 = "Guilherme Barbosa";
const NOME = "Guilherme Barbosa";

/* 
    O Javascript, como toda linguagem de programação, tem sua própria estrutura de dados embutida.
    A tipagem no Javascript funciona de forma dinâmica, ou seja, não é necessário declarar o tipo de uma variável
    antes de atribuir um valor para ela. O tipo é definido quando o programa é processado.
    Além disso, é possível reatribuir uma mesma variável com um tipo diferente.
*/
let endereco = 42; // endereco é um Number agora
console.log(typeof endereco);

endereco = "bar"; // endereco é um String agora
console.log(typeof endereco);

endereco = true; // endereco é um Boolean agora
console.log(typeof endereco);


