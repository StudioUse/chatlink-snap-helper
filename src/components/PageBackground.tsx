
import React from 'react';

interface PageBackgroundProps {
  children: React.ReactNode;
}

const PageBackground = ({ children }: PageBackgroundProps) => {
  return (
    <div className="min-h-screen relative">
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
