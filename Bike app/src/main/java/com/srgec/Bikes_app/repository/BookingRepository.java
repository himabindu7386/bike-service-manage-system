package com.srgec.Bikes_app.repository;



import org.springframework.data.jpa.repository.JpaRepository;
import com.srgec.Bikes_app.model.Booking;

public interface BookingRepository extends JpaRepository<Booking, Long> {
}
