package com.softtek.tattoos_proyecto.service;

import com.softtek.tattoos_proyecto.model.Artista;
import com.softtek.tattoos_proyecto.repository.IArtistaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ArtistaService implements IArtistaService{
    @Autowired
    IArtistaRepository ar;

    @Override
    public List<Artista> listArtista() {
        return ar.findAll();
    }
}
