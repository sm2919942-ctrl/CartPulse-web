# CartPulse – Full Stack E-Commerce Platform

CartPulse is a modern full-stack e-commerce web application designed with a premium and responsive user interface.

The application provides essential e-commerce functionality including product browsing, search and filtering, authentication, cart management, wishlist, checkout, and order management.

## Features

- User Signup and Login
- Product Catalogue
- Product Details
- Product Search
- Category Filtering
- Price and Rating Sorting
- Shopping Cart
- Wishlist
- Checkout System
- Order Placement
- Order History
- Responsive Premium UI
- REST API Integration
- MySQL Database Integration

## Tech Stack

### Frontend
- React.js
- JavaScript
- Vite
- React Router
- Lucide React
- CSS3
- LocalStorage

### Backend
- Java
- Spring Boot
- Spring Data JPA
- Hibernate
- REST APIs

### Database
- MySQL

### Tools
- Git & GitHub
- Postman
- VS Code
- IntelliJ IDEA
- MySQL Workbench

## Project Structure

```text
CartPulse/
├── frontend/
│   ├── public/
│   ├── src/
│   ├── package.json
│   └── vite.config.js
│
├── backend/
│   ├── src/
│   ├── pom.xml
│   └── ...
│
├── .gitignore
└── README.md
```

## Backend Features

The Spring Boot backend provides REST APIs for:

- User registration
- User authentication
- Product management
- Product retrieval
- Order creation
- Order persistence

MySQL is used to store users, products, orders, and order items.

## Run Frontend

```bash
cd frontend
npm install
npm run dev
```

## Run Backend

Make sure MySQL is running and the `cartpulse` database exists.

Then run the Spring Boot application from IntelliJ IDEA or:

```bash
cd backend
mvn spring-boot:run
```

## Live Demo

Frontend deployment link will be added after deployment.

## Developer

Developed by **Suman Saurabh**

B.Tech – Computer Science & Engineering

## Future Improvements

- JWT Authentication
- Online Payment Gateway
- Admin Dashboard
- Inventory Management
- Cloud Backend Deployment