package com.cartpulse.controller;

import com.cartpulse.entity.User;
import com.cartpulse.service.UserService;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:5173")
public class AuthController {

    private final UserService userService;

    public AuthController(
            UserService userService
    ) {
        this.userService = userService;
    }

    @PostMapping("/signup")
    public ResponseEntity<?> signup(
            @RequestBody User user
    ) {

        try {

            User savedUser =
                    userService.signup(user);

            Map<String, Object> response =
                    new HashMap<>();

            response.put(
                    "message",
                    "Account created successfully"
            );

            response.put(
                    "user",
                    savedUser
            );

            return ResponseEntity.ok(response);

        } catch (RuntimeException e) {

            Map<String, String> error =
                    new HashMap<>();

            error.put(
                    "message",
                    e.getMessage()
            );

            return ResponseEntity
                    .badRequest()
                    .body(error);
        }
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(
            @RequestBody Map<String, String> body
    ) {

        try {

            String email =
                    body.get("email");

            String password =
                    body.get("password");

            User user =
                    userService.login(
                            email,
                            password
                    );

            Map<String, Object> response =
                    new HashMap<>();

            response.put(
                    "message",
                    "Login successful"
            );

            response.put(
                    "user",
                    user
            );

            return ResponseEntity.ok(response);

        } catch (RuntimeException e) {

            Map<String, String> error =
                    new HashMap<>();

            error.put(
                    "message",
                    e.getMessage()
            );

            return ResponseEntity
                    .badRequest()
                    .body(error);
        }
    }
}
