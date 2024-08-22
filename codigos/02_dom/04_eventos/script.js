function clicou() {
  alert("clicou")
}

let botao = document.querySelector(".botao02")
// Exemplo 01
// botao.addEventListener("click", clicou)

// Exemplo 02
botao.addEventListener("click", function( ) {
  clicou()
})

// Exemplo 03
document.querySelector(".botao02").addEventListener("click", clicou)