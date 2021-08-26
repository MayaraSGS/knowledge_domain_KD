package org.rede_social.knowledgeDomainKD.controller;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.rede_social.knowledgeDomainKD.model.Usuario;
import org.rede_social.knowledgeDomainKD.model.UsuarioDTO;
import org.rede_social.knowledgeDomainKD.repository.UsuarioRepository;
import org.rede_social.knowledgeDomainKD.service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/api/v1/usuario")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class UsuarioController {

	@Autowired
	private UsuarioRepository repository;

	@Autowired
	private UsuarioService service;

	@GetMapping("/getAll")
	public ResponseEntity<List<Usuario>> getAll() {
		List<Usuario> listaDeUsuarios = repository.findAll();
		if (!listaDeUsuarios.isEmpty()) {
			return ResponseEntity.status(200).body(listaDeUsuarios);
		} else {
			return ResponseEntity.status(204).build();
		}
	}

	@GetMapping("/id/{idUsuario}")
	public ResponseEntity<Usuario> getById(@PathVariable Long idUsuario) {
		return repository.findById(idUsuario).map(usuarioExistente -> ResponseEntity.status(200).body(usuarioExistente))
				.orElse(ResponseEntity.status(204).build());
	}

	@PostMapping("/novo")
	public ResponseEntity<Usuario> novoUsuario(@Valid @RequestBody Usuario usuario) {
		return service.cadastrarUsuario(usuario)
				.map(usuarioCadastrado -> ResponseEntity.status(201).body(usuarioCadastrado))
				.orElse(ResponseEntity.status(400).build());
	}

	@PostMapping("/login")
	public ResponseEntity<UsuarioDTO> autorizarUsuario(@RequestBody Optional<UsuarioDTO> usuarioLogin) {
		return service.logarUsuario(usuarioLogin)
				.map(usuarioAutorizado -> ResponseEntity.status(202).body(usuarioAutorizado))
				.orElse(ResponseEntity.status(401).build());
	}
}
