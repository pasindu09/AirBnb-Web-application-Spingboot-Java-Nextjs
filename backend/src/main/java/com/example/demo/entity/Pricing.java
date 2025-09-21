package com.example.demo.entity;
import java.math.BigDecimal;

import jakarta.persistence.Embeddable;


@Embeddable
public class Pricing {
    private BigDecimal basePricePerNight;
    private BigDecimal cleaningFee;
    private BigDecimal serviceFee;
    private BigDecimal weeklyDiscount; // e.g., 10% discount
    private BigDecimal monthlyDiscount; // e.g., 20% discount

    // Method to calculate total for a stay
    public BigDecimal calculateTotal(LocalDate checkIn, LocalDate checkOut) { ... }

    // Getters and Setters
}