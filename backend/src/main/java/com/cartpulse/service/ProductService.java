package com.cartpulse.service;

import com.cartpulse.entity.Product;
import com.cartpulse.repository.ProductRepository;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {

    private final ProductRepository productRepository;

    public ProductService(
            ProductRepository productRepository
    ) {
        this.productRepository = productRepository;
    }

    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    public Product getProductById(Long id) {

        return productRepository
                .findById(id)
                .orElseThrow(
                        () -> new RuntimeException(
                                "Product not found"
                        )
                );
    }

    public List<Product> getByCategory(
            String category
    ) {

        return productRepository
                .findByCategoryIgnoreCase(
                        category
                );
    }

    public Product saveProduct(
            Product product
    ) {

        return productRepository.save(product);
    }
}
