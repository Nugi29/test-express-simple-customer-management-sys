# Customer Management System

A simple web-based Customer Management System that allows you to manage customer data with basic CRUD operations.

## Features

- View all customers
- Add new customer
- Update customer information
- Delete customer
- Search customer by ID

## Technologies Used

- **Backend**: Node.js with Express.js
- **Database**: MySQL
- **Frontend**: HTML, Bootstrap 5, Vanilla JavaScript

## Project Structure

- `Customer-Management-ExpressJS-Backend/` – Node.js Express backend
- `Customer-Management-Native-Frontend/` – HTML + Bootstrap + JS frontend

## Installation and Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- MySQL
- Web browser

### Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/Nugi29/test-express-simple-customer-management-sys.git

   ```

2. Database Setup:
   - Create a MySQL database named `customer_manage`
   - Update database credentials in `Customer-Management-ExpressJS-Backend/db.js` if needed
   ```sql
   -- Run these commands in your MySQL client
    CREATE DATABASE IF NOT EXISTS customer_manage;

    USE customer_manage;

    CREATE TABLE customer (
        id INT AUTO_INCREMENT PRIMARY KEY,
        salary DECIMAL(10, 2) NOT NULL,
        address VARCHAR(255) NOT NULL,
        name VARCHAR(100) NOT NULL
    );

    -- Insert sample data (based on your existing data)
    INSERT INTO customer (salary, address, name) VALUES
    (30000, 'Gampaha', 'Kamal'),
    (73000, '34/2, Main Street, Galle', 'Sunil Fernando'),
    (105000, '88, Temple Road, Jaffna', 'Ravi Kanth'),
    (65000.25, '21, Hospital Road, Matara', 'Chathurika Silva'),
    (99000, '56, Negombo Road, Wattala', 'Tharidu Jayasuriya'),
    (87000.6, '5, Stanley Thilakarathne Mawatha, Nugegoda', 'Lakshmi Wijesinghe'),
    (78000, '14, Sea Street, Negombo', 'Ruwan De Silva'),
    (96000.85, '98, Malwatta Road, Kandy', 'Isuru Madushanka'),
    (69000, '3, Dharmapala Mawatha, Anuradhapura', 'Dilani Herath'),
    (85000, 'No. 45, Galle Road, Colombo 03', 'Kamal Perera'),
    (92000.5, '12/1, Kandy Road, Kurunegala', 'Nimali Rajapaksha')
   ```

3. Backend Setup:
   - Navigate to the backend directory:
     ```bash
     cd Customer-Management-ExpressJS-Backend
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Start the server:
     ```bash
     node server.js
     ```
   - The backend will be running on `http://localhost:3000`

4. Frontend Setup:
   - Open `Customer-Management-Native-Frontend/index.html` in your web browser
   - Or serve it using a local server for better development experience

## API Endpoints

- `GET /customer/get-all` - Retrieve all customers
- `POST /customer/add` - Add a new customer
- `PUT /customer/update-customer` - Update customer information
- `DELETE /customer/delete/{id}` - Delete a customer
- `GET /customer/search-by-id/{id}` - Search for a customer by ID

### Main Dashboard
View all customers in a responsive Bootstrap table.

### Add Customer
Simple form to add new customer with validation.

### Search Customer
Search functionality to find customers by ID.

### Update Customer
Edit existing customer information.

## License

This project is open source, educational purpose you can get and edit anything.

## Author

⭐️ From [Nugi29](https://github.com/Nugi29)
