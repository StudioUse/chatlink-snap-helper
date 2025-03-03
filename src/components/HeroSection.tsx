
import { Link } from 'react-router-dom';

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  cta?: {
    text: string;
    link: string;
  };
  secondaryCta?: {
    text: string;
    link: string;
  };
}

const HeroSection = ({ 
  title, 
  subtitle, 
  cta, 
  secondaryCta 
}: HeroSectionProps) => {
  return (
    <div className="cyber-hero-gradient min-h-screen flex items-center justify-center py-24 px-4">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-left">
          <div className="flex flex-col items-start space-y-8 animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-extrabold leading-tight">
              <div className="text-jmd-orange">BOOK CHALAIN</div>
              <div className="text-white">PAISA KAMAIN</div>
            </h1>
            
            {subtitle && (
              <p className="text-2xl md:text-4xl font-heading font-bold text-white">
                {subtitle}
              </p>
            )}
            
            <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6 mt-8">
              {cta && (
                <Link to={cta.link} className="px-8 py-4 bg-jmd-orange rounded-md text-white font-bold text-lg transition-all duration-300 hover:bg-opacity-90">
                  {cta.text}
                </Link>
              )}
              
              {secondaryCta && (
                <Link to={secondaryCta.link} className="px-8 py-4 bg-jmd-orange rounded-md text-white font-bold text-lg transition-all duration-300 hover:bg-opacity-90">
                  {secondaryCta.text}
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
