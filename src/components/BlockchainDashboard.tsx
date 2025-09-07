import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Blocks, Shield, Car, AlertTriangle, CheckCircle, Search } from "lucide-react";

export const BlockchainDashboard = () => {
  const blockchainRecords = [
    {
      id: "0xabc123def456...",
      type: "Driver Verification",
      driver: "John Doe",
      timestamp: "2024-01-15 14:30",
      status: "verified",
      details: "License #DL123456 verified on blockchain"
    },
    {
      id: "0xdef456ghi789...",
      type: "Ride Completion",
      from: "Connaught Place",
      to: "IGI Airport",
      timestamp: "2024-01-15 16:45",
      status: "completed",
      details: "Ride completed successfully, payment processed"
    },
    {
      id: "0xghi789jkl012...",
      type: "Safety Alert",
      rider: "Sarah Johnson",
      timestamp: "2024-01-15 12:15",
      status: "resolved",
      details: "Emergency alert triggered and resolved"
    },
    {
      id: "0xjkl012mno345...",
      type: "Vehicle Registration",
      vehicle: "Toyota Camry - DL4CAB1234",
      timestamp: "2024-01-14 10:20",
      status: "verified",
      details: "Vehicle registration and insurance verified"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'verified':
      case 'completed':
        return 'text-safety border-safety bg-safety-light';
      case 'resolved':
        return 'text-primary border-primary bg-accent';
      default:
        return 'text-muted-foreground';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Driver Verification':
        return <Shield className="h-4 w-4" />;
      case 'Ride Completion':
        return <Car className="h-4 w-4" />;
      case 'Safety Alert':
        return <AlertTriangle className="h-4 w-4" />;
      case 'Vehicle Registration':
        return <CheckCircle className="h-4 w-4" />;
      default:
        return <Blocks className="h-4 w-4" />;
    }
  };

  return (
    <div className="space-y-6 p-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold flex items-center">
            <Blocks className="h-8 w-8 mr-3 text-primary" />
            Blockchain Dashboard
          </h1>
          <p className="text-muted-foreground mt-1">Immutable records of all Trust Ride activities</p>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="shadow-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center">
              <Shield className="h-5 w-5 text-safety mr-2" />
              Verified Drivers
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-safety">2,547</div>
            <p className="text-sm text-muted-foreground">On blockchain</p>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center">
              <Car className="h-5 w-5 text-primary mr-2" />
              Completed Rides
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-primary">15,823</div>
            <p className="text-sm text-muted-foreground">Blockchain secured</p>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center">
              <AlertTriangle className="h-5 w-5 text-warning mr-2" />
              Safety Alerts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-warning">127</div>
            <p className="text-sm text-muted-foreground">All resolved</p>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center">
              <Blocks className="h-5 w-5 text-primary mr-2" />
              Total Records
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">18,497</div>
            <p className="text-sm text-muted-foreground">Immutable entries</p>
          </CardContent>
        </Card>
      </div>

      {/* Search & Filter */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Search className="h-5 w-5 mr-2" />
            Search Blockchain Records
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-4">
            <Input 
              placeholder="Search by transaction hash, driver ID, or ride ID..." 
              className="flex-1"
            />
            <Button>
              <Search className="h-4 w-4 mr-2" />
              Search
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Recent Blockchain Records */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle>Recent Blockchain Transactions</CardTitle>
          <p className="text-sm text-muted-foreground">Latest verified records on the Trust Ride blockchain</p>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {blockchainRecords.map((record) => (
              <div key={record.id} className="p-4 border border-border rounded-lg hover:bg-accent/20 transition-colors">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-primary/10 rounded-full">
                      {getTypeIcon(record.type)}
                    </div>
                    <div>
                      <h3 className="font-semibold">{record.type}</h3>
                      <p className="text-sm text-muted-foreground font-mono">{record.id}</p>
                    </div>
                  </div>
                  <Badge className={getStatusColor(record.status)}>
                    {record.status}
                  </Badge>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground mb-1">Details:</p>
                    <p>{record.details}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground mb-1">Timestamp:</p>
                    <p>{record.timestamp}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Blockchain Info */}
      <Card className="shadow-trust border-primary/20 bg-gradient-to-r from-accent to-primary/5">
        <CardContent className="p-6">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-primary/10 rounded-full">
              <Blocks className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Blockchain Network Status</h3>
              <p className="text-muted-foreground">Connected to Trust Ride Blockchain • Latest Block: #847,239</p>
              <div className="flex items-center space-x-4 mt-2 text-sm">
                <span className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-safety mr-1" />
                  Network Active
                </span>
                <span className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-safety mr-1" />
                  99.9% Uptime
                </span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};