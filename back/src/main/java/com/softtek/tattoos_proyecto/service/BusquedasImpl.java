package com.softtek.tattoos_proyecto.service;

import com.softtek.tattoos_proyecto.repository.IGenericRepo;

import java.util.List;

public abstract class BusquedasImpl<T,ID> {
    protected abstract IGenericRepo<T,ID> getRepo();

    public List<T> listAll(){
        return getRepo().findAll();
    }

    public T findObject(int id){
        return getRepo().getReferenceById(id);
    }
}
