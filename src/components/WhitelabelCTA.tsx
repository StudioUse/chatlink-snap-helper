
import { Link } from 'react-router-dom';

const WhitelabelCTA = () => {
  return (
    <div className="py-16 bg-jmd-black">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <Link 
              to="/whitelabels" 
              className="inline-block px-8 py-4 bg-jmd-orange rounded-full text-white font-bold text-lg transition-all duration-300 hover:bg-opacity-90"
            >
              AAJ HI APNA WHITELABLE BANWAIN
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhitelabelCTA;
