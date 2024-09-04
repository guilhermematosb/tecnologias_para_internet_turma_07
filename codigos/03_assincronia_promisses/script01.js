// Exemplo de operação síncrona que bloqueia o código
function bloquearCodigo() {
  for (let i = 0; i < 1e9; i++) {} // Loop longo que bloqueia a execução
  console.log("Código bloqueado")
}

bloquearCodigo()
console.log("Isso só será executado após o loop")
