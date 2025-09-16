package com.example.demo.entity;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "rental_images")
public class RentalImage {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String imageUrl; // Path or URL to the image in storage (e.g., S3)

    private String caption;

    // @ManyToOne(fetch = FetchType.LAZY)
    // @JoinColumn(name = "rental_id", nullable = false)
    // private Rental rental;

    // Constructors, Getters, Setters, etc.
}