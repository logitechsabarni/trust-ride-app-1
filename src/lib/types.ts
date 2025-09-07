// TypeScript types for Trust Ride application

export interface User {
  id: string;
  email: string;
  name: string;
  role: 'rider' | 'driver';
  avatar_url?: string;
  phone?: string;
  created_at: string;
  updated_at: string;
}

export interface Driver {
  id: string;
  user_id: string;
  license_no: string;
  vehicle_make?: string;
  vehicle_model?: string;
  vehicle_year?: number;
  license_plate?: string;
  verification_status: 'pending' | 'verified' | 'rejected';
  blockchain_hash?: string;
  rating: number;
  total_rides: number;
  created_at: string;
  updated_at: string;
  user?: User;
}

export interface Ride {
  id: string;
  rider_id: string;
  driver_id: string;
  pickup_address: string;
  pickup_lat?: number;
  pickup_lng?: number;
  destination_address: string;
  destination_lat?: number;
  destination_lng?: number;
  fare: number;
  status: 'booked' | 'in_progress' | 'completed' | 'cancelled';
  blockchain_hash?: string;
  scheduled_time?: string;
  started_at?: string;
  completed_at?: string;
  rating?: number;
  rider_feedback?: string;
  driver_feedback?: string;
  created_at: string;
  updated_at: string;
  rider?: User;
  driver?: User;
}

export interface SafetyAlert {
  id: string;
  rider_id: string;
  driver_id?: string;
  ride_id: string;
  alert_type: string;
  message: string;
  location_lat?: number;
  location_lng?: number;
  status: 'active' | 'resolved' | 'false_alarm';
  blockchain_hash?: string;
  resolved_at?: string;
  resolved_by?: string;
  resolution_notes?: string;
  created_at: string;
  rider?: User;
  driver?: User;
  ride?: Ride;
}

export interface BlockchainRecord {
  id: string;
  transaction_hash: string;
  record_type: string;
  entity_id: string;
  entity_type: string;
  data: Record<string, any>;
  block_number?: number;
  gas_used?: number;
  created_at: string;
}

export interface RideBooking {
  pickup_address: string;
  destination_address: string;
  pickup_lat?: number;
  pickup_lng?: number;
  destination_lat?: number;
  destination_lng?: number;
  scheduled_time?: string;
  ride_type: 'standard' | 'premium';
}

export interface DriverStats {
  total_rides: number;
  total_earnings: number;
  average_rating: number;
  completion_rate: number;
  today_rides: number;
  today_earnings: number;
  online_hours: number;
}

export interface RiderStats {
  total_rides: number;
  total_spent: number;
  safety_score: number;
  favorite_destinations: string[];
}

export interface SafetyStats {
  total_alerts: number;
  resolved_alerts: number;
  average_response_time: number;
  safety_score: number;
}

// API Response types
export interface ApiResponse<T = any> {
  data?: T;
  error?: string;
  message?: string;
}

// Authentication types
export interface AuthUser {
  id: string;
  email: string;
  name: string;
  role: 'rider' | 'driver';
  avatar_url?: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface SignupData {
  email: string;
  password: string;
  name: string;
  role: 'rider' | 'driver';
  phone?: string;
}