package com.example.demo.controller;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.demo.dto.RentalRequest;
import com.example.demo.entity.Rental;
import com.example.demo.service.RentalService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/rentals")
@RequiredArgsConstructor
public class RentalController {

    private final RentalService rentalService;

    @PostMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<Rental> createRental(
            @ModelAttribute RentalRequest rentalRequest,
            @RequestParam(value = "image", required = false) MultipartFile image
    ) {
        
        Rental savedRental = rentalService.createRental(rentalRequest, image);
        return ResponseEntity.ok(savedRental);
    }
}