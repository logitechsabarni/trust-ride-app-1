import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Shield, CheckCircle, Clock, Users } from "lucide-react";
import heroImage from "@/assets/hero-trust-ride.jpg";

interface HeroSectionProps {
  onGetStarted: () => void;
}

export const HeroSection = ({ onGetStarted }: HeroSectionProps) => {
  return (
    <div className="relative bg-gradient-to-br from-background to-accent min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-primary to-primary-hover bg-clip-text text-transparent">
                  Trust Ride
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Verified Safety Rides
              </p>
              <p className="text-lg text-muted-foreground max-w-xl">
                Your ride, your trust, your safety. Experience the future of transportation with blockchain-verified rides and driver authentication.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-primary-hover shadow-trust"
                onClick={onGetStarted}
              >
                Get Started
              </Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 gap-4 pt-8">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-safety" />
                <span className="text-sm font-medium">Verified Drivers</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">Blockchain Security</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-warning" />
                <span className="text-sm font-medium">24/7 Safety</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">Trusted Community</span>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <Card className="overflow-hidden shadow-trust">
              <img 
                src={heroImage} 
                alt="Trust Ride - Secure transportation" 
                className="w-full h-auto rounded-lg"
              />
            </Card>
            
            {/* Floating Trust Badge */}
            <Card className="absolute -bottom-4 -left-4 p-4 shadow-safety bg-safety-light border-safety/20">
              <div className="flex items-center space-x-3">
                <Shield className="h-6 w-6 text-safety" />
                <div>
                  <p className="font-semibold text-safety text-sm">100% Verified</p>
                  <p className="text-xs text-safety/80">Blockchain Protected</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};