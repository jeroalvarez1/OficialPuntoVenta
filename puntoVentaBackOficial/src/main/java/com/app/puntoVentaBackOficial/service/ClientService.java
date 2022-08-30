package com.app.puntoVentaBackOficial.service;

import com.app.puntoVentaBackOficial.dto.ClientDto;

import java.util.List;

public interface ClientService {

    public ClientDto newClient(ClientDto clientDto);

    public List<ClientDto> getAllClients();

    public ClientDto getByIdClient(Long id);

    public ClientDto updateClient(ClientDto clientDto, Long id);

    public void deleteClient(Long id);
}
