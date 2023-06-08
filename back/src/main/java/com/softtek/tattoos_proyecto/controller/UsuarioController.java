package com.softtek.tattoos_proyecto.controller;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.methodOn;
import com.softtek.tattoos_proyecto.model.Usuario;
import com.softtek.tattoos_proyecto.service.IUsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.server.mvc.WebMvcLinkBuilder;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/usuarios")
public class UsuarioController {
    @Autowired
    IUsuarioService us;

    @PostMapping
    public ResponseEntity<Void> insertUsuario(@RequestBody Usuario u){
        System.out.println("AAAAAA");
        Usuario usu = us.insertObject(u);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
                .path("/{emailNombre}/{clave}")
                .buildAndExpand(usu.getEmail(), usu.getContrasena())
                .toUri();
        return ResponseEntity.created(uri).build();
    }

    @PutMapping
    public ResponseEntity<Void> updateUsuario(@RequestBody Usuario u){
        Usuario usu = us.updateObject(u,u.getIdUsuario());
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
                .path("/{emailNombre}/{clave}")
                .buildAndExpand(usu.getEmail(), usu.getContrasena())
                .toUri();
        return ResponseEntity.created(uri).build();
    }

    @GetMapping("/{emailNombre}/{clave}")
    public EntityModel<Usuario> iniSesion(@PathVariable String emailNombre, @PathVariable String clave){
        Usuario u = us.iniciarSesion(emailNombre,clave);
        WebMvcLinkBuilder link = linkTo(methodOn(this.getClass()).iniSesion(emailNombre,clave));
        return EntityModel.of(u).add(link.withRel("us-link"));
    }
}
