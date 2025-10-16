package com.example.demo.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
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
    @Value("${frontend.url}")
    private String frontendUrl;
    private static final Logger logger = LoggerFactory.getLogger(AuthController.class);
    private final AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @GetMapping("/login")
    public String loginForm(Model model) {
        logger.info("Accessing login page");
        model.addAttribute("loginRequest", new LoginRequest());
        return "login"; 
    }

    @PostMapping("/login")
    public String loginSubmit(@ModelAttribute LoginRequest loginRequest, Model model) {
        if (authService.authenticate(loginRequest)) {
            logger.info("Accessed Home Page");
            model.addAttribute("message", "Login successful!");
            return "redirect:" + frontendUrl + "/";
        } else {
            model.addAttribute("error", "Invalid credentials");
            return "login";
        }
    }

    @GetMapping("/register")
    public String registerForm() {
        return "register"; 
    }

    @PostMapping("/register")
    public String registerSubmit(@ModelAttribute RegistrationRequest registrationRequest, Model model) {
        if (authService.register(registrationRequest)) {
            model.addAttribute("message", "Registration successful! You can now log in.");
            return "login"; 
        } else {
            model.addAttribute("error", "Registration failed. Username may already exist.");
            return "register"; 
        }
    }

}
