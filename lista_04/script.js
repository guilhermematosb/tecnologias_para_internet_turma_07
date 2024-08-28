// document.getElementById('add-contact-btn').addEventListener('click', function() {

//     // Captura os valores dos campos
//     const name = document.getElementById('name').value.trim();
//     const phone = document.getElementById('phone').value.trim();

//     // Validações simples
//     if (name === '' || phone === '') {
//         alert('Por favor, preencha ambos os campos.');
//         return;
//     }

//     // Cria um novo elemento de lista
//     const li = document.createElement('li');
//     li.textContent = `${name} - ${phone}`;

//     // Adiciona o novo contato na lista
//     document.getElementById('contact-list').appendChild(li);

//     // Limpa os campos de entrada
//     document.getElementById('name').value = '';
//     document.getElementById('phone').value = '';
// });

function adicionar() {
    // Captura os valores dos campos
    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();

    // Validações simples
    if (name === '' || phone === '') {
        alert('Por favor, preencha ambos os campos.');
        return;
    }

    // Cria um novo elemento de lista
    const li = document.createElement('li');
    li.textContent = `${name} - ${phone}`;

    // Adiciona o novo contato na lista
    document.getElementById('contact-list').appendChild(li);

    // Limpa os campos de entrada
    document.getElementById('name').value = '';
    document.getElementById('phone').value = '';
}

document.getElementById('search-bar').addEventListener('input', function(event) {
    const searchTerm = event.target.value.toLowerCase();
    const contacts = document.querySelectorAll('#contact-list li');

    contacts.forEach(function(contact) {
        const contactText = contact.textContent.toLowerCase();
        if (contactText.includes(searchTerm)) {
            contact.style.display = '';
        } else {
            contact.style.display = 'none';
        }
    });
});
