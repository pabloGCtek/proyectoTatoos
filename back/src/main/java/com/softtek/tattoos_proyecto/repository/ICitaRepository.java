package com.softtek.tattoos_proyecto.repository;

import com.softtek.tattoos_proyecto.model.Cita;
import org.springframework.data.jpa.repository.Query;

public interface ICitaRepository extends IGenericRepo<Cita, Integer> {
    @Query(value = "FROM Cita c ORDER BY c.idCita DESC LIMIT 1")
    Cita findLastCita();
}