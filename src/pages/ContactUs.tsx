
import HeroSection from '@/components/HeroSection';
import WhatsAppButton from '@/components/WhatsAppButton';
import ContactForm from '@/components/ContactForm';

const ContactUs = () => {
  return (
    <div className="min-h-screen">
      <HeroSection 
        title="Contact Us"
        subtitle="Get In Touch With Our Team"
      />
      
      <div className="py-16 bg-jmd-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">
                Let's Start A <span className="text-jmd-orange">Conversation</span>
              </h2>
              
              <div className="mb-8">
                <h3 className="text-xl font-bold text-white mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <p className="flex items-start text-gray-300">
                    <span className="mr-4 text-jmd-orange">✉️</span>
                    <a href="mailto:info@jmdpanel.com" className="hover:text-jmd-orange transition-colors">
                      info@jmdpanel.com
                    </a>
                  </p>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center transition-all duration-300 hover:bg-jmd-orange">
                    <span className="text-white">IG</span>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center transition-all duration-300 hover:bg-jmd-orange">
                    <span className="text-white">FB</span>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center transition-all duration-300 hover:bg-jmd-orange">
                    <span className="text-white">TG</span>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center transition-all duration-300 hover:bg-jmd-orange">
                    <span className="text-white">SK</span>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center transition-all duration-300 hover:bg-jmd-orange">
                    <span className="text-white">X</span>
                  </a>
                </div>
              </div>
            </div>
            
            <ContactForm />
          </div>
        </div>
      </div>
      
      <WhatsAppButton phoneNumber="443333034340" />
    </div>
  );
};

export default ContactUs;
