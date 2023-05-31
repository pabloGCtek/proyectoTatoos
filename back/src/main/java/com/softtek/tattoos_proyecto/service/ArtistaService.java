package com.softtek.tattoos_proyecto.service;

import com.softtek.tattoos_proyecto.model.Artista;
import com.softtek.tattoos_proyecto.model.Tattoo;
import com.softtek.tattoos_proyecto.repository.IArtistaRepository;
import com.softtek.tattoos_proyecto.repository.IGenericRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ArtistaService extends BusquedasImpl<Artista,Integer> implements IArtistaService{
    @Autowired
    IArtistaRepository ar;

    @Override
    protected IGenericRepo<Artista, Integer> getRepo() {
        return ar;
    }
}
