/*
  TechFix Pro Database Schema
  
  This SQL file contains the database schema for the TechFix Pro website.
  It includes tables for storing booking information, contact form submissions,
  and other business data.
  
  To use this schema:
  1. Create a PostgreSQL database
  2. Run this SQL file to create the tables
  3. Update your application's database connection settings
*/

-- Create bookings table
CREATE TABLE IF NOT EXISTS bookings (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  service VARCHAR(255) NOT NULL,
  device_type VARCHAR(100) NOT NULL,
  issue TEXT NOT NULL,
  preferred_date DATE NOT NULL,
  preferred_time VARCHAR(20) NOT NULL,
  additional_notes TEXT,
  status VARCHAR(50) DEFAULT 'pending',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create contact_submissions table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  message TEXT NOT NULL,
  status VARCHAR(50) DEFAULT 'new',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create customers table
CREATE TABLE IF NOT EXISTS customers (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  phone VARCHAR(20),
  address TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create repair_orders table
CREATE TABLE IF NOT EXISTS repair_orders (
  id SERIAL PRIMARY KEY,
  customer_id INTEGER REFERENCES customers(id),
  device_type VARCHAR(100) NOT NULL,
  device_model VARCHAR(100),
  issue_description TEXT NOT NULL,
  service_type VARCHAR(255) NOT NULL,
  status VARCHAR(50) DEFAULT 'received',
  estimated_cost DECIMAL(10, 2),
  final_cost DECIMAL(10, 2),
  technician_notes TEXT,
  warranty_expires DATE,
  date_received DATE DEFAULT CURRENT_DATE,
  date_completed DATE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create repair_status_log table
CREATE TABLE IF NOT EXISTS repair_status_log (
  id SERIAL PRIMARY KEY,
  repair_order_id INTEGER REFERENCES repair_orders(id),
  status VARCHAR(50) NOT NULL,
  notes TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_bookings_date ON bookings(preferred_date);
CREATE INDEX IF NOT EXISTS idx_bookings_status ON bookings(status);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_status ON contact_submissions(status);
CREATE INDEX IF NOT EXISTS idx_customers_email ON customers(email);
CREATE INDEX IF NOT EXISTS idx_repair_orders_customer ON repair_orders(customer_id);
CREATE INDEX IF NOT EXISTS idx_repair_orders_status ON repair_orders(status);
CREATE INDEX IF NOT EXISTS idx_repair_orders_date ON repair_orders(date_received);

-- Insert sample data for testing (optional)
INSERT INTO customers (name, email, phone, address) VALUES 
('John Smith', 'john.smith@email.com', '(555) 123-4567', '123 Main St, City, State 12345'),
('Sarah Johnson', 'sarah.j@email.com', '(555) 987-6543', '456 Oak Ave, City, State 12345'),
('Mike Davis', 'mike.davis@email.com', '(555) 555-0123', '789 Pine Rd, City, State 12345');

-- Create a function to update the updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers to automatically update the updated_at column
CREATE TRIGGER update_bookings_updated_at BEFORE UPDATE ON bookings 
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_contact_submissions_updated_at BEFORE UPDATE ON contact_submissions 
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_customers_updated_at BEFORE UPDATE ON customers 
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_repair_orders_updated_at BEFORE UPDATE ON repair_orders 
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();