import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Car, Users, Shield, TrendingUp, CheckCircle, Clock, Star } from "lucide-react";

export const DriverDashboard = () => {
  const todayEarnings = 1250;
  const weeklyEarnings = 8750;
  const completedRides = 15;
  const rating = 4.8;

  return (
    <div className="space-y-6 p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Driver Dashboard</h1>
        <div className="flex space-x-3">
          <Button variant="outline">
            <Shield className="h-4 w-4 mr-2" />
            Verification Status
          </Button>
          <Button className="bg-gradient-to-r from-safety to-safety">
            <Car className="h-4 w-4 mr-2" />
            Go Online
          </Button>
        </div>
      </div>

      {/* Driver Status Card */}
      <Card className="shadow-trust border-safety/20 bg-gradient-to-r from-safety-light to-accent">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-semibold text-safety">Verified Driver</h3>
              <p className="text-safety/80">Blockchain ID: 0xdriver123...</p>
            </div>
            <Badge className="bg-safety text-safety-foreground">
              <CheckCircle className="h-4 w-4 mr-1" />
              Verified
            </Badge>
          </div>
        </CardContent>
      </Card>

      {/* Earnings & Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="shadow-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center">
              <TrendingUp className="h-5 w-5 text-primary mr-2" />
              Today
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-primary">₹{todayEarnings}</div>
            <p className="text-sm text-muted-foreground">+18% from yesterday</p>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center">
              <Car className="h-5 w-5 text-safety mr-2" />
              Rides
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-safety">{completedRides}</div>
            <p className="text-sm text-muted-foreground">Completed today</p>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center">
              <Star className="h-5 w-5 text-warning mr-2" />
              Rating
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-warning">{rating}</div>
            <p className="text-sm text-muted-foreground">Average rating</p>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center">
              <Clock className="h-5 w-5 text-primary mr-2" />
              Hours
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">8.5</div>
            <p className="text-sm text-muted-foreground">Online hours</p>
          </CardContent>
        </Card>
      </div>

      {/* Weekly Performance */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle>Weekly Performance</CardTitle>
          <p className="text-sm text-muted-foreground">₹{weeklyEarnings} earned this week</p>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>Earnings Goal</span>
                <span>₹{weeklyEarnings} / ₹10,000</span>
              </div>
              <Progress value={(weeklyEarnings / 10000) * 100} className="h-2" />
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>Safety Score</span>
                <span>98%</span>
              </div>
              <Progress value={98} className="h-2" />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Users className="h-5 w-5 mr-2" />
              Recent Rides
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { passenger: "Sarah Johnson", route: "CP → Airport", earnings: "₹450", rating: 5 },
                { passenger: "Mike Chen", route: "Metro → Mall", earnings: "₹180", rating: 5 },
                { passenger: "Lisa Davis", route: "Home → Office", earnings: "₹220", rating: 4 },
              ].map((ride, index) => (
                <div key={index} className="flex items-center justify-between p-3 border border-border rounded-lg">
                  <div>
                    <p className="font-medium">{ride.passenger}</p>
                    <p className="text-sm text-muted-foreground">{ride.route}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-safety">{ride.earnings}</p>
                    <div className="flex items-center">
                      <Star className="h-3 w-3 text-warning mr-1 fill-current" />
                      <span className="text-xs">{ride.rating}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Shield className="h-5 w-5 mr-2" />
              Blockchain Verification
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-safety-light rounded-lg border border-safety/20">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-safety" />
                  <div>
                    <p className="font-medium">License Verified</p>
                    <p className="text-xs text-muted-foreground font-mono">0xlic789...</p>
                  </div>
                </div>
                <Badge className="bg-safety text-safety-foreground">Active</Badge>
              </div>
              <div className="flex items-center justify-between p-3 bg-safety-light rounded-lg border border-safety/20">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-safety" />
                  <div>
                    <p className="font-medium">Vehicle Registered</p>
                    <p className="text-xs text-muted-foreground font-mono">0xcar456...</p>
                  </div>
                </div>
                <Badge className="bg-safety text-safety-foreground">Active</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};