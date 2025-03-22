
import { useState } from 'react';
import { toast } from 'sonner';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    countryCode: '+91', // Default country code
    phoneNumber: '',
    selectedPanel: 'White Label',
    coinRequirement: '10K - 1L',
    siteType: 'Top Sites',
    idType: 'Single ID'
  });

  // Asian country codes
  const countryCodes = [
    { code: '+91', name: 'India' },
    { code: '+93', name: 'Afghanistan' },
    { code: '+374', name: 'Armenia' },
    { code: '+994', name: 'Azerbaijan' },
    { code: '+973', name: 'Bahrain' },
    { code: '+880', name: 'Bangladesh' },
    { code: '+975', name: 'Bhutan' },
    { code: '+673', name: 'Brunei' },
    { code: '+855', name: 'Cambodia' },
    { code: '+86', name: 'China' },
    { code: '+357', name: 'Cyprus' },
    { code: '+995', name: 'Georgia' },
    { code: '+852', name: 'Hong Kong' },
    { code: '+62', name: 'Indonesia' },
    { code: '+98', name: 'Iran' },
    { code: '+964', name: 'Iraq' },
    { code: '+972', name: 'Israel' },
    { code: '+81', name: 'Japan' },
    { code: '+962', name: 'Jordan' },
    { code: '+7', name: 'Kazakhstan' },
    { code: '+965', name: 'Kuwait' },
    { code: '+996', name: 'Kyrgyzstan' },
    { code: '+856', name: 'Laos' },
    { code: '+961', name: 'Lebanon' },
    { code: '+853', name: 'Macau' },
    { code: '+60', name: 'Malaysia' },
    { code: '+960', name: 'Maldives' },
    { code: '+976', name: 'Mongolia' },
    { code: '+95', name: 'Myanmar' },
    { code: '+977', name: 'Nepal' },
    { code: '+850', name: 'North Korea' },
    { code: '+968', name: 'Oman' },
    { code: '+92', name: 'Pakistan' },
    { code: '+970', name: 'Palestine' },
    { code: '+63', name: 'Philippines' },
    { code: '+974', name: 'Qatar' },
    { code: '+966', name: 'Saudi Arabia' },
    { code: '+65', name: 'Singapore' },
    { code: '+82', name: 'South Korea' },
    { code: '+94', name: 'Sri Lanka' },
    { code: '+963', name: 'Syria' },
    { code: '+886', name: 'Taiwan' },
    { code: '+992', name: 'Tajikistan' },
    { code: '+66', name: 'Thailand' },
    { code: '+90', name: 'Turkey' },
    { code: '+993', name: 'Turkmenistan' },
    { code: '+971', name: 'United Arab Emirates' },
    { code: '+998', name: 'Uzbekistan' },
    { code: '+84', name: 'Vietnam' },
    { code: '+967', name: 'Yemen' }
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format the message for WhatsApp
    const message = `
New Contact Form Submission:
Name: ${formData.fullName}
Phone: ${formData.countryCode}${formData.phoneNumber}
Panel Type: ${formData.selectedPanel}
Coin Requirement: ${formData.coinRequirement}
Site Type: ${formData.siteType}
ID Type: ${formData.idType}
    `.trim();
    
    // Encode the message for WhatsApp URL
    const encodedMessage = encodeURIComponent(message);
    
    // Open WhatsApp with the pre-filled message
    window.open(`https://wa.me/443333034340?text=${encodedMessage}`, '_blank');
    
    // Show success toast
    toast.success('Request submitted successfully! Redirecting to WhatsApp...');
    
    // Reset form
    setFormData({
      fullName: '',
      countryCode: '+91',
      phoneNumber: '',
      selectedPanel: 'White Label',
      coinRequirement: '10K - 1L',
      siteType: 'Top Sites',
      idType: 'Single ID'
    });
  };

  return (
    <div className="bg-jmd-darkGray rounded-lg border border-gray-800 p-8 shadow-xl animate-fade-in">
      <h3 className="text-2xl font-bold text-white mb-6 text-center">
        Start Your B2B Business Now
      </h3>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="fullName" className="block text-white mb-2">
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Name"
            className="w-full px-4 py-3 rounded-md bg-black text-white border border-gray-700 focus:border-jmd-orange focus:outline-none focus:ring-1 focus:ring-jmd-orange"
            required
          />
        </div>
        
        <div>
          <label htmlFor="phoneNumber" className="block text-white mb-2">
            Phone Number
          </label>
          <div className="flex">
            <select
              id="countryCode"
              name="countryCode"
              value={formData.countryCode}
              onChange={handleChange}
              className="w-1/3 px-2 py-3 rounded-l-md bg-black text-white border border-gray-700 focus:border-jmd-orange focus:outline-none focus:ring-1 focus:ring-jmd-orange"
            >
              {countryCodes.map((country) => (
                <option key={country.code} value={country.code}>
                  {country.code} ({country.name})
                </option>
              ))}
            </select>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Phone Number"
              className="w-2/3 px-4 py-3 rounded-r-md bg-black text-white border border-gray-700 border-l-0 focus:border-jmd-orange focus:outline-none focus:ring-1 focus:ring-jmd-orange"
              required
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="selectedPanel" className="block text-white mb-2">
            Select Your Panel
          </label>
          <select
            id="selectedPanel"
            name="selectedPanel"
            value={formData.selectedPanel}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-md bg-black text-white border border-gray-700 focus:border-jmd-orange focus:outline-none focus:ring-1 focus:ring-jmd-orange"
          >
            <option value="White Label">White Label</option>
            <option value="B2B Panel">B2B Panel</option>
          </select>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="coinRequirement" className="block text-white mb-2">
              Coin Requirement
            </label>
            <select
              id="coinRequirement"
              name="coinRequirement"
              value={formData.coinRequirement}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md bg-black text-white border border-gray-700 focus:border-jmd-orange focus:outline-none focus:ring-1 focus:ring-jmd-orange"
            >
              <option value="10K - 1L">10K - 1L</option>
              <option value="1L - 5L">1L - 5L</option>
              <option value="5L - 10L">5L - 10L</option>
              <option value="10L+">10L+</option>
              <option value="1Cr+">1Cr+</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="siteType" className="block text-white mb-2">
              Select Your Site Type
            </label>
            <select
              id="siteType"
              name="siteType"
              value={formData.siteType}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md bg-black text-white border border-gray-700 focus:border-jmd-orange focus:outline-none focus:ring-1 focus:ring-jmd-orange"
            >
              <option value="Top Sites">Top Sites</option>
              <option value="Diamond Type">Diamond Type</option>
              <option value="D247 Type">D247 Type</option>
              <option value="World Type">World Type</option>
              <option value="Radhe Type">Radhe Type</option>
              <option value="Ice Type">Ice Type</option>
              <option value="Sky Type">Sky Type</option>
            </select>
          </div>
        </div>
        
        <div>
          <label htmlFor="idType" className="block text-white mb-2">
            Choose ID
          </label>
          <select
            id="idType"
            name="idType"
            value={formData.idType}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-md bg-black text-white border border-gray-700 focus:border-jmd-orange focus:outline-none focus:ring-1 focus:ring-jmd-orange"
          >
            <option value="Single ID">Single ID</option>
            <option value="Cutting ID">Cutting ID</option>
          </select>
        </div>
        
        <button
          type="submit"
          className="w-full py-3 px-4 bg-jmd-orange text-white font-bold rounded-md transition-all duration-300 hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-jmd-orange"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
