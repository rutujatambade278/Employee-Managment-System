package com.saadbaig.fullstackbackend.controller;


import com.saadbaig.fullstackbackend.repository.UserRepository;
import com.saadbaig.fullstackbackend.service.ServiceImage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import com.saadbaig.fullstackbackend.model.User;

import java.io.IOException;
import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class UserController {

    @Autowired
    private UserRepository userRepository;
    

    @Autowired
    private ServiceImage serviceImage;


    @PostMapping("/user")
    User newUser(@RequestBody User newUser) {
        return userRepository.save(newUser);
    }

    @GetMapping("/users")
    List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @GetMapping("/user/{id}")
    User getUserById(@PathVariable Long id) {
        return userRepository.findById(id)
                .orElseThrow(() -> new UserNotFoundException(id));
    }

    @PutMapping("/user/{id}")
    User updateUser(@RequestBody User newUser, @PathVariable Long id) {
        return userRepository.findById(id)
                .map(user -> {
                    user.setUsername(newUser.getUsername());
                    user.setName(newUser.getName());
                    user.setEmail(newUser.getEmail());
                    return userRepository.save(user);
                }).orElseThrow(() ->new UserNotFoundException(id));
    }

    @DeleteMapping("/user/{id}")
    String deleteUser(@PathVariable Long id) {
        if (!userRepository.existsById(id)) {
            throw new UserNotFoundException(id);
        }
        userRepository.deleteById(id);
        return "User with the id " + id + " has been successfully deleted.";
    }

    
    
    @PostMapping("/upload")
    public String uploadImage(@RequestParam("file") MultipartFile file) {
        if (file.isEmpty()) {
            return "Please select a file to upload";
        }

        try {
            byte[] imageBytes = file.getBytes();
            serviceImage.saveImage(imageBytes);
            return "Image uploaded successfully!";
        } catch (IOException e) {
            e.printStackTrace();
            return "Failed to upload image: " + e.getMessage();
        }
    }
    
    
    
    // Fetch employee ID by user id
    @GetMapping("/user/{id}/employeeId")
    String getEmployeeId(@PathVariable Long id) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new UserNotFoundException(id));
        return user.getEmployeeId();
    }
}
