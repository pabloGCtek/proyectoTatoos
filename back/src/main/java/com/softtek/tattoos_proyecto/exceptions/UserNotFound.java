package com.softtek.tattoos_proyecto.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class UserNotFound extends RuntimeException{
    private static final long serialVersionUID = 1L;

    public UserNotFound(String mensaje) {
        super(mensaje);
    }
}
