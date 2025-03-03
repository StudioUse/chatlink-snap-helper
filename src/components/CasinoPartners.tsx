
const CasinoPartners = () => {
  return (
    <div className="py-16 bg-jmd-black">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-white">
          OUR CASINO PARTNERS
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Casino Partner Cards */}
          <div className="h-40 bg-gray-800 rounded-lg border border-jmd-orange p-4 flex items-center justify-center animate-fade-in">
            <p className="text-xl font-bold text-white">Casino Partner 1</p>
          </div>
          <div className="h-40 bg-gray-800 rounded-lg border border-jmd-orange p-4 flex items-center justify-center animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <p className="text-xl font-bold text-white">Casino Partner 2</p>
          </div>
          <div className="h-40 bg-gray-800 rounded-lg border border-jmd-orange p-4 flex items-center justify-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <p className="text-xl font-bold text-white">Casino Partner 3</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CasinoPartners;
