package com.softtek.tattoos_proyecto.service;

import com.softtek.tattoos_proyecto.model.Usuario;

public interface IUsuarioService {
    Usuario insertUsuario(Usuario u);
    Usuario iniciarSesion(String emailNombre,String clave);
}
