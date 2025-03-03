
import { Link } from 'react-router-dom';

const NavigationButtons = () => {
  return (
    <div className="py-8 bg-jmd-darkGray">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-4">
          <Link 
            to="/b2b-panel" 
            className="px-8 py-4 bg-jmd-orange rounded-md text-white font-bold text-lg transition-all duration-300 hover:bg-opacity-90"
          >
            B2B SITES
          </Link>
          <Link 
            to="/b2c-sites" 
            className="px-8 py-4 bg-jmd-orange rounded-md text-white font-bold text-lg transition-all duration-300 hover:bg-opacity-90"
          >
            B2C SITES
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavigationButtons;
