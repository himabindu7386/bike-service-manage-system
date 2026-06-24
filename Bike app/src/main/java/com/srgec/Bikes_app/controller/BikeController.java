package com.srgec.Bikes_app.controller;



import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.srgec.Bikes_app.model.Bike;
import com.srgec.Bikes_app.service.BikeManagerService;

@RestController
@RequestMapping("/bikes")
@CrossOrigin(origins = "http://localhost:5173")
public class BikeController {

    @Autowired
    private BikeManagerService service;

    @PostMapping
    public Bike addBike(@RequestBody Bike bike) {
        return service.addBike(bike);
    }

    @GetMapping
    public List<Bike> getAllBikes() {
        return service.getAllBikes();
    }

    @GetMapping("/{id}")
    public Bike getBike(@PathVariable Long id) {
        return service.getBike(id);
    }

    @DeleteMapping("/{id}")
    public void deleteBike(@PathVariable Long id) {
        service.deleteBike(id);
    }
}