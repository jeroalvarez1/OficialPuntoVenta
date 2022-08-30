package com.app.puntoVentaBackOficial.service;

import com.app.puntoVentaBackOficial.dto.ClientDto;
import com.app.puntoVentaBackOficial.eception.ResourceNoteFoundException;
import com.app.puntoVentaBackOficial.entity.Client;
import com.app.puntoVentaBackOficial.repository.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ClientServiceImpl implements ClientService {
    //DTO = JSON
    //List = JSON
    @Autowired
    private ClientRepository clientRepository;

    @Override
    public ClientDto newClient(ClientDto clientDto) {

        //Lo guardo en la base de datos
        Client client = mapEntity(clientDto);
        Client newClient = clientRepository.save(client);

        //Envio una respuesta
        ClientDto clientResponse = mapDto(newClient);

        return clientResponse;
    }

    @Override
    public List<ClientDto> getAllClients() {
        List<Client> clients = clientRepository.findAll();
        return clients.stream().map(client -> mapDto(client)).collect(Collectors.toList());

    }

    @Override
    public ClientDto getByIdClient(Long id) {
        Client client = serachClientId(id);
        return mapDto(client);
    }

    @Override
    public ClientDto updateClient(ClientDto clientDto, Long id) {
        Client client = serachClientId(id);
        client.setFirstname(clientDto.getFirstname());
        client.setLastname(clientDto.getLastname());
        client.setBussines_name(clientDto.getBussines_name());
        client.setDni(clientDto.getDni());
        client.setCuit(clientDto.getCuit());
        client.setCuil(clientDto.getCuil());

        Client clientUpdated = clientRepository.save(client);
        return mapDto(clientUpdated);
    }

    @Override
    public void deleteClient(Long id) {
        clientRepository.delete(serachClientId(id));
    }

    //convierte entidad a DTO
    private ClientDto mapDto(Client client) {

        ClientDto clientDto = new ClientDto();

        clientDto.setId(client.getId());
        clientDto.setFirstname(client.getFirstname());
        clientDto.setLastname(client.getLastname());
        clientDto.setBussines_name(client.getBussines_name());
        clientDto.setDni(client.getDni());
        clientDto.setCuit(client.getCuit());
        clientDto.setCuil(client.getCuil());

        return clientDto;
    }

    //convierte de DTO a entidad
    private Client mapEntity(ClientDto clientDto) {

        Client client = new Client();

        client.setFirstname(clientDto.getFirstname());
        client.setLastname(clientDto.getLastname());
        client.setBussines_name(clientDto.getBussines_name());
        client.setDni(clientDto.getDni());
        client.setCuit(clientDto.getCuit());
        client.setCuil(clientDto.getCuil());

        return client;
    }

    private Client serachClientId(Long id){
        Client client = clientRepository
                .findById(id).orElseThrow(() -> new ResourceNoteFoundException("Client", "id", id));
        return client;
    }

}
