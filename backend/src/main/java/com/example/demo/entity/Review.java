package com.example.demo.entity;

import java.time.LocalDateTime;

import jakarta.persistence.Entity;
import jakarta.persistence.Enumerated;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

public class Review {
//     @Entity
// @Table(name = "reviews")
// public class Review {
//     @Id
//     @GeneratedValue(strategy = GenerationType.IDENTITY)
//     private Long id;

//     @ManyToOne(fetch = FetchType.LAZY)
//     @JoinColumn(name = "user_id", nullable = false)
//     private User user; // The author of the review

//     @ManyToOne(fetch = FetchType.LAZY)
//     @JoinColumn(name = "rental_id", nullable = false)
//     private Rental rental;

//     @ManyToOne(fetch = FetchType.LAZY)
//     @JoinColumn(name = "booking_id", nullable = false)
//     private Booking booking; // Ensures a review is tied to a completed stay

//     private Integer rating; // e.g., 1 to 5
//     private String comment;

//     @Enumerated(EnumType.STRING)
//     private ReviewType type; // e.g., GUEST_REVIEW, HOST_REVIEW

//     private LocalDateTime createdAt;

//     // Constructors, Getters, Setters, etc.
// }
}
