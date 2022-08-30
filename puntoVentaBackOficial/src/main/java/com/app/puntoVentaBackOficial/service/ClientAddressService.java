package com.app.puntoVentaBackOficial.service;

import com.app.puntoVentaBackOficial.dto.ClientAddressDto;
import com.app.puntoVentaBackOficial.entity.ClientAddress;

public interface ClientAddressService {

    public ClientAddressDto newAddressClient(Long clientId, ClientAddressDto clientAddressDto);

}
