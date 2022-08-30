package com.app.puntoVentaBackOficial.repository;

import com.app.puntoVentaBackOficial.entity.Client;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ClientRepository extends JpaRepository<Client, Long> {

}
