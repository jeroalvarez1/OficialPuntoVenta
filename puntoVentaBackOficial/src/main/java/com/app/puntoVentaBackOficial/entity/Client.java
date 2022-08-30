package com.app.puntoVentaBackOficial.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;


@Getter
@Setter
@Entity
@Table(name = "clients")
public class Client {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "firstname")
    private String firstname;

    @Column(name = "lastname")
    private String lastname;

    @Column(name = "bussines_name", unique = true)
    private String bussines_name;

    @Column(name = "dni", unique = true)
    private String dni;

    @Column(name = "cuit", unique = true)
    private String cuit;

    @Column(name = "cuil", unique = true)
    private String cuil;

    @OneToMany(mappedBy = "client",cascade = CascadeType.ALL,orphanRemoval = true)
    private Set<ClientAddress> address = new HashSet<>();

    public Client() {
        super();
    }

    public Client(Long id, String firstname, String lastname, String dni, String cuit, String cuil) {
        super();
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.dni = dni;
        this.cuit = cuit;
        this.cuil = cuil;
    }
}
