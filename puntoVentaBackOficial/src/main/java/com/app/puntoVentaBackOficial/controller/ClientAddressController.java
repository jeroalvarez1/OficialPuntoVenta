package com.app.puntoVentaBackOficial.controller;

import com.app.puntoVentaBackOficial.dto.ClientAddressDto;
import com.app.puntoVentaBackOficial.service.ClientAddressService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/")
public class ClientAddressController {

    @Autowired
    private ClientAddressService clientAddressService;

    @PostMapping("/clients/{clientId}/clientaddresses")
    public ResponseEntity<ClientAddressDto> saveClientAddress(@PathVariable(value = "clientId") long clientId,
                                                              @RequestBody ClientAddressDto clientAddressDto){
        return new ResponseEntity<>(clientAddressService.newAddressClient(clientId, clientAddressDto), HttpStatus.CREATED);
    }

}
