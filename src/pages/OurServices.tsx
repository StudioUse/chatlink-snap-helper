
import HeroSection from '@/components/HeroSection';
import WhatsAppButton from '@/components/WhatsAppButton';
import ContactForm from '@/components/ContactForm';

const OurServices = () => {
  // Services data
  const services = [
    {
      title: "B2B Panel Solutions",
      description: "Comprehensive business-to-business panel solutions for gaming and betting operators.",
      image: "/lovable-uploads/6c6a011f-e5f3-49c7-8000-a5ac709ae4fb.png"
    },
    {
      title: "B2C Website Development",
      description: "Custom-designed business-to-consumer websites with seamless user experience.",
      image: "/lovable-uploads/e2e8d540-bf4d-419f-a990-7194cd85b987.png"
    },
    {
      title: "Whitelabel Products",
      description: "Fully customizable whitelabel solutions that you can brand as your own.",
      image: "/lovable-uploads/17b64b20-b3c2-41c8-a6e2-32607079949c.png"
    },
    {
      title: "Technical Support",
      description: "Round-the-clock technical support to ensure your business runs smoothly.",
      image: "/lovable-uploads/3f9a3dda-417d-4715-8a76-c746e25136d7.png"
    },
  ];

  return (
    <div className="min-h-screen">
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
      
      <WhatsAppButton phoneNumber="917737992646" />
    </div>
  );
};

export default OurServices;
