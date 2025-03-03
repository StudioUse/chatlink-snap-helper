
import HeroSection from '@/components/HeroSection';
import WhatsAppButton from '@/components/WhatsAppButton';
import ContactForm from '@/components/ContactForm';

const B2CSites = () => {
  return (
    <div className="min-h-screen">
      <HeroSection 
        title="B2C Site Solutions"
        subtitle="Premium Business-to-Consumer Website Solutions"
        cta={{ text: "Get Started", link: "/contact-us" }}
      />
      
      <div className="py-16 bg-jmd-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              <span className="text-jmd-orange">B2C Sites</span> Features
            </h2>
            <p className="text-gray-300 mb-8">
              Our B2C Sites offer engaging, user-friendly experiences designed to attract and retain customers. With responsive designs and seamless functionality, we help you build a strong online presence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="card-highlight">
              <h3 className="text-xl font-bold text-white mb-4">Responsive Design</h3>
              <p className="text-gray-300">Mobile-friendly interfaces that work perfectly across all devices.</p>
            </div>
            
            <div className="card-highlight">
              <h3 className="text-xl font-bold text-white mb-4">User Experience</h3>
              <p className="text-gray-300">Intuitive navigation and smooth interactions for optimal user engagement.</p>
            </div>
            
            <div className="card-highlight">
              <h3 className="text-xl font-bold text-white mb-4">Custom Branding</h3>
              <p className="text-gray-300">Personalized design elements that reflect your brand identity and values.</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="py-16 bg-gradient-bg">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to launch your B2C website?
              </h2>
              <p className="text-gray-300 mb-8">
                Fill out the form to get started with our premium B2C Site solutions tailored to your specific business needs.
              </p>
            </div>
            
            <ContactForm />
          </div>
        </div>
      </div>
      
      <WhatsAppButton phoneNumber="917737992646" />
    </div>
  );
};

export default B2CSites;
