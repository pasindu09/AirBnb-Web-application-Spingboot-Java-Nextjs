package com.example.demo.dto;

import java.math.BigDecimal;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class RentalRequest {
    private String title;
    private String description;
    private String propertyType; // Keeping it as String for simple form data binding

    private String country;
    private String region;

    private BigDecimal price; // The frontend sends a string, which Spring will convert to BigDecimal
}