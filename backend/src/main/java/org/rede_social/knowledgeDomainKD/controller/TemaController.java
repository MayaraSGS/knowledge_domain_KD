package org.rede_social.knowledgeDomainKD.controller;

import java.util.List;

import org.rede_social.knowledgeDomainKD.model.Tema;
import org.rede_social.knowledgeDomainKD.repository.TemaRepository;
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
@RequestMapping(value = "/api/v1/tema")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class TemaController {

	@Autowired
	private TemaRepository temaRepository;

	@PostMapping
	public ResponseEntity<Tema> post(@RequestBody Tema tema) {
		return ResponseEntity.status(HttpStatus.CREATED).body(temaRepository.save(tema));
    }

	@GetMapping(value = "/getAll")
	public ResponseEntity<List<Tema>> getAll() {
		return ResponseEntity.status(HttpStatus.OK).body(temaRepository.findAll());
	}

	@GetMapping(value = "/{id}")
	public ResponseEntity<Tema> getById(@PathVariable Long id) {
		return temaRepository.findById(id).map(resp -> ResponseEntity.ok(resp))
				.orElse(ResponseEntity.notFound().build());

	}
	
	@GetMapping("/nome/{nomeTema}")
	public ResponseEntity<List<Tema>> GetByNome(@PathVariable String nomeTema){
		return ResponseEntity.status(200).body(temaRepository.findAllByNomeTemaContainingIgnoreCase(nomeTema));
	}

	@DeleteMapping(value = "/{id}")
	public void deleteById (@PathVariable Long id) {
		temaRepository.deleteById(id);
	}
	
	@PutMapping
	public ResponseEntity<Tema> put(@RequestBody Tema tema) {
		return ResponseEntity.status(HttpStatus.OK).body(temaRepository.save(tema));
    }
}
