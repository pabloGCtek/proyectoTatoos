package com.softtek.tattoos_proyecto.repository;

import com.softtek.tattoos_proyecto.model.Artista;
import com.softtek.tattoos_proyecto.model.Tattoo;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface IArtistaRepository extends JpaRepository<Artista, Integer> {
    Artista findArtistaByIdArtista(int idArtista);
}