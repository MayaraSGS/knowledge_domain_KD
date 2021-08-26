package org.rede_social.knowledgeDomainKD.repository;

import java.util.Optional;

import org.rede_social.knowledgeDomainKD.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Long> {

	Optional<Usuario> findByEmail(String email);

}
