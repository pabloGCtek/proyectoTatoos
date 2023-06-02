package com.softtek.tattoos_proyecto.service;

import com.softtek.tattoos_proyecto.model.Usuario;
import com.softtek.tattoos_proyecto.repository.ICrud;

public interface IUsuarioService extends ICrud<Usuario,Integer> {
    Usuario iniciarSesion(String emailNombre,String clave);
}
