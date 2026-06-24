package com.srgec.Bikes_app.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.srgec.Bikes_app.model.User;
import com.srgec.Bikes_app.service.UserService;

@RestController
@RequestMapping("/users")
@CrossOrigin("*")
public class UserController {

    @Autowired
    private UserService service;

    @PostMapping("/register")
    public User registerUser(@RequestBody User user) {
         user.setRole("CUSTOMER");
    user.setWalletBalance(0.0);

    return service.registerUser(user);
        
    }

    @GetMapping
    public List<User> getAllUsers() {
        return service.getAllUsers();
    }

    @GetMapping("/{id}")
    public User getUser(@PathVariable Long id) {
        return service.getUserById(id);
    }
    @PostMapping("/admin/register")
    public User registerAdmin(@RequestBody User user) {

    user.setRole("ADMIN");
    user.setWalletBalance(0.0);

    return service.registerUser(user);
}

}