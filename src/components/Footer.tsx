
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <Link to="/" className="flex items-center mb-6">
              <span className="text-white font-heading font-bold text-2xl">
                <span className="text-white">MASTER</span>
                <span className="text-jmd-orange">PANEL</span>
              </span>
            </Link>
            <p className="text-gray-400 mb-6">
              Your one-stop solution for all your B2B business needs in the gaming industry.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/b2b-panel" className="text-gray-400 hover:text-jmd-orange transition-colors">
                  B2B Panel
                </Link>
              </li>
              <li>
                <Link to="/whitelabels" className="text-gray-400 hover:text-jmd-orange transition-colors">
                  Whitelabels
                </Link>
              </li>
              <li>
                <Link to="/our-services" className="text-gray-400 hover:text-jmd-orange transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/contact-us" className="text-gray-400 hover:text-jmd-orange transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Contact Details</h3>
            <ul className="space-y-4">
              <li className="flex items-center text-gray-400">
                <span className="mr-2">✉️</span>
                <a href="mailto:masterpanel247@gmail.com" className="hover:text-jmd-orange transition-colors">
                  masterpanel247@gmail.com
                </a>
              </li>
              <li className="flex items-center text-gray-400">
                <span className="mr-2">📱</span>
                <a href="https://wa.me/443333034340" className="hover:text-jmd-orange transition-colors" target="_blank" rel="noopener noreferrer">
                  +44 3333034340
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            Warning: Here is not involved any kind of real money, this site is about only education purpose. This Platform only for 18+ Years
          </p>
          <p className="text-gray-500 text-sm mt-4">
            Copyright © 2018-{currentYear} Masterpanel.com. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
