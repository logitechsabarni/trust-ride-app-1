import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { AlertTriangle, Shield, Phone, MessageSquare, Clock, CheckCircle, Users, MapPin } from "lucide-react";

export const SafetyCenter = () => {
  const [alertMessage, setAlertMessage] = useState("");
  
  const safetyAlerts = [
    {
      id: 1,
      type: "Emergency Alert",
      rider: "Sarah Johnson",
      location: "MG Road, Sector 14",
      timestamp: "2024-01-15 14:30",
      status: "resolved",
      message: "Panic button pressed during ride",
      response: "Emergency services contacted, rider safe"
    },
    {
      id: 2,
      type: "Route Deviation",
      rider: "Mike Chen",
      location: "Connaught Place",
      timestamp: "2024-01-15 12:45",
      status: "monitoring",
      message: "Driver took unexpected route",
      response: "Monitoring situation, rider contacted"
    },
    {
      id: 3,
      type: "Speed Alert",
      rider: "Lisa Davis",
      location: "Airport Express Highway",
      timestamp: "2024-01-15 11:20",
      status: "resolved",
      message: "Vehicle exceeding speed limit",
      response: "Driver warned and complied"
    }
  ];

  const handleEmergencyAlert = () => {
    // In real app, this would trigger emergency protocols
    console.log("Emergency alert triggered!");
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'resolved':
        return 'text-safety border-safety bg-safety-light';
      case 'monitoring':
        return 'text-warning border-warning bg-warning-light';
      case 'emergency':
        return 'text-destructive border-destructive bg-destructive/10';
      default:
        return 'text-muted-foreground';
    }
  };

  return (
    <div className="space-y-6 p-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold flex items-center">
            <Shield className="h-8 w-8 mr-3 text-primary" />
            Safety Center
          </h1>
          <p className="text-muted-foreground mt-1">Your safety is our top priority</p>
        </div>
      </div>

      {/* Emergency Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="shadow-card border-destructive/20 bg-destructive/5">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center text-destructive">
              <AlertTriangle className="h-5 w-5 mr-2" />
              Emergency Alert
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm mb-4">Press in case of immediate danger or emergency</p>
            <Button 
              className="w-full bg-destructive hover:bg-destructive/90"
              size="lg"
              onClick={handleEmergencyAlert}
            >
              <AlertTriangle className="h-4 w-4 mr-2" />
              EMERGENCY
            </Button>
          </CardContent>
        </Card>

        <Card className="shadow-card border-primary/20">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center text-primary">
              <Phone className="h-5 w-5 mr-2" />
              24/7 Support
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm mb-4">Connect with our safety team anytime</p>
            <Button variant="outline" className="w-full" size="lg">
              <Phone className="h-4 w-4 mr-2" />
              Call Support
            </Button>
          </CardContent>
        </Card>

        <Card className="shadow-card border-safety/20">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center text-safety">
              <MessageSquare className="h-5 w-5 mr-2" />
              Report Issue
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm mb-4">Report safety concerns or incidents</p>
            <Button variant="outline" className="w-full" size="lg">
              <MessageSquare className="h-4 w-4 mr-2" />
              Report
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Safety Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="shadow-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center">
              <Shield className="h-5 w-5 text-safety mr-2" />
              Response Time
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-safety">&lt; 2 min</div>
            <p className="text-sm text-muted-foreground">Average emergency response</p>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center">
              <CheckCircle className="h-5 w-5 text-primary mr-2" />
              Resolution Rate
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-primary">99.8%</div>
            <p className="text-sm text-muted-foreground">Issues resolved successfully</p>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center">
              <Users className="h-5 w-5 text-warning mr-2" />
              Safety Score
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-warning">4.9/5</div>
            <p className="text-sm text-muted-foreground">User safety rating</p>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center">
              <Clock className="h-5 w-5 text-primary mr-2" />
              Monitoring
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">24/7</div>
            <p className="text-sm text-muted-foreground">Continuous safety monitoring</p>
          </CardContent>
        </Card>
      </div>

      {/* Report Safety Concern */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center">
            <MessageSquare className="h-5 w-5 mr-2" />
            Report Safety Concern
          </CardTitle>
          <p className="text-sm text-muted-foreground">Help us maintain a safe environment for everyone</p>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Textarea
              placeholder="Describe the safety concern or incident..."
              value={alertMessage}
              onChange={(e) => setAlertMessage(e.target.value)}
              rows={4}
            />
            <div className="flex space-x-3">
              <Button className="flex-1">
                <MessageSquare className="h-4 w-4 mr-2" />
                Submit Report
              </Button>
              <Button variant="outline">
                <Phone className="h-4 w-4 mr-2" />
                Call Instead
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Recent Safety Alerts */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle>Recent Safety Activities</CardTitle>
          <p className="text-sm text-muted-foreground">Latest safety alerts and responses</p>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {safetyAlerts.map((alert) => (
              <div key={alert.id} className="p-4 border border-border rounded-lg hover:bg-accent/20 transition-colors">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-warning/10 rounded-full">
                      <AlertTriangle className="h-4 w-4 text-warning" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{alert.type}</h3>
                      <p className="text-sm text-muted-foreground flex items-center">
                        <Users className="h-3 w-3 mr-1" />
                        {alert.rider} • 
                        <MapPin className="h-3 w-3 ml-1 mr-1" />
                        {alert.location}
                      </p>
                    </div>
                  </div>
                  <Badge className={getStatusColor(alert.status)}>
                    {alert.status}
                  </Badge>
                </div>
                
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="font-medium">Issue: </span>
                    <span>{alert.message}</span>
                  </div>
                  <div>
                    <span className="font-medium">Response: </span>
                    <span>{alert.response}</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Clock className="h-3 w-3 mr-1" />
                    {alert.timestamp}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Safety Tips */}
      <Card className="shadow-safety border-safety/20 bg-gradient-to-r from-safety-light to-accent">
        <CardHeader>
          <CardTitle className="flex items-center text-safety">
            <Shield className="h-5 w-5 mr-2" />
            Safety Tips
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div className="space-y-2">
              <p>• Always verify driver identity before entering vehicle</p>
              <p>• Share your trip details with trusted contacts</p>
              <p>• Trust your instincts - report any concerns immediately</p>
            </div>
            <div className="space-y-2">
              <p>• Keep emergency contacts easily accessible</p>
              <p>• Stay alert during your ride</p>
              <p>• Use the in-app safety features regularly</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};