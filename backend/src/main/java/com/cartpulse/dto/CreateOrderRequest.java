package com.cartpulse.dto;

import lombok.Data;

import java.util.List;

@Data
public class CreateOrderRequest {

    private String userEmail;

    private Double totalAmount;

    private String paymentMethod;

    private String customerName;

    private String mobile;

    private String address;

    private String city;

    private String state;

    private String pincode;

    private List<OrderProductRequest> items;
}