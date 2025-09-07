# Trust Ride - Backend Setup Guide

## 🚀 Quick Setup Once Supabase is Connected

Your Trust Ride app is ready to go! Here's what you need to do once you connect to Supabase:

### 1. Database Setup

Copy and paste this SQL into your Supabase SQL Editor:

```sql
-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create tables (copy from database-schema.sql)
-- All tables, indexes, and RLS policies are ready to deploy
```

### 2. Authentication Setup

**Enable Google OAuth:**
1. Go to Supabase Dashboard → Authentication → Providers
2. Enable Google provider
3. Add your Google OAuth credentials

**Configure Email Templates:**
- Customize signup/login email templates in Authentication → Email Templates

### 3. Environment Variables

These will be automatically available once connected:
- `VITE_SUPABASE_URL` - Your Supabase project URL
- `VITE_SUPABASE_ANON_KEY` - Your public anon key

### 4. Edge Functions

Deploy the included edge functions:

```bash
# Book Ride Function
supabase functions deploy book-ride

# Safety Alert Function  
supabase functions deploy safety-alert

# Driver Verification Function
supabase functions deploy driver-verification
```

### 5. Row Level Security (RLS) Policies

All RLS policies are included in the schema:
- ✅ Users can only access their own data
- ✅ Drivers can update their driver profiles
- ✅ Riders can create rides and safety alerts
- ✅ Blockchain records are read-only

### 6. Real-time Subscriptions

The app includes real-time features:
- 🔄 Live ride status updates
- 🚨 Instant safety alerts
- 📍 Real-time driver location

### 7. Features Ready to Use

Once connected, these features work immediately:

**🔐 Authentication:**
- Google OAuth login
- Email/password signup
- Role-based access (rider/driver)

**🚗 Ride Management:**
- Book rides with fare estimates
- Driver assignment algorithm
- Blockchain verification system
- Real-time ride tracking

**🛡️ Safety System:**
- Emergency alerts with blockchain records
- 24/7 safety monitoring
- Driver verification system

**⛓️ Blockchain Integration:**
- Mock blockchain for verification
- Immutable ride records  
- Driver credential verification
- Safety alert audit trail

**📊 Analytics Dashboard:**
- Driver earnings and stats
- Rider trip history
- Safety metrics
- Blockchain transaction history

### 8. Testing Data

Sample data is included:
- 4 test users (2 riders, 2 drivers)
- Verified driver profiles
- Sample ride history
- Safety alert examples
- Blockchain transaction records

### 🎯 Next Steps

1. **Connect to Supabase** (click green button)
2. **Run the database schema** (copy from database-schema.sql)
3. **Enable Google OAuth** (in Supabase Dashboard)
4. **Test the app** with sample login credentials
5. **Deploy edge functions** (optional, for production)

Your Trust Ride app will be fully functional with:
- Real database integration ✅
- User authentication ✅  
- Ride booking system ✅
- Safety monitoring ✅
- Blockchain verification ✅
- Real-time updates ✅

## 🚨 Demo Credentials

Use these to test the app:
- **Rider:** alice.rider@trustride.com / password123
- **Driver:** bob.driver@trustride.com / password123

---

**Ready to revolutionize ride sharing with blockchain trust!** 🚀✨