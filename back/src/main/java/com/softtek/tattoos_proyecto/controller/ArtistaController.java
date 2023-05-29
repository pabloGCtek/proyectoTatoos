package com.softtek.tattoos_proyecto.controller;

import com.softtek.tattoos_proyecto.model.Artista;
import com.softtek.tattoos_proyecto.service.IArtistaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/artistas")
public class ArtistaController {
    @Autowired
    IArtistaService as;

    @GetMapping
    public ResponseEntity<List<Artista>> listArtista(){
        return new ResponseEntity<>(as.listArtista(), HttpStatus.OK);
    }
}
