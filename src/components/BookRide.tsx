import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Users, Shield, Car, CreditCard } from "lucide-react";

export const BookRide = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [rideType, setRideType] = useState("standard");

  const estimatedFare = pickup && destination ? "₹285" : "--";
  const estimatedTime = pickup && destination ? "15 min" : "--";

  const rideOptions = [
    {
      id: "standard",
      name: "Trust Ride",
      description: "Verified driver, blockchain secured",
      price: "₹285",
      time: "15 min",
      icon: Shield,
      features: ["Verified Driver", "Blockchain Secured", "GPS Tracking"]
    },
    {
      id: "premium",
      name: "Trust Premium",
      description: "Premium vehicles, enhanced safety",
      price: "₹420",
      time: "12 min",
      icon: Car,
      features: ["Premium Vehicle", "Priority Support", "Enhanced Safety"]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">Book Your Trusted Ride</h1>
        <p className="text-muted-foreground">Secure, verified, and blockchain-protected journeys</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Booking Form */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                Trip Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="pickup">Pickup Location</Label>
                <Input
                  id="pickup"
                  placeholder="Enter pickup location"
                  value={pickup}
                  onChange={(e) => setPickup(e.target.value)}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="destination">Destination</Label>
                <Input
                  id="destination"
                  placeholder="Where to?"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="mt-1"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="date">Date</Label>
                  <Input
                    id="date"
                    type="date"
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="time">Time</Label>
                  <Input
                    id="time"
                    type="time"
                    className="mt-1"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Ride Options */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Choose Your Ride</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {rideOptions.map((option) => {
                  const Icon = option.icon;
                  return (
                    <div
                      key={option.id}
                      className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                        rideType === option.id
                          ? 'border-primary bg-accent/20'
                          : 'border-border hover:border-primary/50'
                      }`}
                      onClick={() => setRideType(option.id)}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="p-2 bg-primary/10 rounded-full">
                            <Icon className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold">{option.name}</h3>
                            <p className="text-sm text-muted-foreground">{option.description}</p>
                            <div className="flex space-x-2 mt-2">
                              {option.features.map((feature) => (
                                <Badge key={feature} variant="outline" className="text-xs">
                                  {feature}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-lg font-semibold text-primary">{option.price}</p>
                          <p className="text-sm text-muted-foreground">{option.time}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Booking Summary */}
        <div className="space-y-6">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center">
                <CreditCard className="h-5 w-5 mr-2" />
                Trip Summary
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Fare Estimate</span>
                  <span className="font-semibold">{estimatedFare}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Estimated Time</span>
                  <span className="font-semibold">{estimatedTime}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Safety Fee</span>
                  <span className="text-safety font-semibold">Free</span>
                </div>
                <hr className="border-border" />
                <div className="flex justify-between text-lg">
                  <span className="font-semibold">Total</span>
                  <span className="font-bold text-primary">{estimatedFare}</span>
                </div>
              </div>

              <Button 
                className="w-full bg-gradient-to-r from-primary to-primary-hover shadow-trust"
                size="lg"
                disabled={!pickup || !destination}
              >
                Book Trusted Ride
              </Button>

              <div className="space-y-2 pt-4">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Shield className="h-4 w-4 text-safety" />
                  <span>Blockchain verified driver</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Users className="h-4 w-4 text-primary" />
                  <span>24/7 safety monitoring</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4 text-warning" />
                  <span>Real-time trip tracking</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Safety Features */}
          <Card className="shadow-safety border-safety/20 bg-safety-light">
            <CardHeader>
              <CardTitle className="flex items-center text-safety">
                <Shield className="h-5 w-5 mr-2" />
                Safety First
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm">
                <p>• Driver identity verified on blockchain</p>
                <p>• Real-time GPS tracking shared</p>
                <p>• Emergency alert system enabled</p>
                <p>• 24/7 support available</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};