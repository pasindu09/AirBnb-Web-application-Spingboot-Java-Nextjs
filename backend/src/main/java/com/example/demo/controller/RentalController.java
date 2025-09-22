package com.example.demo.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.demo.dto.RentalRequest;
import com.example.demo.entity.Rental;
import com.example.demo.service.RentalService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/rentals")
@RequiredArgsConstructor
public class RentalController {

    private final RentalService rentalService;

    @PostMapping
    public ResponseEntity<Rental> createRental(@RequestBody RentalRequest request) {
        Rental savedRental = rentalService.createRental(request);
        return ResponseEntity.ok(savedRental);
    }
}
