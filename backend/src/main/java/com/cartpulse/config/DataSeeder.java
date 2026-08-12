package com.cartpulse.config;

import com.cartpulse.entity.Product;
import com.cartpulse.repository.ProductRepository;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Configuration
public class DataSeeder {

    @Bean
    CommandLineRunner loadProducts(
            ProductRepository repository
    ) {

        return args -> {

            if (repository.count() > 0) {
                return;
            }

            List<Product> products = List.of(

                    new Product(
                            1L,
                            "Premium Wireless Headphones",
                            "Electronics",
                            7999.0,
                            10999.0,
                            "27% OFF",
                            4.8,
                            "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500"
                    ),

                    new Product(
                            2L,
                            "Classic Luxury Watch",
                            "Fashion",
                            6499.0,
                            8999.0,
                            "28% OFF",
                            4.7,
                            "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=500"
                    ),

                    new Product(
                            3L,
                            "Premium Leather Backpack",
                            "Fashion",
                            3999.0,
                            5499.0,
                            "27% OFF",
                            4.6,
                            "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500"
                    ),

                    new Product(
                            4L,
                            "Smart Fitness Watch",
                            "Electronics",
                            4999.0,
                            6999.0,
                            "29% OFF",
                            4.5,
                            "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500"
                    )
            );

            repository.saveAll(products);

            System.out.println(
                    "CartPulse products seeded successfully."
            );
        };
    }
}
