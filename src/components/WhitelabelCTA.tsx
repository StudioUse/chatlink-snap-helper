
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const WhitelabelCTA = () => {
  return (
    <div className="py-16 bg-gradient-to-r from-jmd-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block"
            >
              <Link 
                to="/whitelabels" 
                className="group inline-block px-10 py-5 bg-gradient-to-r from-jmd-orange to-amber-500 rounded-full text-white font-bold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-jmd-orange/30 relative overflow-hidden"
              >
                <span className="relative z-10">AAJ HI APNA WHITELABLE BANWAIN</span>
                <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhitelabelCTA;
