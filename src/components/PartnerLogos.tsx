
const PartnerLogos = () => {
  // Sample partner logos data
  const partners = [
    { name: "Partner 1", color: "bg-emerald-700" },
    { name: "Partner 2", color: "bg-amber-800" },
    { name: "Partner 3", color: "bg-orange-700" },
    { name: "Partner 4", color: "bg-teal-700" },
    { name: "Partner 5", color: "bg-yellow-600" }
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
              className={`${partner.color} h-32 rounded-lg shadow-lg flex items-center justify-center 
              partner-card animate-fade-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <p className="text-xl font-bold text-white">{partner.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerLogos;
