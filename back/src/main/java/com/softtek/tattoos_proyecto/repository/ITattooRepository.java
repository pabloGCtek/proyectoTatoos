package com.softtek.tattoos_proyecto.repository;

import com.softtek.tattoos_proyecto.model.Tattoo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ITattooRepository extends IGenericRepo<Tattoo, Integer> {
}
