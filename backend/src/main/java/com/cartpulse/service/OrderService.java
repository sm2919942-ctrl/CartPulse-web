package com.cartpulse.service;

import com.cartpulse.dto.CreateOrderRequest;
import com.cartpulse.dto.OrderProductRequest;
import com.cartpulse.entity.Order;
import com.cartpulse.entity.OrderItem;
import com.cartpulse.repository.OrderRepository;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderService {

    private final OrderRepository orderRepository;

    public OrderService(
            OrderRepository orderRepository
    ) {
        this.orderRepository =
                orderRepository;
    }

    public Order createOrder(
            CreateOrderRequest request
    ) {

        Order order = new Order();

        order.setOrderNumber(
                "CP" + System.currentTimeMillis()
        );

        order.setUserEmail(
                request.getUserEmail()
        );

        order.setTotalAmount(
                request.getTotalAmount()
        );

        order.setPaymentMethod(
                request.getPaymentMethod()
        );

        order.setStatus("Placed");

        order.setCustomerName(
                request.getCustomerName()
        );

        order.setMobile(
                request.getMobile()
        );

        order.setAddress(
                request.getAddress()
        );

        order.setCity(
                request.getCity()
        );

        order.setState(
                request.getState()
        );

        order.setPincode(
                request.getPincode()
        );

        if (request.getItems() != null) {

            for (
                    OrderProductRequest itemRequest
                    : request.getItems()
            ) {

                OrderItem item =
                        new OrderItem();

                item.setProductId(
                        itemRequest.getProductId()
                );

                item.setProductName(
                        itemRequest.getProductName()
                );

                item.setPrice(
                        itemRequest.getPrice()
                );

                item.setQuantity(
                        itemRequest.getQuantity()
                );

                item.setImage(
                        itemRequest.getImage()
                );

                item.setOrder(order);

                order
                        .getItems()
                        .add(item);
            }
        }

        return orderRepository.save(order);
    }

    public List<Order> getUserOrders(
            String email
    ) {

        return orderRepository
                .findByUserEmailOrderByCreatedAtDesc(
                        email
                );
    }
}
