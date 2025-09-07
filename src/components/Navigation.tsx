import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Shield, Car, Users, AlertTriangle, Blocks } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavigationProps {
  currentPage?: string;
  onPageChange?: (page: string) => void;
}

export const Navigation = ({ currentPage = "home", onPageChange }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home", icon: Shield },
    { id: "book", label: "Book Ride", icon: Car },
    { id: "dashboard", label: "Dashboard", icon: Users },
    { id: "blockchain", label: "Blockchain", icon: Blocks },
    { id: "safety", label: "Safety", icon: AlertTriangle },
  ];

  return (
    <nav className="bg-card border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center space-x-2">
              <Shield className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-primary-hover bg-clip-text text-transparent">
                Trust Ride
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map(({ id, label, icon: Icon }) => (
              <Button
                key={id}
                variant={currentPage === id ? "default" : "ghost"}
                size="sm"
                onClick={() => onPageChange?.(id)}
                className="flex items-center space-x-2"
              >
                <Icon className="h-4 w-4" />
                <span>{label}</span>
              </Button>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 border-t border-border">
              {navItems.map(({ id, label, icon: Icon }) => (
                <Button
                  key={id}
                  variant={currentPage === id ? "default" : "ghost"}
                  size="sm"
                  onClick={() => {
                    onPageChange?.(id);
                    setIsOpen(false);
                  }}
                  className="w-full justify-start"
                >
                  <Icon className="h-4 w-4 mr-2" />
                  {label}
                </Button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};