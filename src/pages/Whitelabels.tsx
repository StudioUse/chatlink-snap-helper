
import HeroSection from '@/components/HeroSection';
import WhatsAppButton from '@/components/WhatsAppButton';
import ContactForm from '@/components/ContactForm';

const Whitelabels = () => {
  return (
    <div className="min-h-screen">
      <HeroSection 
        title="Whitelabel Solutions"
        subtitle="Premium Customized Whitelabel Products"
        cta={{ text: "Get Started", link: "/contact-us" }}
      />
      
      <div className="py-16 bg-jmd-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              <span className="text-jmd-orange">Whitelabel</span> Features
            </h2>
            <p className="text-gray-300 mb-8">
              Our Whitelabel solutions allow you to offer premium services under your own brand. With fully customizable options and comprehensive support, we help you establish a strong market presence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="card-highlight">
              <h3 className="text-xl font-bold text-white mb-4">Brand Customization</h3>
              <p className="text-gray-300">Complete customization of logos, colors, and design elements to match your brand.</p>
            </div>
            
            <div className="card-highlight">
              <h3 className="text-xl font-bold text-white mb-4">Seamless Integration</h3>
              <p className="text-gray-300">Easy integration with your existing systems and platforms.</p>
            </div>
            
            <div className="card-highlight">
              <h3 className="text-xl font-bold text-white mb-4">Technical Support</h3>
              <p className="text-gray-300">Comprehensive technical support to ensure smooth operation.</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="py-16 bg-jmd-black">
        <div className="container mx-auto px-4 text-center">
          <a 
            href="/contact-us" 
            className="inline-block px-8 py-4 bg-jmd-orange rounded-full text-white font-bold text-lg transition-all duration-300 hover:bg-opacity-90 animate-pulse"
          >
            AAJ HI APNA WHITELABLE BANWAIN
          </a>
        </div>
      </div>
      
      <div className="py-16 bg-gradient-bg">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to start your Whitelabel business?
              </h2>
              <p className="text-gray-300 mb-8">
                Fill out the form to get started with our premium Whitelabel solutions tailored to your specific business needs.
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

export default Whitelabels;
