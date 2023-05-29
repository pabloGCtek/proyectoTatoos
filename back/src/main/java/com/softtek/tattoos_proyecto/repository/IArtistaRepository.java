package com.softtek.tattoos_proyecto.repository;

import com.softtek.tattoos_proyecto.model.Artista;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IArtistaRepository extends JpaRepository<Artista, Integer> {
}
