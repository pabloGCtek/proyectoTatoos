package com.softtek.tattoos_proyecto.service;

import com.softtek.tattoos_proyecto.model.Cita;
import com.softtek.tattoos_proyecto.repository.IBusquedasBasicas;

public interface ICitaService extends IBusquedasBasicas<Cita,Integer> {
    Cita insertCita(Cita c);
}
