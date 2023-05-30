package com.softtek.tattoos_proyecto.controller;

import com.softtek.tattoos_proyecto.exceptions.ObjectNotFound;
import com.softtek.tattoos_proyecto.model.Tattoo;
import com.softtek.tattoos_proyecto.service.ITattooService;
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
@RequestMapping("/tattoos")
public class TattooController {
    @Autowired
    ITattooService ts;

    @GetMapping
    public ResponseEntity<List<Tattoo>> listTattoos(){
        return new ResponseEntity<>(ts.listTattoos(), HttpStatus.OK);
    }

    @GetMapping("/{idTattoo}")
    public EntityModel<Tattoo> findTattoo(@PathVariable int idTattoo){
        Tattoo t = ts.findTattoo(idTattoo);
        if(t == null) throw new ObjectNotFound("Tatuaje no encontrado");
        WebMvcLinkBuilder link = linkTo(methodOn(this.getClass()).findTattoo(idTattoo));
        return EntityModel.of(t).add(link.withRel("tatt-link"));
    }

}
