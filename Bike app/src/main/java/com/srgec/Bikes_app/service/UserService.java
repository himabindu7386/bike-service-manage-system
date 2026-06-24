package com.srgec.Bikes_app.service;



import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.srgec.Bikes_app.model.User;
import com.srgec.Bikes_app.repository.UserRepository;

@Service
public class UserService {

    @Autowired
    private UserRepository repository;

    public User registerUser(User user) {
        return repository.save(user);
    }

    public List<User> getAllUsers() {
        return repository.findAll();
    }

    public User getUserById(Long id) {
        return repository.findById(id).orElse(null);
    }
}