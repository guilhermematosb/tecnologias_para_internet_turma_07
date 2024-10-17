// Criação da função processarDados:
// o Implemente uma função assíncrona chamada processarDados que faça uso da
// função buscarDados.
// o Dentro da função, utilize await para aguardar a resolução da Promise retornada
// pela buscarDados.
// o Quando a requisição for bem-sucedida, exiba os dados no console.
// o Caso ocorra um erro, utilize um bloco try-catch para capturar e exibir a
// mensagem de erro no console.

function buscarDados() {
  return new Promise((resolve, reject) => {
    // Simulando um atraso de 2 segundos
    setTimeout(() => {
      const sucesso = Math.random() > 0.5 // 50% de chance de sucesso

      if (sucesso) {
        resolve({
          id: 1,
          nome: "Produto A",
          preco: 100,
        })
      } else {
        reject("Erro: Não foi possível buscar os dados.")
      }
    }, 2000)
  })
}

// Função assíncrona que processa os dados
const processarDados = async () => {
  try {
    console.log("Buscando dados...")
    const dados = await buscarDados() // Aguarda a resposta da função buscarDados
    console.log("Dados recebidos:", dados)
  } catch (erro) {
    console.error(erro) // Trata o erro em caso de falha na requisição
  }
}

// Chamando a função para processar os dados
processarDados()
