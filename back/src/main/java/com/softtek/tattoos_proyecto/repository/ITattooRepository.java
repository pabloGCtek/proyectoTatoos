package com.softtek.tattoos_proyecto.repository;

import com.softtek.tattoos_proyecto.model.Tattoo;

public interface ITattooRepository extends IGenericRepo<Tattoo, Integer> {
    Tattoo findTattooByNombre(String nombre);
}
