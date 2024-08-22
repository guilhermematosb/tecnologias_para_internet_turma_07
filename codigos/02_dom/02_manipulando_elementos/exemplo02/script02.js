// Seleciona o elemento com o ID "caixa-lista-ordenada"
let elementoPai = document.querySelector("#caixa-lista-ordenada");
console.log(elementoPai);

// Seleciona o elemento <ul> dentro do elemento pai
let elementoUl = elementoPai.querySelector("ul");
console.log(elementoUl);

// Adiciona um conteúdo ao já existente no primeiro filho do elemento <ul>
elementoUl.children[0].append(" -> conteúdo alterado");

// Cria um novo elemento <li>
let novoLi = document.createElement("li");
// Define o texto do novo elemento <li>
novoLi.innerText = "Item adicionado com createElement";
// Adiciona o novo elemento <li> como último filho do elemento <ul>
elementoUl.appendChild(novoLi);

// Cria um novo elemento <li> para ser adicionado no início
let novoLiPrepend = document.createElement("li");
// Define o texto do novo elemento <li>
novoLiPrepend.innerText = "Item adicionado com prepend";
// Adiciona o novo elemento <li> como primeiro filho do elemento <ul>
elementoUl.prepend(novoLiPrepend);
