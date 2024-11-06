document.addEventListener('DOMContentLoaded', () => {
    const formTarefa = document.getElementById('form-tarefa');
    const listaTarefas = document.getElementById('tarefas');
    const mensagemErro = document.getElementById('mensagem-erro');
    const filtroTarefa = document.getElementById('filtro-tarefa');
    
    let tarefas = [];

    // Função para carregar tarefas da API
    async function carregarTarefas() {
        try {
            const response = await fetch('http://localhost:8080/api/tarefas');
            tarefas = await response.json();
            renderizarTarefas();
        } catch (error) {
            mostrarErro('Erro ao carregar tarefas da API');
        }
    }

    // Renderizar tarefas com filtro
    function renderizarTarefas(filtro = '') {
        listaTarefas.innerHTML = '';
        tarefas.filter(tarefa => tarefa.nome.toLowerCase().includes(filtro)).forEach((tarefa) => {
            const li = document.createElement('li');
            li.innerHTML = `
                <span style="text-decoration: ${tarefa.concluida ? 'line-through' : 'none'}">${tarefa.nome}</span>
                <div>
                    <button class="concluir" onclick="concluirTarefa(${tarefa.id})">Concluir</button>
                    <button class="excluir" onclick="excluirTarefa(${tarefa.id})">Excluir</button>
                </div>
            `;
            listaTarefas.appendChild(li);
        });
    }

    // Adicionar nova tarefa via API
    formTarefa.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const nomeTarefa = document.getElementById('nome-tarefa').value.trim();
        
        if (nomeTarefa === '') {
            mostrarErro('O campo de tarefa não pode estar vazio.');
            return;
        }

        try {
            const response = await fetch('http://localhost:8080/api/tarefas', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ nome: nomeTarefa, concluida: false })
            });
            if (response.ok) {
                const novaTarefa = await response.json();
                tarefas.push(novaTarefa);
                renderizarTarefas();
                formTarefa.reset();
                limparErro();
            } else {
                mostrarErro('Erro ao adicionar tarefa');
            }
        } catch (error) {
            mostrarErro('Erro ao conectar com a API');
        }
    });

    // Marcar tarefa como concluída
    window.concluirTarefa = async function(id) {
        const tarefa = tarefas.find(t => t.id === id);
        if (!tarefa) return;

        try {
            const response = await fetch(`http://localhost:8080/api/tarefas/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...tarefa, concluida: !tarefa.concluida })
            });
            if (response.ok) {
                tarefa.concluida = !tarefa.concluida;
                renderizarTarefas();
            } else {
                mostrarErro('Erro ao atualizar tarefa');
            }
        } catch (error) {
            mostrarErro('Erro ao conectar com a API');
        }
    };

    // Excluir tarefa via API
    window.excluirTarefa = async function(id) {
        try {
            const response = await fetch(`http://localhost:8080/api/tarefas/${id}`, {
                method: 'DELETE'
            });
            if (response.ok) {
                tarefas = tarefas.filter(t => t.id !== id);
                renderizarTarefas();
            } else {
                mostrarErro('Erro ao excluir tarefa');
            }
        } catch (error) {
            mostrarErro('Erro ao conectar com a API');
        }
    };

    // Filtrar tarefas
    filtroTarefa.addEventListener('input', () => {
        const filtro = filtroTarefa.value.toLowerCase();
        renderizarTarefas(filtro);
    });

    // Exibir erros
    function mostrarErro(mensagem) {
        mensagemErro.textContent = mensagem;
    }

    function limparErro() {
        mensagemErro.textContent = '';
    }

    // SPA Navigation
    const links = document.querySelectorAll('nav a');
    const sections = document.querySelectorAll('.content-section');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            sections.forEach(section => {
                section.classList.remove('active');
            });
            document.getElementById(targetId).classList.add('active');
        });
    });

    // Exibir a primeira seção por padrão
    document.getElementById('adicionar-tarefa').classList.add('active');

    // Carregar tarefas da API ao inicializar
    carregarTarefas();
});
