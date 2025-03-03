
import { useState } from 'react';
import { toast } from 'sonner';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    selectedPanel: 'White Label',
    coinRequirement: '10K - 1L',
    siteType: 'Top Sites'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your server or API
    console.log('Form submitted:', formData);
    
    // Show success toast
    toast.success('Request submitted successfully! We will contact you soon.');
    
    // Reset form
    setFormData({
      fullName: '',
      phoneNumber: '',
      selectedPanel: 'White Label',
      coinRequirement: '10K - 1L',
      siteType: 'Top Sites'
    });
  };

  return (
    <div className="bg-jmd-darkGray rounded-lg border border-gray-800 p-8 shadow-xl animate-fade-in">
      <h3 className="text-2xl font-bold text-white mb-6 text-center">
        Start Your B2B/B2C Business Now
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
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="+91XXXXXXXXXX"
            className="w-full px-4 py-3 rounded-md bg-black text-white border border-gray-700 focus:border-jmd-orange focus:outline-none focus:ring-1 focus:ring-jmd-orange"
            required
          />
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
            <option value="B2C Site">B2C Site</option>
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
              <option value="Radhe Type">Radhe Type</option>
              <option value="World Type">World Type</option>
            </select>
          </div>
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
