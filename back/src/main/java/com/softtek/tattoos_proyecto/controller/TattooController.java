package com.softtek.tattoos_proyecto.controller;

import com.softtek.tattoos_proyecto.exceptions.ObjectNotFound;
import com.softtek.tattoos_proyecto.model.Tattoo;
import com.softtek.tattoos_proyecto.model.Usuario;
import com.softtek.tattoos_proyecto.service.ITattooService;
import org.apache.tomcat.util.http.fileupload.FileUtils;
import org.aspectj.util.FileUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.server.mvc.WebMvcLinkBuilder;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.io.File;
import java.io.IOException;
import java.net.URI;
import java.util.Base64;
import java.util.List;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.methodOn;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/tattoos")
public class TattooController {
    @Autowired
    ITattooService ts;

    @GetMapping
    public ResponseEntity<List<Tattoo>> listTattoos(){
        return new ResponseEntity<>(ts.listAll(), HttpStatus.OK);
    }

    @GetMapping("/{idTattoo}")
    public EntityModel<Tattoo> findTattoo(@PathVariable int idTattoo){
        Tattoo t = ts.findObject(idTattoo);
        WebMvcLinkBuilder link = linkTo(methodOn(this.getClass()).findTattoo(idTattoo));
        return EntityModel.of(t).add(link.withRel("tatt-link"));
    }
    @PostMapping
    public ResponseEntity<Void> insertTattoo(@RequestBody Tattoo t){
        Tattoo tatt = ts.insertObject(t);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
                .path("/{idTattoo}")
                .buildAndExpand(tatt.getIdTattoo())
                .toUri();
        return ResponseEntity.created(uri).build();
    }
    @GetMapping("filtroNombre/{nombreTattoo}")
    public EntityModel<Tattoo> findTattooNombre(@PathVariable String nombreTattoo){
        Tattoo t = ts.findTattooName(nombreTattoo);
        WebMvcLinkBuilder link = linkTo(methodOn(this.getClass()).findTattooNombre(nombreTattoo));
        return EntityModel.of(t).add(link.withRel("tatt-link"));
    }
}
