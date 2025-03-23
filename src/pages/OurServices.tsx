
import HeroSection from '@/components/HeroSection';
import WhatsAppButton from '@/components/WhatsAppButton';
import ContactForm from '@/components/ContactForm';
import { motion } from 'framer-motion';

const OurServices = () => {
  // Services data
  const services = [
    {
      title: "B2B Panel Solutions",
      description: "Comprehensive business-to-business panel solutions for gaming and betting operators.",
      image: "/lovable-uploads/8b7a034d-0c40-4bf2-9f73-04073017c594.png"
    },
    {
      title: "Whitelabel Products",
      description: "Fully customizable whitelabel solutions that you can brand as your own.",
      image: "/lovable-uploads/c1a3fe97-50ca-4721-86aa-0ac550c2bd50.png"
    },
    {
      title: "Technical Support",
      description: "Round-the-clock technical support to ensure your business runs smoothly.",
      image: "/lovable-uploads/9840ec32-5b80-43af-8716-3bcb5172d98b.png"
    },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen"
    >
      <HeroSection 
        title="Our Services"
        subtitle="Comprehensive Business Solutions"
        cta={{ text: "Get Started", link: "/contact-us" }}
      />
      
      <div className="py-16 bg-jmd-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">
              <span className="text-jmd-orange">Premium</span> Services
            </h2>
            <p className="text-gray-300">
              We offer a wide range of services designed to help your business succeed in the competitive market.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="card-highlight overflow-hidden group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="h-48 overflow-hidden rounded-md mb-6">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-jmd-orange transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-400 mt-2">
                  {service.description}
                </p>
                <div className="mt-6">
                  <a 
                    href="/contact-us" 
                    className="inline-block px-6 py-2 bg-jmd-orange text-white rounded-md font-medium transition-all duration-300 hover:bg-opacity-90"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card-highlight overflow-hidden">
              <div className="overflow-hidden rounded-md mb-6" style={{ height: "260px" }}>
                <img 
                  src="/lovable-uploads/427649f5-2488-4941-a120-b046a16e80da.png" 
                  alt="B2C Whitelabel" 
                  className="w-full h-full object-cover object-center scale-110"
                  style={{ objectPosition: "center 35%" }}
                />
              </div>
            </div>
            <div className="card-highlight overflow-hidden">
              <div className="overflow-hidden rounded-md mb-6" style={{ height: "260px" }}>
                <img 
                  src="/lovable-uploads/c1a3fe97-50ca-4721-86aa-0ac550c2bd50.png" 
                  alt="Master Panel" 
                  className="w-full h-full object-cover object-center scale-110"
                  style={{ objectPosition: "center 35%" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="py-16 bg-gradient-bg">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to elevate your business?
              </h2>
              <p className="text-gray-300 mb-8">
                Fill out the form to get started with our premium services tailored to your specific business needs.
              </p>
            </div>
            
            <ContactForm />
          </div>
        </div>
      </div>
      
      <WhatsAppButton phoneNumber="443333034340" />
    </motion.div>
  );
};

export default OurServices;
