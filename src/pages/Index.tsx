
import HeroSection from '@/components/HeroSection';
import PartnerLogos from '@/components/PartnerLogos';
import FeatureCards from '@/components/FeatureCards';
import WhatsAppButton from '@/components/WhatsAppButton';
import ContactForm from '@/components/ContactForm';
import AdminSharing from '@/components/AdminSharing';
import CasinoPartners from '@/components/CasinoPartners';
import ContactInfo from '@/components/ContactInfo';
import PageBackground from '@/components/PageBackground';

const Index = () => {
  // Feature cards data
  const features = [
    {
      title: "White-Label Expertise",
      description: "Grow your brand with our customizable white-label services tailored to meet your specific business goals."
    },
    {
      title: "Proven Track Record",
      description: "With years of experience and a portfolio of satisfied clients, MASTERpanel is a partner you can rely on for success."
    },
    {
      title: "Trusted Industry Leader",
      description: "MASTERpanel stands as a trusted name in B2B solutions, delivering excellence and reliability to businesses of all sizes."
    },
    {
      title: "Affordable Pricing",
      description: "We provide premium services at unbeatable rates, ensuring you achieve maximum value without exceeding your budget."
    }
  ];

  return (
    <PageBackground>
      <div className="min-h-screen">
        <HeroSection 
          title="BOOK CHALAIN PAISA KAMAIN"
          cta={{ text: "CONTACT US", link: "/contact-us" }}
          secondaryCta={{ text: "OUR SERVICES", link: "/our-services" }}
        />
        
        <PartnerLogos />
        <AdminSharing />
        <CasinoPartners />
        <FeatureCards features={features} />
        <ContactInfo />
        
        <WhatsAppButton phoneNumber="443333034340" />
      </div>
    </PageBackground>
  );
};

export default Index;
