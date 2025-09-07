-- Trust Ride Database Schema
-- Run this in your Supabase SQL editor once connected

-- Enable necessary extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Users table: riders and drivers
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    email VARCHAR(255) UNIQUE NOT NULL,
    name VARCHAR(255) NOT NULL,
    role VARCHAR(20) CHECK (role IN ('rider', 'driver')) NOT NULL,
    avatar_url TEXT,
    phone VARCHAR(20),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Drivers table: linked with users
CREATE TABLE drivers (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    license_no VARCHAR(100) UNIQUE NOT NULL,
    vehicle_make VARCHAR(100),
    vehicle_model VARCHAR(100),
    vehicle_year INTEGER,
    license_plate VARCHAR(20),
    verification_status VARCHAR(20) DEFAULT 'pending' CHECK (verification_status IN ('pending', 'verified', 'rejected')),
    blockchain_hash VARCHAR(255),
    rating DECIMAL(3,2) DEFAULT 0.0,
    total_rides INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Rides table: booking and blockchain records
CREATE TABLE rides (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    rider_id UUID REFERENCES users(id) ON DELETE CASCADE,
    driver_id UUID REFERENCES users(id) ON DELETE CASCADE,
    pickup_address VARCHAR(500) NOT NULL,
    pickup_lat DECIMAL(10, 8),
    pickup_lng DECIMAL(11, 8),
    destination_address VARCHAR(500) NOT NULL,
    destination_lat DECIMAL(10, 8),
    destination_lng DECIMAL(11, 8),
    fare DECIMAL(10,2) NOT NULL,
    status VARCHAR(20) DEFAULT 'booked' CHECK (status IN ('booked', 'in_progress', 'completed', 'cancelled')),
    blockchain_hash VARCHAR(255),
    scheduled_time TIMESTAMP WITH TIME ZONE,
    started_at TIMESTAMP WITH TIME ZONE,
    completed_at TIMESTAMP WITH TIME ZONE,
    rating INTEGER CHECK (rating >= 1 AND rating <= 5),
    rider_feedback TEXT,
    driver_feedback TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Safety alerts table
CREATE TABLE safety_alerts (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    rider_id UUID REFERENCES users(id) ON DELETE CASCADE,
    driver_id UUID REFERENCES users(id),
    ride_id UUID REFERENCES rides(id) ON DELETE CASCADE,
    alert_type VARCHAR(50) NOT NULL,
    message TEXT NOT NULL,
    location_lat DECIMAL(10, 8),
    location_lng DECIMAL(11, 8),
    status VARCHAR(20) DEFAULT 'active' CHECK (status IN ('active', 'resolved', 'false_alarm')),
    blockchain_hash VARCHAR(255),
    resolved_at TIMESTAMP WITH TIME ZONE,
    resolved_by UUID REFERENCES users(id),
    resolution_notes TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Blockchain records table for audit trail
CREATE TABLE blockchain_records (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    transaction_hash VARCHAR(255) UNIQUE NOT NULL,
    record_type VARCHAR(50) NOT NULL,
    entity_id UUID NOT NULL,
    entity_type VARCHAR(50) NOT NULL,
    data JSONB NOT NULL,
    block_number BIGINT,
    gas_used INTEGER,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Seed data
INSERT INTO users (id, email, name, role, phone) VALUES
('550e8400-e29b-41d4-a716-446655440001', 'alice.rider@trustride.com', 'Alice Johnson', 'rider', '+91-9876543210'),
('550e8400-e29b-41d4-a716-446655440002', 'bob.driver@trustride.com', 'Bob Smith', 'driver', '+91-9876543211'),
('550e8400-e29b-41d4-a716-446655440003', 'carol.rider@trustride.com', 'Carol Davis', 'rider', '+91-9876543212'),
('550e8400-e29b-41d4-a716-446655440004', 'david.driver@trustride.com', 'David Wilson', 'driver', '+91-9876543213');

INSERT INTO drivers (user_id, license_no, vehicle_make, vehicle_model, vehicle_year, license_plate, verification_status, blockchain_hash, rating, total_rides) VALUES
('550e8400-e29b-41d4-a716-446655440002', 'DL-DEL-BOB-1234', 'Toyota', 'Camry', 2022, 'DL4CAB1234', 'verified', '0xabc123hashbob456', 4.8, 847),
('550e8400-e29b-41d4-a716-446655440004', 'DL-DEL-DAV-5678', 'Honda', 'City', 2021, 'DL4CAB5678', 'verified', '0xdef456hashdav789', 4.9, 1203);