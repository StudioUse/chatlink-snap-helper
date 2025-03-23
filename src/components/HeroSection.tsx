
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
    <div className="min-h-screen flex items-center justify-start pt-24 pb-32 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto">
        <div className="flex flex-col space-y-12">
          {/* B2B button at the top */}
          <div className="flex flex-row gap-6">
            <Link 
              to="/b2b-panel" 
              className="px-8 py-3 bg-jmd-orange rounded-md text-white font-bold text-lg uppercase transition-all duration-300 hover:bg-opacity-90"
            >
              B2B SITES
            </Link>
          </div>
          
          {/* Main heading */}
          <div className="max-w-4xl">
            <h1 className="text-6xl md:text-7xl font-bold">
              <div className="text-jmd-orange font-display tracking-wide mb-2">BOOK CHALAIN</div>
              <div className="text-white font-display tracking-wide">PAISA KAMAIN</div>
            </h1>
          </div>
          
          {/* WhiteLabel CTA button */}
          <div className="mt-8">
            <Link 
              to="/whitelabels" 
              className="inline-block px-10 py-4 bg-jmd-orange rounded-full text-white font-bold text-xl uppercase transition-all duration-300 hover:bg-opacity-90"
            >
              AAJ HI APNA WHITELABLE BANWAIN
            </Link>
          </div>
          
          {/* Contact and Services buttons */}
          <div className="flex flex-row gap-6">
            {cta && (
              <Link 
                to={cta.link} 
                className="px-10 py-4 bg-jmd-orange rounded-md text-white font-bold text-lg uppercase transition-all duration-300 hover:bg-opacity-90"
              >
                {cta.text}
              </Link>
            )}
            
            {secondaryCta && (
              <Link 
                to={secondaryCta.link} 
                className="px-10 py-4 bg-jmd-orange rounded-md text-white font-bold text-lg uppercase transition-all duration-300 hover:bg-opacity-90"
              >
                {secondaryCta.text}
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
