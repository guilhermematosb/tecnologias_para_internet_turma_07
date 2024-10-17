function asyncFunction() {
  return new Promise((resolve, reject) => {
    setInterval(() => {
      let sucesso = false
      if (sucesso) {
        resolve("Operação bem-sucedida")
      } else {
        reject("Operação falhou")
      }
    }, 3000)
  })
}

function fetch01() {
  const response = asyncFunction()
  console.log(response)
}

async function fetch02() {
  const response = await asyncFunction()
  console.log(response)
}

const fetch03 = async () => {
  const response = await asyncFunction()
  console.log(response)
}

const fetch04 = async () => {
  try {
    const response = await asyncFunction()
    console.log("Sucesso:", response)
  } catch (error) {
    console.log("Erro:", error);
    
  }
}

fetch04()