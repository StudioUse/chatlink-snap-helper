
import { MessageCircle } from 'lucide-react';

interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
}

const WhatsAppButton = ({ phoneNumber, message = "Hello! I'm interested in your services." }: WhatsAppButtonProps) => {
  const handleClick = () => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <div 
      className="whatsapp-btn"
      onClick={handleClick}
      title="Contact us on WhatsApp"
    >
      <MessageCircle size={30} className="text-white" />
    </div>
  );
};

export default WhatsAppButton;
