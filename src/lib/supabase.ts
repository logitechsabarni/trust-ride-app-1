// Supabase client configuration
// This will be ready once Supabase is connected

import { createClient } from '@supabase/supabase-js';

// Environment variables will be automatically available once Supabase is connected
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Supabase credentials not found. Please connect to Supabase first.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true
  }
});

// Auth helpers
export const auth = {
  signUp: async (email: string, password: string, metadata?: any) => {
    return await supabase.auth.signUp({
      email,
      password,
      options: {
        data: metadata
      }
    });
  },

  signIn: async (email: string, password: string) => {
    return await supabase.auth.signInWithPassword({
      email,
      password
    });
  },

  signInWithGoogle: async () => {
    return await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/auth/callback`
      }
    });
  },

  signOut: async () => {
    return await supabase.auth.signOut();
  },

  getCurrentUser: async () => {
    const { data: { user }, error } = await supabase.auth.getUser();
    return { user, error };
  },

  onAuthStateChange: (callback: (event: string, session: any) => void) => {
    return supabase.auth.onAuthStateChange(callback);
  }
};

// Database helpers
export const db = {
  // Users
  getUser: async (id: string) => {
    return await supabase
      .from('users')
      .select('*')
      .eq('id', id)
      .single();
  },

  updateUser: async (id: string, updates: any) => {
    return await supabase
      .from('users')
      .update(updates)
      .eq('id', id)
      .select()
      .single();
  },

  // Drivers
  getDriver: async (userId: string) => {
    return await supabase
      .from('drivers')
      .select(`
        *,
        user:users(*)
      `)
      .eq('user_id', userId)
      .single();
  },

  createDriver: async (driverData: any) => {
    return await supabase
      .from('drivers')
      .insert(driverData)
      .select()
      .single();
  },

  updateDriver: async (id: string, updates: any) => {
    return await supabase
      .from('drivers')
      .update(updates)
      .eq('id', id)
      .select()
      .single();
  },

  // Rides
  getRides: async (userId: string, userRole: 'rider' | 'driver') => {
    const column = userRole === 'rider' ? 'rider_id' : 'driver_id';
    return await supabase
      .from('rides')
      .select(`
        *,
        rider:users!rides_rider_id_fkey(*),
        driver:users!rides_driver_id_fkey(*)
      `)
      .eq(column, userId)
      .order('created_at', { ascending: false });
  },

  createRide: async (rideData: any) => {
    return await supabase
      .from('rides')
      .insert(rideData)
      .select(`
        *,
        rider:users!rides_rider_id_fkey(*),
        driver:users!rides_driver_id_fkey(*)
      `)
      .single();
  },

  updateRide: async (id: string, updates: any) => {
    return await supabase
      .from('rides')
      .update(updates)
      .eq('id', id)
      .select(`
        *,
        rider:users!rides_rider_id_fkey(*),
        driver:users!rides_driver_id_fkey(*)
      `)
      .single();
  },

  // Safety Alerts
  getSafetyAlerts: async (userId?: string) => {
    let query = supabase
      .from('safety_alerts')
      .select(`
        *,
        rider:users!safety_alerts_rider_id_fkey(*),
        driver:users!safety_alerts_driver_id_fkey(*),
        ride:rides(*)
      `)
      .order('created_at', { ascending: false });

    if (userId) {
      query = query.or(`rider_id.eq.${userId},driver_id.eq.${userId}`);
    }

    return await query;
  },

  createSafetyAlert: async (alertData: any) => {
    return await supabase
      .from('safety_alerts')
      .insert(alertData)
      .select(`
        *,
        rider:users!safety_alerts_rider_id_fkey(*),
        driver:users!safety_alerts_driver_id_fkey(*),
        ride:rides(*)
      `)
      .single();
  },

  updateSafetyAlert: async (id: string, updates: any) => {
    return await supabase
      .from('safety_alerts')
      .update(updates)
      .eq('id', id)
      .select()
      .single();
  },

  // Blockchain Records
  getBlockchainRecords: async (limit: number = 50) => {
    return await supabase
      .from('blockchain_records')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(limit);
  },

  createBlockchainRecord: async (recordData: any) => {
    return await supabase
      .from('blockchain_records')
      .insert(recordData)
      .select()
      .single();
  }
};

// Real-time subscriptions
export const subscriptions = {
  subscribeToRides: (userId: string, userRole: 'rider' | 'driver', callback: (payload: any) => void) => {
    const column = userRole === 'rider' ? 'rider_id' : 'driver_id';
    return supabase
      .channel('rides_changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'rides',
          filter: `${column}=eq.${userId}`
        },
        callback
      )
      .subscribe();
  },

  subscribeToSafetyAlerts: (userId: string, callback: (payload: any) => void) => {
    return supabase
      .channel('safety_alerts_changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'safety_alerts',
          filter: `rider_id=eq.${userId}`
        },
        callback
      )
      .subscribe();
  }
};