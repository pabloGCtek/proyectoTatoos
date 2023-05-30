package com.softtek.tattoos_proyecto.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import java.time.LocalDateTime;

@ControllerAdvice
@RestController
public class ExceptionInterceptor extends ResponseEntityExceptionHandler {
    @ExceptionHandler(Exception.class)
    public ResponseEntity<ErrorResponse> genericException(
            Exception ex,
            WebRequest webRequest
    ){
        ErrorResponse errorResponse = new ErrorResponse(LocalDateTime.now(),
                ex.getMessage(),
                webRequest.getDescription(false));
        return new ResponseEntity<>(errorResponse, HttpStatus.NOT_ACCEPTABLE);
    }

    @ExceptionHandler(ObjectNotFound.class)
    public ResponseEntity<ErrorResponse> notFoundEx(
            Exception ex,
            WebRequest webRequest
    ){
        ErrorResponse errorResponse = new ErrorResponse(LocalDateTime.now(),
                ex.getMessage(),
                webRequest.getDescription(false));
        return new ResponseEntity<>(errorResponse,HttpStatus.NOT_FOUND);
    }
}
