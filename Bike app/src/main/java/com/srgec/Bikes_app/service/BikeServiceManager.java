package com.srgec.Bikes_app.service;



import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.srgec.Bikes_app.model.BikeService;
import com.srgec.Bikes_app.repository.BikeServiceRepository;

@Service
public class BikeServiceManager {

    @Autowired
    private BikeServiceRepository repository;

    public BikeService addService(BikeService service) {
        return repository.save(service);
    }

    public List<BikeService> getAllServices() {
        return repository.findAll();
    }

    public void deleteService(Long id) {
        repository.deleteById(id);
    }
}