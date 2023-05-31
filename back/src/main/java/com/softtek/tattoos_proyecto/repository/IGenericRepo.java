package com.softtek.tattoos_proyecto.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.NoRepositoryBean;

@NoRepositoryBean
public interface IGenericRepo<T,ID> extends JpaRepository<T,ID> {
    T getReferenceById(int id);
}
