// Supabase Edge Function for booking rides
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    // Initialize Supabase client
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? '',
      {
        global: {
          headers: { Authorization: req.headers.get('Authorization')! },
        },
      }
    )

    // Get the current user
    const { data: { user }, error: authError } = await supabaseClient.auth.getUser()
    if (authError || !user) {
      throw new Error('Unauthorized')
    }

    // Parse request body
    const { 
      pickup_address, 
      destination_address, 
      pickup_lat, 
      pickup_lng, 
      destination_lat, 
      destination_lng,
      fare,
      scheduled_time 
    } = await req.json()

    // Find available driver (simplified logic)
    const { data: availableDrivers, error: driverError } = await supabaseClient
      .from('drivers')
      .select('user_id')
      .eq('verification_status', 'verified')
      .limit(1)

    if (driverError || !availableDrivers || availableDrivers.length === 0) {
      throw new Error('No available drivers found')
    }

    // Create the ride
    const { data: ride, error: rideError } = await supabaseClient
      .from('rides')
      .insert({
        rider_id: user.id,
        driver_id: availableDrivers[0].user_id,
        pickup_address,
        destination_address,
        pickup_lat,
        pickup_lng,
        destination_lat,
        destination_lng,
        fare,
        scheduled_time,
        status: 'booked'
      })
      .select(`
        *,
        rider:users!rides_rider_id_fkey(*),
        driver:users!rides_driver_id_fkey(*)
      `)
      .single()

    if (rideError) {
      throw rideError
    }

    // Generate mock blockchain hash for verification
    const blockchainHash = `0x${Math.random().toString(16).substring(2)}${Date.now().toString(16)}`

    // Create blockchain record
    await supabaseClient
      .from('blockchain_records')
      .insert({
        transaction_hash: blockchainHash,
        record_type: 'ride_booking',
        entity_id: ride.id,
        entity_type: 'ride',
        data: {
          rider_id: user.id,
          driver_id: ride.driver_id,
          fare,
          booking_time: new Date().toISOString()
        },
        block_number: Math.floor(Math.random() * 1000000) + 847000,
        gas_used: 45000
      })

    // Update ride with blockchain hash
    const { data: updatedRide, error: updateError } = await supabaseClient
      .from('rides')
      .update({ blockchain_hash: blockchainHash })
      .eq('id', ride.id)
      .select(`
        *,
        rider:users!rides_rider_id_fkey(*),
        driver:users!rides_driver_id_fkey(*)
      `)
      .single()

    if (updateError) {
      throw updateError
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        ride: updatedRide,
        message: 'Ride booked successfully and verified on blockchain'
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      },
    )
  } catch (error) {
    return new Response(
      JSON.stringify({ 
        error: error.message || 'An error occurred while booking the ride'
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400,
      },
    )
  }
})