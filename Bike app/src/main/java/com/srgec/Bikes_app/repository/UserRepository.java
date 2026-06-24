package com.srgec.Bikes_app.repository;




import org.springframework.data.jpa.repository.JpaRepository;
import com.srgec.Bikes_app.model.User;

public interface UserRepository extends JpaRepository<User, Long> {
}