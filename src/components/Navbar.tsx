
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header 
      className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black shadow-md' : 'bg-black'
      } border-b border-jmd-orange`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between py-3">
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/15039621-9358-4486-bb60-08e9d6a96148.png" 
              alt="MASTER Panel Logo" 
              className="h-12"
            />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/b2b-panel" className={`nav-link ${isActive('/b2b-panel') ? 'active' : ''}`}>
              B2B Pannel
            </Link>
            <Link to="/whitelabels" className={`nav-link ${isActive('/whitelabels') ? 'active' : ''}`}>
              Whitelabels
            </Link>
            <Link to="/our-services" className={`nav-link ${isActive('/our-services') ? 'active' : ''}`}>
              Our Services
            </Link>
            <Link to="/contact-us" className={`nav-link ${isActive('/contact-us') ? 'active' : ''}`}>
              Contact Us
            </Link>
          </nav>
          
          <a 
            href="https://wa.me/443333034340" 
            className="hidden md:flex items-center px-5 py-2 rounded-md bg-jmd-orange text-white font-bold transition-all duration-300 hover:bg-opacity-90"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle size={18} className="mr-2" />
            +44 3333034340
          </a>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-jmd-darkGray animate-fade-in">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/b2b-panel" 
                className="text-white py-2 hover:text-jmd-orange transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                B2B Panel
              </Link>
              <Link 
                to="/whitelabels" 
                className="text-white py-2 hover:text-jmd-orange transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Whitelabels
              </Link>
              <Link 
                to="/our-services" 
                className="text-white py-2 hover:text-jmd-orange transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Our Services
              </Link>
              <Link 
                to="/contact-us" 
                className="text-white py-2 hover:text-jmd-orange transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
              <a 
                href="https://wa.me/443333034340" 
                className="py-2 px-4 bg-jmd-orange text-white rounded-md text-center flex items-center justify-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle size={18} className="mr-2" />
                +44 3333034340
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
