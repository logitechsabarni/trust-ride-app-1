// Database types for Supabase
// This file will be auto-generated when you connect to Supabase

export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string;
          email: string;
          name: string;
          role: 'rider' | 'driver';
          avatar_url?: string;
          phone?: string;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          email: string;
          name: string;
          role: 'rider' | 'driver';
          avatar_url?: string;
          phone?: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          email?: string;
          name?: string;
          role?: 'rider' | 'driver';
          avatar_url?: string;
          phone?: string;
          created_at?: string;
          updated_at?: string;
        };
      };
      drivers: {
        Row: {
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
        };
        Insert: {
          id?: string;
          user_id: string;
          license_no: string;
          vehicle_make?: string;
          vehicle_model?: string;
          vehicle_year?: number;
          license_plate?: string;
          verification_status?: 'pending' | 'verified' | 'rejected';
          blockchain_hash?: string;
          rating?: number;
          total_rides?: number;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          license_no?: string;
          vehicle_make?: string;
          vehicle_model?: string;
          vehicle_year?: number;
          license_plate?: string;
          verification_status?: 'pending' | 'verified' | 'rejected';
          blockchain_hash?: string;
          rating?: number;
          total_rides?: number;
          created_at?: string;
          updated_at?: string;
        };
      };
      rides: {
        Row: {
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
        };
        Insert: {
          id?: string;
          rider_id: string;
          driver_id: string;
          pickup_address: string;
          pickup_lat?: number;
          pickup_lng?: number;
          destination_address: string;
          destination_lat?: number;
          destination_lng?: number;
          fare: number;
          status?: 'booked' | 'in_progress' | 'completed' | 'cancelled';
          blockchain_hash?: string;
          scheduled_time?: string;
          started_at?: string;
          completed_at?: string;
          rating?: number;
          rider_feedback?: string;
          driver_feedback?: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          rider_id?: string;
          driver_id?: string;
          pickup_address?: string;
          pickup_lat?: number;
          pickup_lng?: number;
          destination_address?: string;
          destination_lat?: number;
          destination_lng?: number;
          fare?: number;
          status?: 'booked' | 'in_progress' | 'completed' | 'cancelled';
          blockchain_hash?: string;
          scheduled_time?: string;
          started_at?: string;
          completed_at?: string;
          rating?: number;
          rider_feedback?: string;
          driver_feedback?: string;
          created_at?: string;
          updated_at?: string;
        };
      };
      safety_alerts: {
        Row: {
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
        };
        Insert: {
          id?: string;
          rider_id: string;
          driver_id?: string;
          ride_id: string;
          alert_type: string;
          message: string;
          location_lat?: number;
          location_lng?: number;
          status?: 'active' | 'resolved' | 'false_alarm';
          blockchain_hash?: string;
          resolved_at?: string;
          resolved_by?: string;
          resolution_notes?: string;
          created_at?: string;
        };
        Update: {
          id?: string;
          rider_id?: string;
          driver_id?: string;
          ride_id?: string;
          alert_type?: string;
          message?: string;
          location_lat?: number;
          location_lng?: number;
          status?: 'active' | 'resolved' | 'false_alarm';
          blockchain_hash?: string;
          resolved_at?: string;
          resolved_by?: string;
          resolution_notes?: string;
          created_at?: string;
        };
      };
      blockchain_records: {
        Row: {
          id: string;
          transaction_hash: string;
          record_type: string;
          entity_id: string;
          entity_type: string;
          data: any;
          block_number?: number;
          gas_used?: number;
          created_at: string;
        };
        Insert: {
          id?: string;
          transaction_hash: string;
          record_type: string;
          entity_id: string;
          entity_type: string;
          data: any;
          block_number?: number;
          gas_used?: number;
          created_at?: string;
        };
        Update: {
          id?: string;
          transaction_hash?: string;
          record_type?: string;
          entity_id?: string;
          entity_type?: string;
          data?: any;
          block_number?: number;
          gas_used?: number;
          created_at?: string;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
  };
}