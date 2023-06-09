package com.softtek.tattoos_proyecto.service;

import com.softtek.tattoos_proyecto.model.Tattoo;
import com.softtek.tattoos_proyecto.repository.ICrud;

public interface ITattooService extends ICrud<Tattoo, Integer> {
    Tattoo findTattooName(String nombre);
    Tattoo findLastTattoo();
}
