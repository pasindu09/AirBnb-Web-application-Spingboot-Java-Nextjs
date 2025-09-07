package com.example.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import com.example.demo.dto.LoginRequest;
import com.example.demo.dto.RegistrationRequest;
import com.example.demo.service.AuthService;

@Controller
public class AuthController {

    private final AuthService authService;
    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @GetMapping("/login")
    public String loginForm() {
        System.out.println("hello");
        return "login"; // Returns login.html template
    }

    @PostMapping("/login")
    public String loginSubmit(@ModelAttribute LoginRequest loginRequest, Model model) {
        if (authService.authenticate(loginRequest)) {
            model.addAttribute("message", "Login successful!");
            return "home"; // Redirect to home.html
        } else {
            model.addAttribute("error", "Invalid credentials");
            return "login";
        }
    }


     @GetMapping("/register")
    public String registerForm() {
        return "register"; // Returns register.html template
    }

    @PostMapping("/register")
    public String registerSubmit(@ModelAttribute RegistrationRequest registrationRequest, Model model) {
        if (authService.register(registrationRequest)) {
            model.addAttribute("message", "Registration successful! You can now log in.");
            return "login"; // Redirect to the login page after successful registration
        } else {
            model.addAttribute("error", "Registration failed. Username may already exist.");
            return "register"; // Stay on the registration page with an error
        }
    }
    
}
