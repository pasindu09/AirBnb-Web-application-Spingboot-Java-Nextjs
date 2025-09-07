package com.example.demo.dto;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class RegistrationRequest {
    private String username;
    private String password;
    // You could add other fields like email, full name, etc.
}