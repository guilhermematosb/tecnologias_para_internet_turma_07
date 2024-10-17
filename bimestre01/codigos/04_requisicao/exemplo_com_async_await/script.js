// o que é síncrono e assíncrono?

// Como a web funciona (Requisição e Resposta)?

// Como funciona uma API (Application Programming Interface)?

// O que é um callback?

// Fazendo uma requisição?

async function getUsers() {
  try {
      let response = await fetch('https://jsonplaceholder.typicode.com/users');
      let users = await response.json();

      console.log(users);
      
  } catch (error) {
      console.error('Erro:', error);
  }
}

getUsers();