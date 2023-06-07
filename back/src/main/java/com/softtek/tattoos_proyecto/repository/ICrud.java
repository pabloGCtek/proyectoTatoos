package com.softtek.tattoos_proyecto.repository;

import java.util.List;

public interface ICrud<T,ID>{
    List<T> listAll();
    T findObject(ID id);
    T insertObject(T object);
    T updateObject(T object, ID id);
}
