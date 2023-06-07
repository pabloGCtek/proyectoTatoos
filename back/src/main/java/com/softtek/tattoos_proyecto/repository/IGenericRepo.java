package com.softtek.tattoos_proyecto.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.NoRepositoryBean;

import java.util.Optional;

@NoRepositoryBean
public interface IGenericRepo<T,ID> extends JpaRepository<T,ID> {
    //T getReferenceById(int id);
    @Override
    Optional<T> findById(ID id);
}
