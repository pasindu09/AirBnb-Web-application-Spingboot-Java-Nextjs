// package com.example.demo.entity;

// import java.util.ArrayList;
// import java.util.HashSet;
// import java.util.List;
// import java.util.Set;

// import jakarta.persistence.CascadeType;
// import jakarta.persistence.CollectionTable;
// import jakarta.persistence.Column;
// import jakarta.persistence.ElementCollection;
// import jakarta.persistence.Embedded;
// import jakarta.persistence.Entity;
// import jakarta.persistence.EnumType;
// import jakarta.persistence.Enumerated;
// import jakarta.persistence.FetchType;
// import jakarta.persistence.GeneratedValue;
// import jakarta.persistence.GenerationType;
// import jakarta.persistence.Id;
// import jakarta.persistence.JoinColumn;
// import jakarta.persistence.ManyToOne;
// import jakarta.persistence.OneToMany;
// import jakarta.persistence.OneToOne;
// import jakarta.persistence.Table;
// import lombok.AllArgsConstructor;
// import lombok.Getter;
// import lombok.NoArgsConstructor;
// import lombok.Setter;

// @Entity
// @Getter @Setter @NoArgsConstructor @AllArgsConstructor
// @Table(name = "rentals")
// public class Rental {
//    @Id
//     @GeneratedValue(strategy = GenerationType.IDENTITY)
//     private Long id;

//     @Column(nullable = false)
//     private String title;

//     @Column(length = 1000)
//     private String description;

//     @Enumerated(EnumType.STRING)
//     private PropertyType propertyType; // e.g., APARTMENT, HOUSE, CONDO, VILLA

//     private Integer numberOfGuests;
//     private Integer numberOfBedrooms;
//     private Integer numberOfBeds;
//     private Integer numberOfBathrooms;

//     @Embedded
//     private Address address; // Embedded value object (street, city, state, zipCode, country)

//     @ElementCollection
//     @CollectionTable(name = "rental_amenities", joinColumns = @JoinColumn(name = "rental_id"))
//     private Set<String> amenities = new HashSet<>(); // e.g., "WIFI", "POOL", "KITCHEN"

//     @OneToMany(mappedBy = "rental", cascade = CascadeType.ALL, orphanRemoval = true)
//     private List<RentalImage> images = new ArrayList<>();

//     @ManyToOne(fetch = FetchType.LAZY)
//     @JoinColumn(name = "host_id", nullable = false)
//     private User host;

//     @OneToMany(mappedBy = "rental", cascade = CascadeType.ALL)
//     private List<Booking> bookings = new ArrayList<>();

//     @OneToMany(mappedBy = "rental", cascade = CascadeType.ALL)
//     private List<Review> reviews = new ArrayList<>();

//     @OneToOne(mappedBy = "rental", cascade = CascadeType.ALL, orphanRemoval = true)
//     private Pricing pricing; // Embedded pricing details

// }

