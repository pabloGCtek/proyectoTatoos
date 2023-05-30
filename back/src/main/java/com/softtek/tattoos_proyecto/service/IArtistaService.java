package com.softtek.tattoos_proyecto.service;

import com.softtek.tattoos_proyecto.model.Artista;
import com.softtek.tattoos_proyecto.model.Tattoo;

import java.util.List;

public interface IArtistaService {
    List<Artista> listArtista();

    Artista findArtista(int idArtista);
}
