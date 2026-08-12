package com.cartpulse.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "products")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Product {

    @Id
    private Long id;

    private String name;

    private String category;

    private Double price;

    private Double oldPrice;

    private String discount;

    private Double rating;

    @Column(length = 1000)
    private String image;
}