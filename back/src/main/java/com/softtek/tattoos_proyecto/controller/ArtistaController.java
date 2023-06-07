package com.softtek.tattoos_proyecto.controller;

import com.softtek.tattoos_proyecto.exceptions.ObjectNotFound;
import com.softtek.tattoos_proyecto.model.Artista;
import com.softtek.tattoos_proyecto.model.Tattoo;
import com.softtek.tattoos_proyecto.service.IArtistaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.server.mvc.WebMvcLinkBuilder;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.methodOn;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/artistas")
public class ArtistaController {
    @Autowired
    IArtistaService as;

    @GetMapping
    public ResponseEntity<List<Artista>> listArtista(){
        return new ResponseEntity<>(as.listAll(), HttpStatus.OK);
    }

    @GetMapping("/{idArtista}")
    public EntityModel<Artista> findArtista(@PathVariable int idArtista){
        Artista a = as.findObject(idArtista);
        WebMvcLinkBuilder link = linkTo(methodOn(this.getClass()).findArtista(idArtista));
        return EntityModel.of(a).add(link.withRel("ar-link"));
    }
}
