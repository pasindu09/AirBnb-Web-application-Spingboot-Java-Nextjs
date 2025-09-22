package com.example.demo.entity;

import java.math.BigDecimal;

import jakarta.persistence.Embeddable;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Embeddable
@Getter @Setter @NoArgsConstructor
public class Pricing {

    private BigDecimal basePricePerNight;
    private BigDecimal cleaningFee;
    private BigDecimal serviceFee;
    private BigDecimal weeklyDiscount;
    private BigDecimal monthlyDiscount;
}
