package com.softtek.tattoos_proyecto.service;

import com.softtek.tattoos_proyecto.model.Cita;
import com.softtek.tattoos_proyecto.repository.ICitaRepository;
import com.softtek.tattoos_proyecto.repository.IGenericRepo;
import jakarta.persistence.criteria.CriteriaBuilder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CitaService extends BusquedasImpl<Cita, Integer> implements ICitaService{
    @Autowired
    ICitaRepository cr;

    @Override
    protected IGenericRepo<Cita, Integer> getRepo() {
        return cr;
    }

    @Override
    public Cita insertCita(Cita c) {
        cr.save(c);
        return c;
    }
}
