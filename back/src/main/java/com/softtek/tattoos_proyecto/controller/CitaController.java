package com.softtek.tattoos_proyecto.controller;

import com.softtek.tattoos_proyecto.model.Cita;
import com.softtek.tattoos_proyecto.service.ICitaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.server.mvc.WebMvcLinkBuilder;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.methodOn;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/citas")
public class CitaController {
    @Autowired
    private ICitaService cs;

    @GetMapping
    public ResponseEntity<List<Cita>> listCitas(){
        return new ResponseEntity<>(cs.listAll(), HttpStatus.OK);
    }

    @GetMapping("/{idCita}")
    public EntityModel<Cita> findCita(@PathVariable int idCita){
        Cita c = cs.findObject(idCita);
        WebMvcLinkBuilder link = linkTo(methodOn(this.getClass()).findCita(idCita));
        return EntityModel.of(c).add(link.withRel("cita-link"));
    }

    @PostMapping
    public ResponseEntity<Void> insertCita(@RequestBody Cita cita){
        Cita c = cs.insertObject(cita);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
                .path("/{idCita}")
                .buildAndExpand(c.getIdCita())
                .toUri();
        return ResponseEntity.created(uri).build();
    }

    @DeleteMapping
    public ResponseEntity<Void> deleteCita(@RequestBody Cita cita){
        Cita c = cs.deleteObject(cita, cita.getIdCita());
        return ResponseEntity.noContent().build();
    }
}
