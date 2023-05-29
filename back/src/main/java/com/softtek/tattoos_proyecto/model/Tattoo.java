package com.softtek.tattoos_proyecto.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "tattoos")
public class Tattoo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id_tattoo;
    private String nombre;
    private String descripcion;
    private String lugar;
    private String tamano;
    private String imagen;
    private boolean tattoo_propio;
    private double precio;
    private int id_artista;
}
