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

// console.log(asyncFunction())

// console.log("Executando função assíncrona");
// const response = asyncFunction();

// console.log(response);

asyncFunction()
  .then((result) => console.log(result))
  .catch((error) => console.error(error))
//   .finally(() => console.log("Operação finalizada"))
