package com.softtek.tattoos_proyecto.service;

import com.softtek.tattoos_proyecto.model.Tattoo;
import com.softtek.tattoos_proyecto.repository.IGenericRepo;
import com.softtek.tattoos_proyecto.repository.ITattooRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TattooService extends CrudImpl<Tattoo,Integer> implements ITattooService{
    @Autowired
    ITattooRepository tr;

    @Override
    protected IGenericRepo<Tattoo, Integer> getRepo() {
        return tr;
    }

    @Override
    public Tattoo findTattooName(String nombre) {
        return tr.findTattooByNombre(nombre);
    }

    @Override
    public Tattoo findLastTattoo() {
        return tr.findLastTattoo();
    }
}
