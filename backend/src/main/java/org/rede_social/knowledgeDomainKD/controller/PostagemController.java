package org.rede_social.knowledgeDomainKD.controller;

import java.util.List;

import org.rede_social.knowledgeDomainKD.model.Postagem;
import org.rede_social.knowledgeDomainKD.repository.PostagemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/api/v1/postagem")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class PostagemController {
	
	@Autowired
	private PostagemRepository postagemRepository;
	
	@PostMapping
	public ResponseEntity<Postagem> post(@RequestBody Postagem postagem) {
		return ResponseEntity.status(HttpStatus.CREATED).body(postagemRepository.save(postagem));
    }

	@GetMapping(value = "/getAll")
	public ResponseEntity<List<Postagem>> getAll() {
		return ResponseEntity.status(HttpStatus.OK).body(postagemRepository.findAll());
	}
	
	@GetMapping(value = "/{id}")
	public ResponseEntity<Postagem> getById(@PathVariable Long id) {
		return postagemRepository.findById(id).map(resp -> ResponseEntity.ok(resp))
				.orElse(ResponseEntity.notFound().build());
	}
	
	@GetMapping("/titulo/{titulo}")
	public ResponseEntity<List<Postagem>> GetByNome(@PathVariable String titulo){
		return ResponseEntity.status(200).body(postagemRepository.findAllByTituloContainingIgnoreCase(titulo));
	}

	@DeleteMapping(value = "/{id}")
	public void deleteById (@PathVariable Long id) {
		postagemRepository.deleteById(id);
	}
	
	@PutMapping
	public ResponseEntity<Postagem> put(@RequestBody Postagem postagem) {
		return ResponseEntity.status(HttpStatus.OK).body(postagemRepository.save(postagem));
    }

}
