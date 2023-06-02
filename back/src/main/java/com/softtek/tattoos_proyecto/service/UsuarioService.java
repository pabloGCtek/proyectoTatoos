package com.softtek.tattoos_proyecto.service;

import com.softtek.tattoos_proyecto.model.Usuario;
import com.softtek.tattoos_proyecto.repository.IGenericRepo;
import com.softtek.tattoos_proyecto.repository.IUsuarioRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UsuarioService extends CrudImpl<Usuario,Integer> implements IUsuarioService{
    @Autowired
    IUsuarioRepository ur;

    @Override
    protected IGenericRepo<Usuario, Integer> getRepo() {
        return ur;
    }

    @Override
    public Usuario iniciarSesion(String emailNombre, String clave) {
        return ur.findUsuarioByNombreAndContrasenaOrEmailAndContrasena(emailNombre,clave,emailNombre,clave);
    }
}
