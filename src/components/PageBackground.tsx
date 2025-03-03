
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
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
          <img 
            src="/lovable-uploads/photo-1461749280684-dccba630e2f6.jpg" 
            alt="Coding background" 
            className="w-full h-full object-cover opacity-30"
          />
        </div>
      )}
      
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute left-0 top-0 w-full h-full opacity-5">
          {/* Decorative elements */}
          <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-jmd-orange/10 blur-3xl"></div>
          <div className="absolute bottom-40 right-10 w-80 h-80 rounded-full bg-jmd-orange/10 blur-3xl"></div>
        </div>
      </div>
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default PageBackground;
