package com.cartpulse.controller;

import com.cartpulse.dto.CreateOrderRequest;
import com.cartpulse.entity.Order;
import com.cartpulse.service.OrderService;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/orders")
@CrossOrigin(origins = "http://localhost:5173")
public class OrderController {

    private final OrderService orderService;

    public OrderController(
            OrderService orderService
    ) {
        this.orderService =
                orderService;
    }

    @PostMapping
    public ResponseEntity<Order> createOrder(
            @RequestBody
            CreateOrderRequest request
    ) {

        Order order =
                orderService
                        .createOrder(request);

        return ResponseEntity.ok(order);
    }

    @GetMapping("/user/{email}")
    public List<Order> getUserOrders(
            @PathVariable String email
    ) {

        return orderService
                .getUserOrders(email);
    }
}
