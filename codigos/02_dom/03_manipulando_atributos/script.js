function clicou() {
  let input = document.querySelector('input');

  console.log(input.getAttribute('type'));
  console.log(input.getAttribute('placeholder'));

  console.log(input.hasAttribute('type'));

  console.log(input.setAttribute('placeholder', 'Adicionando placeholder com setAttribute'));
}


function mostrarSenha(){
    let input = document.querySelector('#senha');
    let botao = document.querySelector('.botao02');

    if(input.getAttribute('type') === 'text'){
        input.setAttribute('type', 'password');
        botao.innerHTML = "Mostrar senha"
    } else {
        input.setAttribute('type', 'text');
        botao.innerHTML = "Esconder senha"
    }
}