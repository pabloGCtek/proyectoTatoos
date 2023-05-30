package com.softtek.tattoos_proyecto.service;

import com.softtek.tattoos_proyecto.model.Cita;
import com.softtek.tattoos_proyecto.repository.ICitaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CitaService implements ICitaService{
    @Autowired
    ICitaRepository cr;

    @Override
    public List<Cita> listCita() {
        return cr.findAll();
    }

    @Override
    public Cita findCita(int idCita) {
        return cr.findCitaByIdCita(idCita);
    }

    @Override
    public Cita insertCita(Cita c) {
        cr.save(c);
        return c;
    }
}
