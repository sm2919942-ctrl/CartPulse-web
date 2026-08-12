package com.cartpulse.controller;

import com.cartpulse.entity.Product;
import com.cartpulse.service.ProductService;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/products")
@CrossOrigin(origins = "http://localhost:5173")
public class ProductController {

    private final ProductService productService;

    public ProductController(
            ProductService productService
    ) {
        this.productService = productService;
    }

    @GetMapping
    public List<Product> getProducts() {

        return productService
                .getAllProducts();
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getProduct(
            @PathVariable Long id
    ) {

        try {

            return ResponseEntity.ok(
                    productService
                            .getProductById(id)
            );

        } catch (RuntimeException e) {

            return ResponseEntity
                    .notFound()
                    .build();
        }
    }

    @GetMapping("/category/{category}")
    public List<Product> getCategory(
            @PathVariable String category
    ) {

        return productService
                .getByCategory(category);
    }

    @PostMapping
    public Product addProduct(
            @RequestBody Product product
    ) {

        return productService
                .saveProduct(product);
    }
}
