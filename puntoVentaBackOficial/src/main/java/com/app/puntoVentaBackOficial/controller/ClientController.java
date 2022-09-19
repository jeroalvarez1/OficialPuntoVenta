package com.app.puntoVentaBackOficial.controller;

import com.app.puntoVentaBackOficial.dto.ClientDto;
import com.app.puntoVentaBackOficial.service.ClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/api/clients")
public class ClientController {

    @Autowired
    private ClientService clientService;

    @GetMapping
    public List<ClientDto> getAllClients() {
        return clientService.getAllClients();
    }

    @GetMapping("/{id}")
    public ResponseEntity<ClientDto> getById(@PathVariable(name = "id") Long id) {
        return ResponseEntity.ok(clientService.getByIdClient(id));
    }

    @PostMapping
    public ResponseEntity<ClientDto> createClient(@RequestBody ClientDto clientDto) {
        return new ResponseEntity<>(clientService.newClient(clientDto), HttpStatus.CREATED);
    }


    @PutMapping("/{id}")
    public ResponseEntity<ClientDto> updateUser(@RequestBody ClientDto clientDto, @PathVariable(name = "id") Long id) {
        ClientDto clientResponse = clientService.updateClient(clientDto, id);
        return new ResponseEntity<>(clientResponse, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteClient(@PathVariable(name = "id") Long id) {
        clientService.deleteClient(id);
        return new ResponseEntity<>("Cliente eliminada con exito", HttpStatus.OK);
    }
}
