package com.softtek.tattoos_proyecto.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
@Table(name = "citas")
public class Cita {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_cita")
    private int idCita;
    private Date fecha;
    private int turno;
    @JsonIgnoreProperties(value = "citasUsuario")
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "id_usuario")
    private Usuario usuarioCita;
    @JsonIgnoreProperties(value = "citasArtista")
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "id_artista")
    private Artista artistaCita;
    @JsonIgnoreProperties(value = "artistasTattoo")
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "id_tattoo")
    private Tattoo tattoo;
}
