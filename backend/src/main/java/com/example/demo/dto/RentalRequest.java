package com.example.demo.dto;

import java.math.BigDecimal;
import java.util.List;

import com.example.demo.entity.PropertyType;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class RentalRequest {
    private String title;
    private String description;
    private PropertyType propertyType;

    private Integer numberOfGuests;
    private Integer numberOfBedrooms;
    private Integer numberOfBeds;
    private Integer numberOfBathrooms;

    private String country;
    private String region;

    private BigDecimal basePricePerNight;

    private List<String> amenities;
    private List<String> imageUrls; // paths/URLs of uploaded images
}
