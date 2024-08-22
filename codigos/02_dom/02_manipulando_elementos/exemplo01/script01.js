// Seleciona o elemento com o ID "caixa-lista-ordenada"
let elementoPai = document.querySelector("#caixa-lista-ordenada");
console.log(elementoPai);

// Seleciona o elemento <ul> dentro do elemento pai
let elementoUl = elementoPai.querySelector("ul");
console.log(elementoUl);

// Obtém todos os filhos imediatos do elemento pai selecionado
let filhosImediatos = elementoPai.children;
console.log(filhosImediatos);

// Obtém os filhos do primeiro filho imediato do elemento pai
console.log(filhosImediatos[0].children);

// Exibe o conteúdo HTML do elemento <ul>
console.log(elementoUl.innerHTML);

// Altera o conteúdo HTML do elemento <ul>
elementoUl.innerHTML = "<li>Todos elementos ul alterado</li>";
elementoUl.innerHTML += "<li>Concatenando novo elemento</li>";

// Altera o conteúdo HTML do primeiro item (filho) do elemento <ul>
elementoUl.children[0].innerHTML = "Item alterado <strong>novamente</strong>";

// Altera o texto do primeiro item (filho) do elemento <ul>, tratando como texto plano (HTML não interpretado)
elementoUl.children[0].innerText = "Item alterado <strong>novamente</strong>";
