// Seleciona o elemento com o ID "caixa-lista-ordenada"
let elementoPai = document.querySelector("#caixa-lista-ordenada");
console.log(elementoPai);

// Seleciona o elemento <ul> dentro do elemento pai
let elementoUl = elementoPai.querySelector("ul");
console.log(elementoUl);

// Cria dois novos elementos <span>
let elementoSpan1 = document.createElement("span");
let elementoSpan2 = document.createElement("span");

// Define o texto dos novos elementos <span>
elementoSpan1.innerText = "span 1 adicionado";
elementoSpan2.innerText = "span 2 adicionado";

// Adiciona o elemento <span> após o elemento <ul>
elementoUl.after(elementoSpan1);

// Adiciona o elemento <span> antes do elemento <ul>
elementoUl.before(elementoSpan2);

// Cria um novo elemento <ul>
let novoUl = document.createElement("ul");

// Itera de 1 a 5 para criar e adicionar novos elementos <li> ao novo <ul>
for (let i = 1; i < 6; i++) {
    // Cria um novo elemento <li>
    let novoLi = document.createElement("li");
    // Define o conteúdo HTML do novo <li>
    novoLi.innerHTML = "Item criado no for - " + i;
    // Adiciona o novo <li> como filho do novo <ul>
    novoUl.append(novoLi);
}

// Adiciona o novo <ul> após o elemento <ul> original
elementoUl.after(novoUl);
