# Project Name
Flight Booking System

### Live link
https://flight-booking-system-server-jet.vercel.app/

## Table of Contents

- Features
- Prerequisites
- Getting Started
- Installation
- Running the Server
- Usage
- API Endpoints
- Testing
- Contributing

## Features

- RESTful API with CRUD operations.
- JWT-based authentication and authorization.
- Role-based access control (Admin/User).
- Input validation and error handling.
- Integration with MongoDB for data storage.
- Secure password hashing with bcrypt.

## Prerequisites

- Node.js
- npm or yarn
- Mongoose

## Clone the repository

```bash
git clone https://github.com/jannatul-akhi/flight-booking-system-server.git

```

## Navigate into the project directory
cd flight-booking-system-server

### Install dependencies & run the server

```bash
npm install
```

### env

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

### Running the server

start the server

```bash
npm run dev
```

Access the API at http://localhost:5000.

#### API Endpoints

Public
POST /api/register: Register a new user.
POST /api/login: Login and receive a JWT.

Flights
GET /api/flights: Retrieve all flights.
GET /api/flights/search: Search flights by criteria.
GET /api/flights/:id: Get specific flight details.

Bookings
POST /api/bookings: Create a booking.
GET /api/bookings/user/:id: Get user bookings.
GET /api/bookings (Admin): View all bookings.
PUT /api/bookings/:id (Admin): Update booking.
DELETE /api/bookings/:id (Admin): Delete booking.

Admin
POST /api/flights: Add a new flight.
PUT /api/flights/:id: Update flight details.
DELETE /api/flights/:id: Delete a flight.

#### Contributing

Contributions are welcome! Submit a pull request to suggest improvements.
