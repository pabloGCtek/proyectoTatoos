package com.softtek.tattoos_proyecto.service;

import com.softtek.tattoos_proyecto.model.Cita;
import com.softtek.tattoos_proyecto.model.Tattoo;
import com.softtek.tattoos_proyecto.repository.ICitaRepository;
import com.softtek.tattoos_proyecto.repository.IGenericRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CitaService extends CrudImpl<Cita, Integer> implements ICitaService{
    @Autowired
    ICitaRepository cr;

    @Override
    protected IGenericRepo<Cita, Integer> getRepo() {
        return cr;
    }

    @Override
    public Cita findLastCita() {
        return cr.findLastCita();
    }
}
