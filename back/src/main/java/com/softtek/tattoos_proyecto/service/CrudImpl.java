package com.softtek.tattoos_proyecto.service;

import com.softtek.tattoos_proyecto.exceptions.ObjectNotFound;
import com.softtek.tattoos_proyecto.repository.IGenericRepo;

import java.util.List;

public abstract class CrudImpl<T,ID> {
    protected abstract IGenericRepo<T,ID> getRepo();

    public List<T> listAll(){
        return getRepo().findAll();
    }

    public T findObject(ID id){
        return getRepo().findById(id).orElseThrow(()->new ObjectNotFound("No encontrado"));
    }

    public T insertObject(T object){
        return getRepo().save(object);
    }

    public T updateObject(T object, ID id){
        T obEdit = findObject(id);
        return getRepo().save(object);
    }

    public T deleteObject(T object, ID id){
        findObject(id);
        getRepo().delete(object);
        return object;
    }
}
