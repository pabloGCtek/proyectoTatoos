package com.softtek.tattoos_proyecto.model;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import jakarta.persistence.*;
import lombok.*;

import java.util.Date;
import java.util.List;

@JsonIdentityInfo(
        generator = ObjectIdGenerators.PropertyGenerator.class,
        property = "idUsuario"
)
@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
@Table(name = "usuarios")
public class Usuario {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_usuario")
    private int idUsuario;
    private String nombre;
    private String email;
    private String contrasena;
    @Column(name = "fecha_nacimiento")
    private Date fechaNacimiento;

    @JsonIgnoreProperties(value = "usuarioCita", allowSetters = true)
    @OneToMany(mappedBy = "usuarioCita", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Cita> citasUsuario;
}
