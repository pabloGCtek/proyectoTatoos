package com.softtek.tattoos_proyecto.service;

import com.softtek.tattoos_proyecto.model.Tattoo;
import com.softtek.tattoos_proyecto.repository.ITattooRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TattooService implements ITattooService{
    @Autowired
    ITattooRepository tr;

    @Override
    public List<Tattoo> listTattoos() {
        return tr.findAll();
    }

    @Override
    public Tattoo findTattoo(int idTattoo) {
        return tr.findTattooByIdTattoo(idTattoo);
    }
}
