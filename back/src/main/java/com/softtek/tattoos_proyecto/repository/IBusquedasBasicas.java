package com.softtek.tattoos_proyecto.repository;

import java.util.List;

public interface IBusquedasBasicas<T,ID>{
    List<T> listAll();
    T findObject(int id);
}
