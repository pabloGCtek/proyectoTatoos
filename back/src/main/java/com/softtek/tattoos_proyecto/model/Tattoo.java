package com.softtek.tattoos_proyecto.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import net.minidev.json.annotate.JsonIgnore;

import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "tattoos")
public class Tattoo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_tattoo")
    private int idTattoo;
    private String nombre;
    private String descripcion;
    private String lugar;
    private String tamano;
    private String imagen;
    @Column(name = "tattoo_propio")
    private boolean tattooPropio;
    private double precio;

    @JsonIgnoreProperties(value = "tattoos", allowSetters = true)
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "id_artista")
    private Artista artista;

    @JsonIgnoreProperties(value = "tattoo", allowSetters = true)
    @OneToMany(mappedBy = "tattoo", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JsonIgnore
    private List<Cita> citasTattoo;
}
