package com.example.demo.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.demo.dto.LoginRequest;
import com.example.demo.dto.RegistrationRequest;
import com.example.demo.entity.User;
import com.example.demo.repository.UserRepository;

@Service
public class AuthService {

    private static final Logger logger = LoggerFactory.getLogger(AuthService.class);

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public AuthService(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    /**
     * Authenticate user based on username and password.
     * Logs all outcomes and handles exceptions gracefully.
     */
    public boolean authenticate(LoginRequest loginRequest) {
        String username = loginRequest.getUsername();

        try {
            return userRepository.findByUsername(username)
                    .map(user -> {
                        boolean matches = passwordEncoder.matches(loginRequest.getPassword(), user.getPassword());
                        if (matches) {
                            logger.info("Login successful for user: {}", username);
                        } else {
                            logger.warn("Login failed for user: {} (invalid password)", username);
                        }
                        return matches;
                    })
                    .orElseGet(() -> {
                        logger.warn("Login failed: username '{}' not found", username);
                        return false;
                    });
        } catch (Exception e) {
            logger.error("Error during authentication for user '{}': {}", username, e.getMessage());
            throw e; // Let GlobalExceptionHandler handle it
        }
    }

    /**
     * Register a new user if the username does not already exist.
     * Logs results and propagates exceptions.
     */
    public boolean register(RegistrationRequest registrationRequest) {
        String username = registrationRequest.getUsername();

        if (userRepository.findByUsername(username).isPresent()) {
            logger.warn("⚠️ Registration failed: username '{}' already exists", username);
            return false;
        }

        try {
            User newUser = new User();
            newUser.setUsername(username);
            newUser.setPassword(passwordEncoder.encode(registrationRequest.getPassword()));
            userRepository.save(newUser);

            logger.info("Registration successful for user: {}", username);
            return true;
        } catch (Exception e) {
            logger.error("Error during registration for user '{}': {}", username, e.getMessage());
            throw e; // Let GlobalExceptionHandler handle it
        }
    }
}
