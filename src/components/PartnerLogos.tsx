
const PartnerLogos = () => {
  // Partner logos data from top sites
  const partners = [
    { name: "WORLD777.NOW", logo: "/lovable-uploads/9840ec32-5b80-43af-8716-3bcb5172d98b.png" },
    { name: "WOLF777.COM", logo: "/lovable-uploads/8b7a034d-0c40-4bf2-9f73-04073017c594.png" },
    { name: "TAJ777.NOW", logo: "/lovable-uploads/1fff3e55-790d-444f-89ad-0265198c3302.png" },
    { name: "D247.COM", logo: "/lovable-uploads/39ba1a73-5f7f-4b5e-9d35-72977203f63b.png" },
    { name: "DIAMONDEXCH99.COM", logo: "/lovable-uploads/d0ac1172-9bfd-49ad-8364-e5898a8bc41c.png" }
  ];

  return (
    <section className="py-16 bg-jmd-darkGray">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-white">
          <span className="text-jmd-orange">Our</span> Partners
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-gray-800 h-32 rounded-lg shadow-lg flex items-center justify-center 
              partner-card animate-fade-in p-4"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img src={partner.logo} alt={partner.name} className="max-h-full max-w-full object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerLogos;
