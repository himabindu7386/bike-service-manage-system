package com.srgec.Bikes_app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.srgec.Bikes_app.model.Booking;
import com.srgec.Bikes_app.repository.BookingRepository;

@Service
public class BookingService {

    @Autowired
    private BookingRepository repository;

    public Booking createBooking(Booking booking) {

        booking.setBookingStatus("Pending");
        booking.setServiceStatus("Waiting");
        booking.setServiceFee(0.0);

        return repository.save(booking);
    }

    public List<Booking> getAllBookings() {
        return repository.findAll();
    }

    public Booking updateStatus(Long id, String status) {

        Booking booking = repository.findById(id).orElse(null);

        if (booking != null) {
            booking.setBookingStatus(status);
            return repository.save(booking);
        }

        return null;
    }
    public Booking updateServiceStatus(Long id, String serviceStatus) {

    Booking booking = repository.findById(id).orElse(null);

    if (booking != null) {

        booking.setServiceStatus(serviceStatus);

        return repository.save(booking);
    }

    return null;
}
public Booking updateServiceFee(Long id, Double fee) {

    Booking booking = repository.findById(id).orElse(null);

    if (booking != null) {

        booking.setServiceFee(fee);

        return repository.save(booking);
    }

    return null;
}
    public void deleteBooking(Long id) {
        repository.deleteById(id);
    }
}