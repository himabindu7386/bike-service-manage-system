package com.srgec.Bikes_app.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.srgec.Bikes_app.model.Booking;
import com.srgec.Bikes_app.service.BookingService;

@RestController
@RequestMapping("/bookings")
@CrossOrigin("*")
public class BookingController {

    @Autowired
    private BookingService service;

    @PostMapping
    public Booking createBooking(@RequestBody Booking booking) {
        return service.createBooking(booking);
    }

    @GetMapping
    public List<Booking> getAllBookings() {
        return service.getAllBookings();
    }

    @PutMapping("/{id}/{status}")
    public Booking updateStatus(
            @PathVariable Long id,
            @PathVariable String status) {

        return service.updateStatus(id, status);
    }
    @PutMapping("/service/{id}/{serviceStatus}")
public Booking updateServiceStatus(
        @PathVariable Long id,
        @PathVariable String serviceStatus) {

    return service.updateServiceStatus(id, serviceStatus);
}
@PutMapping("/fee/{id}/{fee}")
public Booking updateServiceFee(
        @PathVariable Long id,
        @PathVariable Double fee) {

    return service.updateServiceFee(id, fee);
}

    @DeleteMapping("/{id}")
    public void deleteBooking(@PathVariable Long id) {
        service.deleteBooking(id);
    }
}