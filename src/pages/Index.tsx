
import HeroSection from '@/components/HeroSection';
import PartnerLogos from '@/components/PartnerLogos';
import FeatureCards from '@/components/FeatureCards';
import WhatsAppButton from '@/components/WhatsAppButton';
import InstagramFeed from '@/components/InstagramFeed';
import ContactForm from '@/components/ContactForm';
import { Link } from 'react-router-dom';

const Index = () => {
  // Feature cards data
  const features = [
    {
      title: "White-Label Expertise",
      description: "Grow your brand with our customizable white-label services tailored to meet your specific business goals."
    },
    {
      title: "Proven Track Record",
      description: "With years of experience and a portfolio of satisfied clients, JMDpanel.com is a partner you can rely on for success."
    },
    {
      title: "Trusted Industry Leader",
      description: "JMDpanel.com stands as a trusted name in B2B and B2C solutions, delivering excellence and reliability to businesses of all sizes."
    },
    {
      title: "Affordable Pricing",
      description: "We provide premium services at unbeatable rates, ensuring you achieve maximum value without exceeding your budget."
    }
  ];

  return (
    <div className="min-h-screen">
      <HeroSection 
        title="BOOK CHALAIN PAISA KAMAIN"
        cta={{ text: "CONTACT US", link: "/contact-us" }}
        secondaryCta={{ text: "OUR SERVICES", link: "/our-services" }}
      />
      
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
      
      <PartnerLogos />
      
      <div className="py-16 bg-jmd-black">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-white">
            ADMIN SHARING
          </h2>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <button className="px-8 py-3 bg-jmd-orange rounded-md text-white font-bold transition-all duration-300 hover:bg-opacity-90">
              TOP SITES
            </button>
            <button className="px-8 py-3 bg-gray-800 rounded-md text-white font-bold transition-all duration-300 hover:bg-gray-700">
              DIAMOND TYPE
            </button>
            <button className="px-8 py-3 bg-gray-800 rounded-md text-white font-bold transition-all duration-300 hover:bg-gray-700">
              D247 TYPE
            </button>
            <button className="px-8 py-3 bg-gray-800 rounded-md text-white font-bold transition-all duration-300 hover:bg-gray-700">
              RADHE TYPE
            </button>
            <button className="px-8 py-3 bg-gray-800 rounded-md text-white font-bold transition-all duration-300 hover:bg-gray-700">
              WORLD TYPE
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Sharing Card 1 */}
            <div className="flex rounded-lg overflow-hidden">
              <div className="w-1/3 bg-teal-800 p-4 flex items-center justify-center">
                <p className="text-xl font-bold text-white">JMD365</p>
              </div>
              <div className="w-2/3 bg-jmd-orange p-4 text-center">
                <p className="text-xl font-bold text-white mb-2">Minimum Sharing</p>
                <p className="text-2xl font-bold text-white mb-2">0.12</p>
                <button className="px-4 py-2 bg-black rounded-md text-white font-bold transition-all duration-300 hover:bg-opacity-80">
                  JMD777.IN
                </button>
              </div>
            </div>
            
            {/* Sharing Card 2 */}
            <div className="flex rounded-lg overflow-hidden">
              <div className="w-1/3 bg-teal-800 p-4 flex items-center justify-center">
                <p className="text-xl font-bold text-white">JMD365</p>
              </div>
              <div className="w-2/3 bg-jmd-orange p-4 text-center">
                <p className="text-xl font-bold text-white mb-2">Minimum Sharing</p>
                <p className="text-2xl font-bold text-white mb-2">0.18</p>
                <button className="px-4 py-2 bg-black rounded-md text-white font-bold transition-all duration-300 hover:bg-opacity-80">
                  JMD365.IN
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="py-16 bg-jmd-black">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-white">
            OUR CASINO PARTNERS
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Casino Partner Cards */}
            <div className="h-40 bg-gray-800 rounded-lg border border-jmd-orange p-4 flex items-center justify-center animate-fade-in">
              <p className="text-xl font-bold text-white">Casino Partner 1</p>
            </div>
            <div className="h-40 bg-gray-800 rounded-lg border border-jmd-orange p-4 flex items-center justify-center animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <p className="text-xl font-bold text-white">Casino Partner 2</p>
            </div>
            <div className="h-40 bg-gray-800 rounded-lg border border-jmd-orange p-4 flex items-center justify-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <p className="text-xl font-bold text-white">Casino Partner 3</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="py-16 bg-jmd-black">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-white">
            <span className="text-jmd-orange">WHAT IS</span> BOOKIE PANEL AND HOW IT'S WORK
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-800 rounded-lg p-8">
              <p className="text-gray-300 leading-relaxed">
                A bookie panel is a sophisticated platform designed for bookmakers to manage their sports betting operations efficiently. It provides a comprehensive suite of tools for creating and managing betting markets, handling player accounts, processing transactions, and analyzing betting patterns.
              </p>
              <p className="text-gray-300 leading-relaxed mt-4">
                Our panels come with user-friendly interfaces that make it easy to set odds, manage risk, and track profits in real-time. They're built with advanced security features to protect both the bookmaker and their clients.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <FeatureCards features={features} />
      
      <div className="py-16 bg-jmd-black">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-white">
            JMD365.IN
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {/* Game category thumbnails */}
            <div className="h-32 bg-gray-800 rounded-lg overflow-hidden animate-fade-in">
              <img 
                src="/lovable-uploads/e2e8d540-bf4d-419f-a990-7194cd85b987.png" 
                alt="Game category" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-32 bg-gray-800 rounded-lg overflow-hidden animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <img 
                src="/lovable-uploads/6c6a011f-e5f3-49c7-8000-a5ac709ae4fb.png" 
                alt="Game category" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-32 bg-gray-800 rounded-lg overflow-hidden animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <img 
                src="/lovable-uploads/3f9a3dda-417d-4715-8a76-c746e25136d7.png" 
                alt="Game category" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      
      <InstagramFeed />
      
      <div className="py-16 bg-gradient-bg">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Your One-Stop Solution
                <br />
                <span className="text-jmd-orange">For All Your Needs</span>
              </h2>
              
              <p className="text-gray-300 mb-8">
                Boost yourself in today's modern market with our comprehensive solutions, best-quality sports betting, advanced tools, and casino services.
              </p>
              
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center transition-all duration-300 hover:bg-jmd-orange">
                  <span className="text-jmd-black">IG</span>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center transition-all duration-300 hover:bg-jmd-orange">
                  <span className="text-jmd-black">FB</span>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center transition-all duration-300 hover:bg-jmd-orange">
                  <span className="text-jmd-black">TG</span>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center transition-all duration-300 hover:bg-jmd-orange">
                  <span className="text-jmd-black">SK</span>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center transition-all duration-300 hover:bg-jmd-orange">
                  <span className="text-jmd-black">X</span>
                </a>
              </div>
              
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Contact Details</h3>
                <p className="flex items-center text-gray-300 mb-2">
                  <span className="mr-2">📱</span>
                  <a href="tel:+917737992646" className="hover:text-jmd-orange transition-colors">
                    +917737992646
                  </a>
                </p>
                <p className="flex items-center text-gray-300">
                  <span className="mr-2">✉️</span>
                  <a href="mailto:info@jmdpanel.com" className="hover:text-jmd-orange transition-colors">
                    info@jmdpanel.com
                  </a>
                </p>
              </div>
            </div>
            
            <ContactForm />
          </div>
        </div>
      </div>
      
      <WhatsAppButton phoneNumber="917737992646" />
    </div>
  );
};

export default Index;
