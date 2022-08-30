package com.app.puntoVentaBackOficial.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ClientAddressDto {

    private Long id;
    private String fullAddress;

    public ClientAddressDto() {
        super();
    }
}
