
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const NavigationButtons = () => {
  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="w-full md:w-auto"
          >
            <Link 
              to="/b2b-sites" 
              className="group w-full md:w-auto flex items-center justify-center px-10 py-3 bg-jmd-orange rounded-md text-white font-extrabold text-lg uppercase transition-all duration-300 hover:shadow-lg hover:shadow-jmd-orange/30 relative overflow-hidden"
            >
              <span className="relative z-10">B2B SITES</span>
              <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default NavigationButtons;
