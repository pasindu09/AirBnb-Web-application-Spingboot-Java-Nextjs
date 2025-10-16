package com.example.demo.dto;

import java.math.BigDecimal;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class RentalRequest {
    private String title;
    private String description;
    private String propertyType; 

    private String country;
    private String region;

    private BigDecimal price; 
}