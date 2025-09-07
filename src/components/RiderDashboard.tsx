import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Car, MapPin, Clock, Shield, AlertTriangle, CheckCircle } from "lucide-react";

export const RiderDashboard = () => {
  const recentRides = [
    {
      id: 1,
      from: "Connaught Place",
      to: "IGI Airport",
      date: "Today, 2:30 PM",
      driver: "John Doe",
      status: "completed",
      blockchainHash: "0xabc123...",
      fare: "₹450"
    },
    {
      id: 2,
      from: "CP Metro Station",
      to: "India Gate",
      date: "Yesterday, 6:15 PM",
      driver: "Sarah Smith",
      status: "completed",
      blockchainHash: "0xdef456...",
      fare: "₹180"
    }
  ];

  return (
    <div className="space-y-6 p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Rider Dashboard</h1>
        <Button className="bg-gradient-to-r from-primary to-primary-hover">
          <Car className="h-4 w-4 mr-2" />
          Book New Ride
        </Button>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="shadow-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center">
              <CheckCircle className="h-5 w-5 text-safety mr-2" />
              Total Rides
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-primary">24</div>
            <p className="text-sm text-muted-foreground">All verified on blockchain</p>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center">
              <Shield className="h-5 w-5 text-primary mr-2" />
              Safety Score
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-safety">98%</div>
            <p className="text-sm text-muted-foreground">Excellent safety rating</p>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center">
              <Clock className="h-5 w-5 text-warning mr-2" />
              This Month
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">₹2,340</div>
            <p className="text-sm text-muted-foreground">Total spent</p>
          </CardContent>
        </Card>
      </div>

      {/* Recent Rides */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Car className="h-5 w-5 mr-2" />
            Recent Rides
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentRides.map((ride) => (
              <div key={ride.id} className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-accent/20 transition-colors">
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-primary/10 rounded-full">
                    <MapPin className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">{ride.from} → {ride.to}</p>
                    <p className="text-sm text-muted-foreground">{ride.date} • Driver: {ride.driver}</p>
                  </div>
                </div>
                <div className="text-right space-y-1">
                  <p className="font-medium">{ride.fare}</p>
                  <div className="flex items-center space-x-2">
                    <Badge variant="outline" className="text-safety border-safety">
                      <Shield className="h-3 w-3 mr-1" />
                      Verified
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground font-mono">
                    {ride.blockchainHash}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Emergency Actions */}
      <Card className="shadow-card border-warning/20 bg-warning-light">
        <CardHeader>
          <CardTitle className="flex items-center text-warning">
            <AlertTriangle className="h-5 w-5 mr-2" />
            Emergency & Safety
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Button variant="outline" className="border-warning text-warning hover:bg-warning hover:text-warning-foreground">
              <AlertTriangle className="h-4 w-4 mr-2" />
              Emergency Alert
            </Button>
            <Button variant="outline" className="border-primary">
              <Shield className="h-4 w-4 mr-2" />
              Safety Center
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};