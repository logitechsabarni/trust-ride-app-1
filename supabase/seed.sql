-- Seed data for Trust Ride demo
-- This will populate the database with sample data

-- Insert demo users (riders and drivers)
INSERT INTO users (id, email, name, role, phone) VALUES
('550e8400-e29b-41d4-a716-446655440001', 'alice.rider@trustride.com', 'Alice Johnson', 'rider', '+91-9876543210'),
('550e8400-e29b-41d4-a716-446655440002', 'bob.driver@trustride.com', 'Bob Smith', 'driver', '+91-9876543211'),
('550e8400-e29b-41d4-a716-446655440003', 'carol.rider@trustride.com', 'Carol Davis', 'rider', '+91-9876543212'),
('550e8400-e29b-41d4-a716-446655440004', 'david.driver@trustride.com', 'David Wilson', 'driver', '+91-9876543213'),
('550e8400-e29b-41d4-a716-446655440005', 'emma.rider@trustride.com', 'Emma Brown', 'rider', '+91-9876543214');

-- Insert demo drivers
INSERT INTO drivers (user_id, license_no, vehicle_make, vehicle_model, vehicle_year, license_plate, verification_status, blockchain_hash, rating, total_rides) VALUES
('550e8400-e29b-41d4-a716-446655440002', 'DL-DEL-BOB-1234', 'Toyota', 'Camry', 2022, 'DL4CAB1234', 'verified', '0xabc123hashbob456', 4.8, 847),
('550e8400-e29b-41d4-a716-446655440004', 'DL-DEL-DAV-5678', 'Honda', 'City', 2021, 'DL4CAB5678', 'verified', '0xdef456hashdav789', 4.9, 1203);

-- Insert demo rides
INSERT INTO rides (rider_id, driver_id, pickup_address, pickup_lat, pickup_lng, destination_address, destination_lat, destination_lng, fare, status, blockchain_hash, completed_at, rating) VALUES
('550e8400-e29b-41d4-a716-446655440001', '550e8400-e29b-41d4-a716-446655440002', 'Connaught Place, New Delhi', 28.6315, 77.2167, 'Indira Gandhi International Airport, New Delhi', 28.5562, 77.0999, 450.00, 'completed', '0xridehash001completed', NOW() - INTERVAL '2 hours', 5),
('550e8400-e29b-41d4-a716-446655440003', '550e8400-e29b-41d4-a716-446655440004', 'India Gate, New Delhi', 28.6129, 77.2295, 'Red Fort, New Delhi', 28.6562, 77.2410, 180.00, 'completed', '0xridehash002completed', NOW() - INTERVAL '1 day', 4),
('550e8400-e29b-41d4-a716-446655440001', '550e8400-e29b-41d4-a716-446655440004', 'Karol Bagh, New Delhi', 28.6519, 77.1909, 'Chandni Chowk, New Delhi', 28.6507, 77.2334, 220.00, 'in_progress', '0xridehash003inprogress', NULL, NULL);

-- Insert demo safety alerts
INSERT INTO safety_alerts (rider_id, driver_id, ride_id, alert_type, message, status, blockchain_hash, resolved_at, resolution_notes) VALUES
('550e8400-e29b-41d4-a716-446655440001', '550e8400-e29b-41d4-a716-446655440002', (SELECT id FROM rides WHERE blockchain_hash = '0xridehash001completed'), 'emergency', 'Panic button pressed during ride', 'resolved', '0xalert123abc', NOW() - INTERVAL '1 hour 50 minutes', 'False alarm - rider accidentally pressed button'),
('550e8400-e29b-41d4-a716-446655440003', '550e8400-e29b-41d4-a716-446655440004', (SELECT id FROM rides WHERE blockchain_hash = '0xridehash002completed'), 'route_deviation', 'Driver took unexpected route', 'resolved', '0xalert456def', NOW() - INTERVAL '23 hours', 'Route deviation due to traffic - rider informed and agreed');

-- Insert demo blockchain records
INSERT INTO blockchain_records (transaction_hash, record_type, entity_id, entity_type, data, block_number, gas_used) VALUES
('0xabc123hashbob456', 'driver_verification', '550e8400-e29b-41d4-a716-446655440002', 'driver', '{"license": "DL-DEL-BOB-1234", "verification_date": "2024-01-10", "status": "verified"}', 847239, 21000),
('0xdef456hashdav789', 'driver_verification', '550e8400-e29b-41d4-a716-446655440004', 'driver', '{"license": "DL-DEL-DAV-5678", "verification_date": "2024-01-12", "status": "verified"}', 847445, 21000),
('0xridehash001completed', 'ride_completion', (SELECT id FROM rides WHERE blockchain_hash = '0xridehash001completed'), 'ride', '{"fare": 450.00, "completion_time": "2024-01-15T16:45:00Z", "rating": 5}', 847892, 45000),
('0xridehash002completed', 'ride_completion', (SELECT id FROM rides WHERE blockchain_hash = '0xridehash002completed'), 'ride', '{"fare": 180.00, "completion_time": "2024-01-14T18:30:00Z", "rating": 4}', 847650, 45000),
('0xalert123abc', 'safety_alert', (SELECT id FROM safety_alerts WHERE blockchain_hash = '0xalert123abc'), 'alert', '{"alert_type": "emergency", "resolved": true, "resolution_time": "2024-01-15T16:50:00Z"}', 847895, 30000),
('0xalert456def', 'safety_alert', (SELECT id FROM safety_alerts WHERE blockchain_hash = '0xalert456def'), 'alert', '{"alert_type": "route_deviation", "resolved": true, "resolution_time": "2024-01-14T19:00:00Z"}', 847655, 30000);