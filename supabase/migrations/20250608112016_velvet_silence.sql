-- Evolution PC Repairs Database Schema
-- Compatible with phpMyAdmin and MySQL/MariaDB

-- Create database
CREATE DATABASE IF NOT EXISTS evolution_pc_repairs;
USE evolution_pc_repairs;

-- Create bookings table
CREATE TABLE IF NOT EXISTS bookings (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  service VARCHAR(255) NOT NULL,
  device_type VARCHAR(100) NOT NULL,
  issue TEXT NOT NULL,
  preferred_date DATE NOT NULL,
  preferred_time VARCHAR(20) NOT NULL,
  additional_notes TEXT,
  status ENUM('pending', 'confirmed', 'in_progress', 'completed', 'cancelled') DEFAULT 'pending',
  booking_reference VARCHAR(50) UNIQUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Create contact_submissions table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  message TEXT NOT NULL,
  status ENUM('new', 'read', 'responded', 'closed') DEFAULT 'new',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Create customers table
CREATE TABLE IF NOT EXISTS customers (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  phone VARCHAR(20),
  address TEXT,
  postcode VARCHAR(10),
  city VARCHAR(100),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Create repair_orders table
CREATE TABLE IF NOT EXISTS repair_orders (
  id INT AUTO_INCREMENT PRIMARY KEY,
  customer_id INT,
  booking_id INT,
  device_type VARCHAR(100) NOT NULL,
  device_model VARCHAR(100),
  device_serial VARCHAR(100),
  issue_description TEXT NOT NULL,
  service_type VARCHAR(255) NOT NULL,
  status ENUM('received', 'diagnosed', 'quoted', 'approved', 'in_repair', 'testing', 'completed', 'collected', 'cancelled') DEFAULT 'received',
  estimated_cost DECIMAL(10, 2),
  final_cost DECIMAL(10, 2),
  parts_cost DECIMAL(10, 2),
  labour_cost DECIMAL(10, 2),
  technician_notes TEXT,
  customer_notes TEXT,
  warranty_expires DATE,
  date_received DATE DEFAULT (CURRENT_DATE),
  date_completed DATE,
  date_collected DATE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (customer_id) REFERENCES customers(id) ON DELETE SET NULL,
  FOREIGN KEY (booking_id) REFERENCES bookings(id) ON DELETE SET NULL
);

-- Create repair_status_log table
CREATE TABLE IF NOT EXISTS repair_status_log (
  id INT AUTO_INCREMENT PRIMARY KEY,
  repair_order_id INT NOT NULL,
  old_status VARCHAR(50),
  new_status VARCHAR(50) NOT NULL,
  notes TEXT,
  changed_by VARCHAR(100),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (repair_order_id) REFERENCES repair_orders(id) ON DELETE CASCADE
);

-- Create services table
CREATE TABLE IF NOT EXISTS services (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  category ENUM('mobile', 'computer', 'service') NOT NULL,
  description TEXT,
  base_price DECIMAL(10, 2),
  estimated_time INT, -- in minutes
  active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Create inventory table for parts
CREATE TABLE IF NOT EXISTS inventory (
  id INT AUTO_INCREMENT PRIMARY KEY,
  part_name VARCHAR(255) NOT NULL,
  part_number VARCHAR(100),
  category VARCHAR(100),
  compatible_devices TEXT,
  quantity_in_stock INT DEFAULT 0,
  cost_price DECIMAL(10, 2),
  selling_price DECIMAL(10, 2),
  supplier VARCHAR(255),
  location VARCHAR(100),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Create repair_parts table (junction table for repairs and parts used)
CREATE TABLE IF NOT EXISTS repair_parts (
  id INT AUTO_INCREMENT PRIMARY KEY,
  repair_order_id INT NOT NULL,
  inventory_id INT NOT NULL,
  quantity_used INT NOT NULL,
  cost_each DECIMAL(10, 2),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (repair_order_id) REFERENCES repair_orders(id) ON DELETE CASCADE,
  FOREIGN KEY (inventory_id) REFERENCES inventory(id) ON DELETE RESTRICT
);

-- Create indexes for better performance
CREATE INDEX idx_bookings_date ON bookings(preferred_date);
CREATE INDEX idx_bookings_status ON bookings(status);
CREATE INDEX idx_bookings_reference ON bookings(booking_reference);
CREATE INDEX idx_contact_submissions_status ON contact_submissions(status);
CREATE INDEX idx_customers_email ON customers(email);
CREATE INDEX idx_repair_orders_customer ON repair_orders(customer_id);
CREATE INDEX idx_repair_orders_status ON repair_orders(status);
CREATE INDEX idx_repair_orders_date ON repair_orders(date_received);
CREATE INDEX idx_inventory_category ON inventory(category);
CREATE INDEX idx_services_category ON services(category);

-- Insert sample services data
INSERT INTO services (name, category, description, base_price, estimated_time) VALUES 
('Screen Replacement', 'mobile', 'Professional screen repair for all mobile devices', 89.00, 60),
('Battery Replacement', 'mobile', 'High-quality battery replacement service', 59.00, 45),
('Water Damage Repair', 'mobile', 'Emergency water damage restoration', 99.00, 120),
('Virus Removal', 'computer', 'Complete system cleaning and security', 89.00, 90),
('Hardware Repair', 'computer', 'Motherboard and component repairs', 149.00, 180),
('Custom PC Build', 'computer', 'Professional custom computer building', 299.00, 240),
('Click & Collect', 'service', 'Convenient pickup and delivery service', 0.00, 0),
('Postal Service', 'service', 'Secure postal repair service', 9.99, 0);

-- Insert sample customer data
INSERT INTO customers (name, email, phone, address, postcode, city) VALUES 
('John Smith', 'john.smith@email.com', '01554 123001', '123 High Street', 'SA15 1AB', 'Llanelli'),
('Sarah Williams', 'sarah.williams@email.com', '01792 456002', '456 Castle Street', 'SA1 2CD', 'Swansea'),
('David Jones', 'david.jones@email.com', '029 2034 5003', '789 Queen Street', 'CF10 3EF', 'Cardiff'),
('Emma Davies', 'emma.davies@email.com', '01267 890004', '321 King Street', 'SA31 4GH', 'Carmarthen');

-- Create trigger to generate booking reference
DELIMITER //
CREATE TRIGGER generate_booking_reference 
BEFORE INSERT ON bookings 
FOR EACH ROW 
BEGIN 
    IF NEW.booking_reference IS NULL THEN
        SET NEW.booking_reference = CONCAT('EPC-', DATE_FORMAT(NOW(), '%Y%m%d'), '-', LPAD(LAST_INSERT_ID() + 1, 4, '0'));
    END IF;
END//
DELIMITER ;

-- Create trigger to log status changes
DELIMITER //
CREATE TRIGGER log_repair_status_change 
AFTER UPDATE ON repair_orders 
FOR EACH ROW 
BEGIN 
    IF OLD.status != NEW.status THEN
        INSERT INTO repair_status_log (repair_order_id, old_status, new_status, notes, changed_by)
        VALUES (NEW.id, OLD.status, NEW.status, 'Status updated', 'SYSTEM');
    END IF;
END//
DELIMITER ;

-- Create view for booking summary
CREATE VIEW booking_summary AS
SELECT 
    b.id,
    b.booking_reference,
    b.name,
    b.email,
    b.phone,
    b.service,
    b.device_type,
    b.preferred_date,
    b.preferred_time,
    b.status,
    b.created_at,
    CASE 
        WHEN ro.id IS NOT NULL THEN 'Repair Order Created'
        ELSE 'Pending'
    END as repair_status
FROM bookings b
LEFT JOIN repair_orders ro ON b.id = ro.booking_id
ORDER BY b.created_at DESC;

-- Create view for repair order summary
CREATE VIEW repair_summary AS
SELECT 
    ro.id,
    c.name as customer_name,
    c.email as customer_email,
    ro.device_type,
    ro.device_model,
    ro.service_type,
    ro.status,
    ro.estimated_cost,
    ro.final_cost,
    ro.date_received,
    ro.date_completed,
    DATEDIFF(COALESCE(ro.date_completed, CURRENT_DATE), ro.date_received) as days_in_repair
FROM repair_orders ro
LEFT JOIN customers c ON ro.customer_id = c.id
ORDER BY ro.date_received DESC;

-- Grant permissions (adjust as needed for your setup)
-- GRANT ALL PRIVILEGES ON evolution_pc_repairs.* TO 'repair_user'@'localhost' IDENTIFIED BY 'secure_password';
-- FLUSH PRIVILEGES;

-- Sample data for testing
INSERT INTO bookings (name, email, phone, service, device_type, issue, preferred_date, preferred_time, status) VALUES 
('Test Customer', 'test@example.com', '01554 123456', 'Screen Replacement', 'iPhone', 'Cracked screen after drop', '2024-01-15', '10:00 AM', 'pending');

-- End of schema