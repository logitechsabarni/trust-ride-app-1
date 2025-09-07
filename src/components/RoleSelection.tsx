import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Car, Users, Shield, CheckCircle } from "lucide-react";

interface RoleSelectionProps {
  onRoleSelect: (role: 'rider' | 'driver') => void;
}

export const RoleSelection = ({ onRoleSelect }: RoleSelectionProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-accent flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Shield className="h-12 w-12 text-primary" />
          </div>
          <h1 className="text-4xl font-bold mb-4">Welcome to Trust Ride</h1>
          <p className="text-lg text-muted-foreground">Choose your role to get started</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Rider Card */}
          <Card className="relative group hover:shadow-trust transition-all duration-300 cursor-pointer border-2 hover:border-primary/20"
                onClick={() => onRoleSelect('rider')}>
            <CardHeader className="text-center pb-4">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-primary/10 rounded-full">
                  <Users className="h-8 w-8 text-primary" />
                </div>
              </div>
              <CardTitle className="text-2xl">I'm a Rider</CardTitle>
              <p className="text-muted-foreground">Book verified, safe rides</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-safety" />
                  <span>Book rides with verified drivers</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-safety" />
                  <span>Real-time safety alerts</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-safety" />
                  <span>Blockchain ride verification</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-safety" />
                  <span>24/7 safety monitoring</span>
                </div>
              </div>
              <Button className="w-full mt-6" size="lg">
                Continue as Rider
              </Button>
            </CardContent>
          </Card>

          {/* Driver Card */}
          <Card className="relative group hover:shadow-trust transition-all duration-300 cursor-pointer border-2 hover:border-primary/20"
                onClick={() => onRoleSelect('driver')}>
            <CardHeader className="text-center pb-4">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-safety/10 rounded-full">
                  <Car className="h-8 w-8 text-safety" />
                </div>
              </div>
              <CardTitle className="text-2xl">I'm a Driver</CardTitle>
              <p className="text-muted-foreground">Earn with verified credentials</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-safety" />
                  <span>Get verified on blockchain</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-safety" />
                  <span>Higher earnings with trust</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-safety" />
                  <span>Safety protection features</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-safety" />
                  <span>Professional driver tools</span>
                </div>
              </div>
              <Button className="w-full mt-6" size="lg" variant="outline">
                Continue as Driver
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};