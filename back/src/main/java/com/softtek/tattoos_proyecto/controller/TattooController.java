package com.softtek.tattoos_proyecto.controller;

import com.softtek.tattoos_proyecto.model.Tattoo;
import com.softtek.tattoos_proyecto.service.ITattooService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

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
}
