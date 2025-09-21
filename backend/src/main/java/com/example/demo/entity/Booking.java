package com.example.demo.entity;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

   
@Entity
@Getter @Setter @NoArgsConstructor @AllArgsConstructor
@Table(name = "rentals")
public class Booking {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true, nullable = false)
    private String Name;

    @Column(nullable = false)
    private String price; // Hashed (BCrypt)

    @Column(nullable = false)
    private String description; // Hashed (BCrypt)

}


@Entity
@Table(name = "bookings")
public class Booking {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "guest_id", nullable = false)
    private User guest;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "rental_id", nullable = false)
    private Rental rental;

    @Column(nullable = false)
    private LocalDate checkInDate;

    @Column(nullable = false)
    private LocalDate checkOutDate;

    private Integer numberOfGuests;

    @Enumerated(EnumType.STRING)
    private BookingStatus status; // e.g., PENDING, CONFIRMED, CANCELLED, COMPLETED

    @Embedded
    private PaymentDetail paymentDetail; // Total price, currency, transaction ID, status

    private LocalDateTime bookedAt;

    // Constructors, Getters, Setters, etc.
}