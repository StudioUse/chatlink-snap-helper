
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
    <div className="hero-gradient min-h-screen flex items-center justify-center py-24 px-4">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex flex-col items-center space-y-10 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight">
              <span className="text-jmd-gold">{title.split(' ')[0]}</span>{' '}
              {title.split(' ').slice(1).join(' ')}
            </h1>
            
            {subtitle && (
              <p className="text-2xl md:text-4xl font-heading font-bold text-white">
                {subtitle}
              </p>
            )}
            
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 mt-8">
              {cta && (
                <Link to={cta.link} className="btn-primary">
                  {cta.text}
                </Link>
              )}
              
              {secondaryCta && (
                <Link to={secondaryCta.link} className="btn-secondary">
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
