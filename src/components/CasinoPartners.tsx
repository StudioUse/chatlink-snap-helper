
const CasinoPartners = () => {
  const casinoPartners = [
    {
      name: "Casino Partners Group 1",
      logos: [
        { src: "/lovable-uploads/ab1b011d-4379-43cd-a14c-b5a6494f48eb.png", alt: "Turbo Games, Smartsoft Gaming, Ezugi Gaming, Creedroomz Live Casino, Evolution Gaming, Kingmaker" }
      ]
    },
    {
      name: "Casino Partners Group 2",
      logos: [
        { src: "/lovable-uploads/07a7e436-1340-4883-8311-c26e268ccbe2.png", alt: "JILI, Sexy Gaming, Super Spade Games, Spribe, Royal Gaming Technology, Popok Gaming" }
      ]
    },
    {
      name: "Casino Partners Group 3",
      logos: [
        { src: "/lovable-uploads/dfda7209-b134-476b-8e3f-807e344af008.png", alt: "Aura Gaming, Supernova, Betradar, B Gaming, Tom Horn Gaming" }
      ]
    }
  ];

  return (
    <div className="py-16 bg-jmd-black">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-white">
          OUR CASINO PARTNERS
        </h2>
        
        <div className="grid grid-cols-1 gap-10 mt-8">
          {casinoPartners.map((group, index) => (
            <div key={index} className="h-auto rounded-lg overflow-hidden animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <img 
                src={group.logos[0].src} 
                alt={group.logos[0].alt} 
                className="w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CasinoPartners;
