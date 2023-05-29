package com.softtek.tattoos_proyecto.repository;

import com.softtek.tattoos_proyecto.model.Tattoo;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ITattooRepository extends JpaRepository<Tattoo, Integer> {
}
