package com.softtek.tattoos_proyecto.service;

import com.softtek.tattoos_proyecto.model.Cita;

import java.util.List;

public interface ICitaService {
    List<Cita> listCita();

    Cita findCita(int idCita);
    Cita insertCita(Cita c);
}
