package com.srgec.Bikes_app.repository;



import org.springframework.data.jpa.repository.JpaRepository;
import com.srgec.Bikes_app.model.Bike;

public interface BikeRepository extends JpaRepository<Bike, Long> {
}
