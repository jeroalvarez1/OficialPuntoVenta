package com.app.puntoVentaBackOficial.service;

import com.app.puntoVentaBackOficial.dto.ClientAddressDto;
import com.app.puntoVentaBackOficial.eception.ResourceNoteFoundException;
import com.app.puntoVentaBackOficial.entity.Client;
import com.app.puntoVentaBackOficial.entity.ClientAddress;
import com.app.puntoVentaBackOficial.repository.ClientAddressRepository;
import com.app.puntoVentaBackOficial.repository.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ClientAddressServiceImpl implements ClientAddressService {

    @Autowired
    private ClientAddressRepository clientAddressRepository;

    @Autowired
    private ClientRepository clientRepository;

    @Override
    public ClientAddressDto newAddressClient(Long clientId, ClientAddressDto clientAddressDto) {
        ClientAddress clientAddress = mapEntity(clientAddressDto);
        Client client = clientRepository
                .findById(clientId).orElseThrow(() -> new ResourceNoteFoundException("Client", "id", clientId));
        clientAddress.setClient(client);
        ClientAddress saveClientAddress = clientAddressRepository.save(clientAddress);
        return mapDto(saveClientAddress);
    }

    private ClientAddressDto mapDto(ClientAddress clientAddress){
        ClientAddressDto clientAddressDto = new ClientAddressDto();
        clientAddressDto.setId(clientAddress.getId());
        clientAddressDto.setFullAddress(clientAddress.getFullAddress());
        return  clientAddressDto;
    }

    private ClientAddress mapEntity(ClientAddressDto clientAddressDto){
        ClientAddress clientAddress = new ClientAddress();
        clientAddress.setId(clientAddressDto.getId());
        clientAddress.setFullAddress(clientAddressDto.getFullAddress());
        return clientAddress;
    }
}
