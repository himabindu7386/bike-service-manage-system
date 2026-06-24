package com.srgec.Bikes_app.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import com.srgec.Bikes_app.model.BikeService;

public interface BikeServiceRepository extends JpaRepository<BikeService, Long> {
}