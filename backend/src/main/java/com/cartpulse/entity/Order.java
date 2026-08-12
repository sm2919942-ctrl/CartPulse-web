package com.cartpulse.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "orders")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String orderNumber;

    private String userEmail;

    private Double totalAmount;

    private String paymentMethod;

    private String status;

    private String customerName;

    private String mobile;

    private String address;

    private String city;

    private String state;

    private String pincode;

    private LocalDateTime createdAt;

    @OneToMany(
            mappedBy = "order",
            cascade = CascadeType.ALL,
            orphanRemoval = true
    )
    private List<OrderItem> items =
            new ArrayList<>();

    @PrePersist
    public void prePersist() {

        createdAt =
                LocalDateTime.now();

        if (status == null) {
            status = "Placed";
        }
    }
}
