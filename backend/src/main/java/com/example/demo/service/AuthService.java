package com.example.demo.service;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.demo.dto.LoginRequest;
import com.example.demo.dto.RegistrationRequest;
import com.example.demo.entity.User;
import com.example.demo.repository.UserRepository;

@Service
public class AuthService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public AuthService(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public boolean authenticate(LoginRequest loginRequest) {
        return userRepository.findByUsername(loginRequest.getUsername())
                .map(user -> passwordEncoder.matches(loginRequest.getPassword(), user.getPassword()))
                .orElse(false);
    }

    public boolean register(RegistrationRequest registrationRequest) {
        // Check if the username already exists
        if (userRepository.findByUsername(registrationRequest.getUsername()).isPresent()) {
            return false; // Username already taken
        }

        // Create a new User entity
        User newUser = new User();
        newUser.setUsername(registrationRequest.getUsername());
        newUser.setPassword(passwordEncoder.encode(registrationRequest.getPassword())); // Hash the password

        // Save the new user to the database
        // userRepository.save(newUser);
        // return true;
    }

     public boolean Auth(RegistrationRequest registrationRequest) {
        // Check if the username already exists
        if (userRepository.findByUsername(registrationRequest.getUsername()).isPresent()) {
            return false; // Username already taken
        }

        // Create a new User entity
        User newUser = new User();
        newUser.setUsername(registrationRequest.getUsername());
        newUser.setPassword(passwordEncoder.encode(registrationRequest.getPassword())); // Hash the password

        // Save the new user to the database
        userRepository.save(newUser);
        return true;
    }

}
