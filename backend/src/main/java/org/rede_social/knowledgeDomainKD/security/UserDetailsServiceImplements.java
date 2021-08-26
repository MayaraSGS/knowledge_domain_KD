package org.rede_social.knowledgeDomainKD.security;

import java.util.Optional;

import org.rede_social.knowledgeDomainKD.model.Usuario;
import org.rede_social.knowledgeDomainKD.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UserDetailsServiceImplements implements UserDetailsService {

	@Autowired
	private UsuarioRepository repository;

	@Override
	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {

		Optional<Usuario> usuario = repository.findByEmail(email);

		if (usuario.isPresent()) {
			return new UserDetailsImplements(usuario.get());
		} else {
			throw new UsernameNotFoundException(email + " not found.");
		}
	}

}
