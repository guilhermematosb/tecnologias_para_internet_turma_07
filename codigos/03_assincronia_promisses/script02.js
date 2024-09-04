// Exemplo de callback hell
function primeiraFuncao(callback) {
  setTimeout(() => {
    console.log("Primeira função concluída")
    callback()
  }, 1000)
}

function segundaFuncao(callback) {
  setTimeout(() => {
    console.log("Segunda função concluída")
    callback()
  }, 1000)
}

function terceiraFuncao(callback) {
  setTimeout(() => {
    console.log("Terceira função concluída")
    callback()
  }, 1000)
}

primeiraFuncao(() => {
  segundaFuncao(() => {
    terceiraFuncao(() => {
      console.log("Todas as funções concluídas")
    })
  })
})

// primeiraFuncao(() => {
//   segundaFuncao(() => {
//     terceiraFuncao(() => {
//       console.log("Todas as funções concluídas")
//     })
//   })
// })
