package com.softtek.tattoos_proyecto.repository;

import com.softtek.tattoos_proyecto.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IUsuarioRepository extends JpaRepository<Usuario,Integer> {
    Usuario findUsuarioByNombreAndContrasenaOrEmailAndContrasena(
            String emailNombre1,
            String clave1,
            String emailNombre2,
            String clave2
    );
}
