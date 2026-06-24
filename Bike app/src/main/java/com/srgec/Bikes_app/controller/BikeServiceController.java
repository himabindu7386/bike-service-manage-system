package com.srgec.Bikes_app.controller;



import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.srgec.Bikes_app.model.BikeService;
import com.srgec.Bikes_app.service.BikeServiceManager;

@RestController
@RequestMapping("/services")
@CrossOrigin("*")
public class BikeServiceController {

    @Autowired
    private BikeServiceManager service;

    @PostMapping
    public BikeService addService(@RequestBody BikeService bikeService) {
        return service.addService(bikeService);
    }

    @GetMapping
    public List<BikeService> getAllServices() {
        return service.getAllServices();
    }

    @DeleteMapping("/{id}")
    public void deleteService(@PathVariable Long id) {
        service.deleteService(id);
    }
}