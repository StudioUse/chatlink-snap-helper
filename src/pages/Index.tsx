
import HeroSection from '@/components/HeroSection';
import PartnerLogos from '@/components/PartnerLogos';
import FeatureCards from '@/components/FeatureCards';
import WhatsAppButton from '@/components/WhatsAppButton';
import InstagramFeed from '@/components/InstagramFeed';
import ContactForm from '@/components/ContactForm';
import NavigationButtons from '@/components/NavigationButtons';
import WhitelabelCTA from '@/components/WhitelabelCTA';
import AdminSharing from '@/components/AdminSharing';
import CasinoPartners from '@/components/CasinoPartners';
import BookiePanelInfo from '@/components/BookiePanelInfo';
import GameCategories from '@/components/GameCategories';
import ContactInfo from '@/components/ContactInfo';

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
      
      <NavigationButtons />
      <WhitelabelCTA />
      <PartnerLogos />
      <AdminSharing />
      <CasinoPartners />
      <BookiePanelInfo />
      <FeatureCards features={features} />
      <GameCategories />
      <InstagramFeed />
      <ContactInfo />
      
      <WhatsAppButton phoneNumber="917737992646" />
    </div>
  );
};

export default Index;
