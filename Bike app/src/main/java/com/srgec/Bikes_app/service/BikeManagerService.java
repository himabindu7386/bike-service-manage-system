package com.srgec.Bikes_app.service;



import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.srgec.Bikes_app.model.Bike;
import com.srgec.Bikes_app.repository.BikeRepository;

@Service
public class BikeManagerService {

    @Autowired
    private BikeRepository repository;

    public Bike addBike(Bike bike) {
        return repository.save(bike);
    }

    public List<Bike> getAllBikes() {
        return repository.findAll();
    }

    public Bike getBike(Long id) {
        return repository.findById(id).orElse(null);
    }

    public void deleteBike(Long id) {
        repository.deleteById(id);
    }
}