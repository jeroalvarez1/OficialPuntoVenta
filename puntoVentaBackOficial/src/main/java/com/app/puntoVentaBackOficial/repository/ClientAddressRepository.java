package com.app.puntoVentaBackOficial.repository;

import com.app.puntoVentaBackOficial.entity.ClientAddress;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ClientAddressRepository extends JpaRepository<ClientAddress, Long> {

}
