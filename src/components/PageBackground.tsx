
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
            src="/lovable-uploads/7a5847ed-a851-4a34-bb0c-687817d207ab.png" 
            alt="Coding background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 top-0 bg-black/50 backdrop-blur-[1px]"></div>
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
