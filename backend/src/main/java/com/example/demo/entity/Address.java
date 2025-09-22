package com.example.demo.entity;

import jakarta.persistence.Embeddable;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter @Embeddable
public class Address {
    private String streetAddress;
    private String city;
    private String state;
    private String postalCode;
    private String country;

    // Getters and Setters
}