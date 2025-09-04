package com.example.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import com.example.demo.dto.LoginRequest;
import com.example.demo.service.AuthService;

@Controller
public class AuthController {

    private final AuthService authService;
    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @GetMapping("/login")
    public String loginForm() {
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
}
