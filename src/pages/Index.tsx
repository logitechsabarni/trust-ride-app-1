import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { RoleSelection } from "@/components/RoleSelection";
import { RiderDashboard } from "@/components/RiderDashboard";
import { DriverDashboard } from "@/components/DriverDashboard";
import { BookRide } from "@/components/BookRide";
import { BlockchainDashboard } from "@/components/BlockchainDashboard";
import { SafetyCenter } from "@/components/SafetyCenter";

type UserRole = 'rider' | 'driver' | null;
type CurrentPage = 'home' | 'roleSelection' | 'dashboard' | 'book' | 'blockchain' | 'safety';

const Index = () => {
  const [currentPage, setCurrentPage] = useState<CurrentPage>('home');
  const [userRole, setUserRole] = useState<UserRole>(null);

  const handleGetStarted = () => {
    setCurrentPage('roleSelection');
  };

  const handleRoleSelect = (role: UserRole) => {
    setUserRole(role);
    setCurrentPage('dashboard');
  };

  const handlePageChange = (page: string) => {
    setCurrentPage(page as CurrentPage);
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HeroSection onGetStarted={handleGetStarted} />;
      case 'roleSelection':
        return <RoleSelection onRoleSelect={handleRoleSelect} />;
      case 'dashboard':
        return userRole === 'driver' ? <DriverDashboard /> : <RiderDashboard />;
      case 'book':
        return <BookRide />;
      case 'blockchain':
        return <BlockchainDashboard />;
      case 'safety':
        return <SafetyCenter />;
      default:
        return <HeroSection onGetStarted={handleGetStarted} />;
    }
  };

  const showNavigation = currentPage !== 'home' && currentPage !== 'roleSelection';

  return (
    <div className="min-h-screen bg-background">
      {showNavigation && (
        <Navigation 
          currentPage={currentPage} 
          onPageChange={handlePageChange}
        />
      )}
      {renderCurrentPage()}
    </div>
  );
};

export default Index;
