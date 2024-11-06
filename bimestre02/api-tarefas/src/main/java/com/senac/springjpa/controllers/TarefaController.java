package com.senac.springjpa.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.senac.springjpa.entity.Tarefa;
import com.senac.springjpa.repository.TarefaRepository;

import java.util.List;

@RestController
@RequestMapping("/api/tarefas")
public class TarefaController {
    @Autowired
    private TarefaRepository tarefaRepository;

    // Listar todas as tarefas
    @GetMapping
    public List<Tarefa> listarTarefas() {
        return tarefaRepository.findAll();
    }

    // Criar uma nova tarefa
    @PostMapping
    public Tarefa criarTarefa(@RequestBody Tarefa tarefa) {
        return tarefaRepository.save(tarefa);
    }

    // Atualizar uma tarefa (concluir/editar)
    @PutMapping("/{id}")
    public Tarefa atualizarTarefa(@PathVariable Long id, @RequestBody Tarefa tarefaAtualizada) {
        return tarefaRepository.findById(id)
            .map(tarefa -> {
                tarefa.setNome(tarefaAtualizada.getNome());
                tarefa.setConcluida(tarefaAtualizada.isConcluida());
                return tarefaRepository.save(tarefa);
            })
            .orElseThrow(() -> new RuntimeException("Tarefa não encontrada"));
    }

    // Excluir uma tarefa
    @DeleteMapping("/{id}")
    public void excluirTarefa(@PathVariable Long id) {
        tarefaRepository.deleteById(id);
    }
}
