package com.softtek.tattoos_proyecto.service;

import com.softtek.tattoos_proyecto.exceptions.ObjectNotFound;
import com.softtek.tattoos_proyecto.repository.IGenericRepo;

import java.util.List;
import java.util.Optional;

public abstract class CrudImpl<T,ID> {
    protected abstract IGenericRepo<T,ID> getRepo();

    public List<T> listAll(){
        return getRepo().findAll();
    }

    public T findObject(ID id){
        return getRepo().findById(id).orElseThrow(()->new ObjectNotFound("No encontrado"));
    }

    public T insertObject(T object){
        getRepo().save(object);
        return object;
    }

    public T updateObject(T object, ID id){
        T obEdit = getRepo().findById(id).orElseThrow(()->new ObjectNotFound("No encontrado"));
        getRepo().save(object);
        return object;
    }
}
