package com.example.demo.service;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import com.example.demo.dto.RentalRequest;
import com.example.demo.entity.Address;
import com.example.demo.entity.Pricing;
import com.example.demo.entity.PropertyType;
import com.example.demo.entity.Rental;
import com.example.demo.entity.RentalImage;
import com.example.demo.repository.RentalRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class RentalService {

    private final RentalRepository rentalRepository;

    @Value("${upload.dir:uploads/rentals}")
    private String uploadDir;

    @Transactional
    public Rental createRental(RentalRequest rentalRequest, MultipartFile image) {

       
        Rental rental = new Rental();
        rental.setTitle(rentalRequest.getTitle());
        rental.setDescription(rentalRequest.getDescription());
        rental.setPropertyType(PropertyType.valueOf(rentalRequest.getPropertyType().toUpperCase()));

        
        Address address = new Address();
        address.setCountry(rentalRequest.getCountry());
        address.setState(rentalRequest.getRegion()); 
        rental.setAddress(address);

       
        Pricing pricing = new Pricing();
        pricing.setBasePricePerNight(rentalRequest.getPrice());
        rental.setPricing(pricing);

     
        if (image != null && !image.isEmpty()) {
            try {
                Path uploadPath = Paths.get(uploadDir);
                if (!Files.exists(uploadPath)) {
                    Files.createDirectories(uploadPath);
                }

                String uniqueFileName = UUID.randomUUID() + "_" + image.getOriginalFilename();
                Path filePath = uploadPath.resolve(uniqueFileName);
                Files.copy(image.getInputStream(), filePath);

                RentalImage rentalImage = new RentalImage();
                rentalImage.setImageUrl("/uploads/rentals/" + uniqueFileName);
                rentalImage.setRental(rental);
                rental.getImages().add(rentalImage);

            } catch (IOException e) {
                throw new RuntimeException("Failed to save image file", e);
            }
        }

        
        return rentalRepository.save(rental);
    }
}