
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <Link to="/" className="flex items-center mb-6">
              <img 
                src="/lovable-uploads/15039621-9358-4486-bb60-08e9d6a96148.png" 
                alt="MASTER Panel Logo" 
                className="h-10"
              />
            </Link>
            <p className="text-gray-400 mb-6">
              Your one-stop solution for all your B2B business needs in the gaming industry.
            </p>
            
            {/* Highlighted sections */}
            <div className="mt-8 bg-gray-900 p-4 rounded-lg border-l-4 border-jmd-orange mb-6">
              <p className="text-white font-semibold mb-1">WE ARE ALSO DEALING AND PROVIDING IN CUTTING IDS</p>
              <p className="text-white font-semibold mb-1">MONDAY TO MONDAY SETTLING</p>
              <p className="text-white font-semibold mb-1">AND ALSO PROVIDE CLIENT ID WITH BEST WITHDRAW SERVICE</p>
              <p className="text-jmd-orange font-bold">+443333034340</p>
            </div>
            
            <div className="bg-gray-900 p-4 rounded-lg border-l-4 border-jmd-orange">
              <p className="text-white font-semibold mb-1">WE ARE ALSO DEALING IN UK NUMBERS FOR YOUR BETTING BUSINESS</p>
              <p className="text-white font-semibold mb-1">LIKE VIP AND EXTRA ORDINARY NUMBER FOR YOUR SITE</p>
              <p className="text-white font-semibold mb-1">CONTACT FOR MORE INFORMATION</p>
              <p className="text-jmd-orange font-bold">+443333034340</p>
            </div>
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
