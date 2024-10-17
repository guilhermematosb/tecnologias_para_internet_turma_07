package com.senac.primeiroprojetospringboot;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;

import java.util.Map;

@RestController
@RequestMapping("/primeiraController")
public class PrimeiraController {
    
    @GetMapping("/primeiroMetodo")
    public String primeiroMetodo() {
        return "Meu primeiro metodo api rest";
    }

    @GetMapping("/segundoMetodo/{id}")
    public String segundoMetodo(@PathVariable String id) {
        return "O parametro é " + id;
    }

    @GetMapping("/terceiroMetodo")
    public String terceiroMetodo(@RequestParam String id) {
        return "O parametro é " + id;
    }

    @GetMapping("/quartoMetodo")
    public String quartoMetodo(@RequestParam Map<String, String> allParams) {
        return "O parametro é " + allParams.entrySet();
    }

    @PostMapping("quintoMetodo")
    public String quintoMetodo(@RequestBody Usuario usuario) {
        return usuario.username();
    }

    @PostMapping("sextoMetodo")
    public String sextoMetodo(@RequestHeader Map<String, String> headers) {
        return "Metodo RequestHeader" + headers.entrySet();
    }
    
    /**
     * InnerPrimeiraController
     */
    record Usuario(String username) {}
}
