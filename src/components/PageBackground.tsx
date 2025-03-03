
import React from 'react';
import { useLocation } from 'react-router-dom';

interface PageBackgroundProps {
  children: React.ReactNode;
}

const PageBackground = ({ children }: PageBackgroundProps) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className="min-h-screen relative">
      {isHomePage && (
        <div className="absolute inset-0 z-0">
          <img 
            src="/lovable-uploads/f1280cb4-ee4b-4667-9be4-70571e643081.png" 
            alt="Background" 
            className="w-full h-full object-cover"
          />
        </div>
      )}
      
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default PageBackground;
