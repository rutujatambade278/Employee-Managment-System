package com.saadbaig.fullstackbackend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.saadbaig.fullstackbackend.model.User;
import com.saadbaig.fullstackbackend.repository.UserRepository;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class ServiceImage {
   
	@Autowired
    private UserRepository userRepository;

    public void saveImage(byte[] imageBytes) {
        User user = new User();
        user.setImageBytes(imageBytes); // Assuming you have a setImageBytes method in your User class
        userRepository.save(user);
    }
}
