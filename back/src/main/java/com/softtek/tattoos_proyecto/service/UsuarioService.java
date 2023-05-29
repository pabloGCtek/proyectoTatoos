package com.softtek.tattoos_proyecto.service;

import com.softtek.tattoos_proyecto.model.Usuario;
import com.softtek.tattoos_proyecto.repository.IUsuarioRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UsuarioService implements IUsuarioService{
    @Autowired
    IUsuarioRepository ur;

    @Transactional
    @Override
    public Usuario insertUsuario(Usuario u) {
        return ur.save(u);
    }

    @Override
    public Usuario iniciarSesion(String emailNombre, String clave) {
        return ur.findUsuarioByNombreAndContrasenaOrEmailAndContrasena(emailNombre,clave,emailNombre,clave);
    }
}
