package com.softtek.tattoos_proyecto.repository;

import com.softtek.tattoos_proyecto.model.Tattoo;
import org.springframework.data.jpa.repository.Query;


public interface ITattooRepository extends IGenericRepo<Tattoo, Integer> {
    Tattoo findTattooByNombre(String nombre);

    @Query(value = "FROM Tattoo t ORDER BY t.idTattoo DESC LIMIT 1")
    Tattoo findLastTattoo();
}
