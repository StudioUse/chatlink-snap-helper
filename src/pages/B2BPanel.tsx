
import HeroSection from '@/components/HeroSection';
import WhatsAppButton from '@/components/WhatsAppButton';
import ContactForm from '@/components/ContactForm';

const B2BPanel = () => {
  return (
    <div className="min-h-screen">
      <HeroSection 
        title="B2B Panel Solutions"
        subtitle="Premium Business-to-Business Panel Solutions"
        cta={{ text: "Get Started", link: "/contact-us" }}
      />
      
      <div className="py-16 bg-jmd-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              <span className="text-jmd-orange">B2B Panel</span> Features
            </h2>
            <p className="text-gray-300 mb-8">
              Our B2B Panel offers comprehensive tools and features designed specifically for businesses in the gaming and betting industry. With our solutions, you can efficiently manage users, transactions, reports, and more.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="card-highlight">
              <h3 className="text-xl font-bold text-white mb-4">User Management</h3>
              <p className="text-gray-300">Complete control over user accounts, permissions, and activity tracking.</p>
            </div>
            
            <div className="card-highlight">
              <h3 className="text-xl font-bold text-white mb-4">Transaction System</h3>
              <p className="text-gray-300">Secure and efficient transaction processing with detailed logs and history.</p>
            </div>
            
            <div className="card-highlight">
              <h3 className="text-xl font-bold text-white mb-4">Reporting Tools</h3>
              <p className="text-gray-300">Comprehensive reporting and analytics to track performance and make data-driven decisions.</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="py-16 bg-gradient-bg">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to start your B2B business?
              </h2>
              <p className="text-gray-300 mb-8">
                Fill out the form to get started with our premium B2B Panel solutions tailored to your specific business needs.
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

export default B2BPanel;
