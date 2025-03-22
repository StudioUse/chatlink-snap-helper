
import ContactForm from '@/components/ContactForm';

const ContactInfo = () => {
  return (
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
            
            <div className="mt-8">
              <h3 className="text-2xl font-bold text-white mb-4">Contact Details</h3>
              <p className="flex items-center text-gray-300">
                <span className="mr-2">✉️</span>
                <a href="mailto:masterpanel247@gmail.com" className="hover:text-jmd-orange transition-colors">
                  masterpanel247@gmail.com
                </a>
              </p>
            </div>
          </div>
          
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
