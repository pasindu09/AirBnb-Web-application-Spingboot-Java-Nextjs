package com.example.demo.entity;

import jakarta.persistence.Embeddable;

@Embeddable
public class Address {
    private String streetAddress;
    private String city;
    private String stateProvince;
    private String postalCode;
    private String country;

    // Getters and Setters
}