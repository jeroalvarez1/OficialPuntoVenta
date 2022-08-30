package com.app.puntoVentaBackOficial.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ClientDto {

    private Long id;
    private String firstname;
    private String lastname;
    private String bussines_name;
    private String dni;
    private String cuit;
    private String cuil;

    public ClientDto() {
        super();
    }
}
