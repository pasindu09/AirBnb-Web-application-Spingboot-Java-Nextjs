package com.example.demo.service;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.demo.dto.RentalRequest;
import com.example.demo.entity.Address;
import com.example.demo.entity.Pricing;
import com.example.demo.entity.Rental;
import com.example.demo.entity.RentalImage;
import com.example.demo.repository.RentalRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class RentalService {

    private final RentalRepository rentalRepository;

    @Transactional
    public Rental createRental(RentalRequest request) {
        Rental rental = new Rental();
        rental.setTitle(request.getTitle());
        rental.setDescription(request.getDescription());
        rental.setPropertyType(request.getPropertyType());
        rental.setNumberOfGuests(request.getNumberOfGuests());
        rental.setNumberOfBedrooms(request.getNumberOfBedrooms());
        rental.setNumberOfBeds(request.getNumberOfBeds());
        rental.setNumberOfBathrooms(request.getNumberOfBathrooms());

        // Address
        Address address = new Address();
        address.setCountry(request.getCountry());
        address.setState(request.getRegion()); // storing region as state for now
        rental.setAddress(address);

        // Pricing
        Pricing pricing = new Pricing();
        pricing.setBasePricePerNight(request.getBasePricePerNight());
        rental.setPricing(pricing);

        // Amenities
        if (request.getAmenities() != null) {
            rental.getAmenities().addAll(request.getAmenities());
        }

        // Images
        if (request.getImageUrls() != null) {
            for (String url : request.getImageUrls()) {
                RentalImage img = new RentalImage();
                img.setImageUrl(url);
                img.setRental(rental);
                rental.getImages().add(img);
            }
        }

        return rentalRepository.save(rental);
    }
}
