package com.softtek.tattoos_proyecto.repository;

import com.softtek.tattoos_proyecto.model.Cita;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ICitaRepository extends JpaRepository<Cita, Integer> {
    Cita findCitaByIdCita(int idCita);
}
