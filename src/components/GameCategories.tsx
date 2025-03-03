
const GameCategories = () => {
  return (
    <div className="py-16 bg-jmd-black">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-white">
          JMD365.IN
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {/* Game category thumbnails */}
          <div className="h-32 bg-gray-800 rounded-lg overflow-hidden animate-fade-in">
            <img 
              src="/lovable-uploads/e2e8d540-bf4d-419f-a990-7194cd85b987.png" 
              alt="Game category" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="h-32 bg-gray-800 rounded-lg overflow-hidden animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <img 
              src="/lovable-uploads/6c6a011f-e5f3-49c7-8000-a5ac709ae4fb.png" 
              alt="Game category" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="h-32 bg-gray-800 rounded-lg overflow-hidden animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <img 
              src="/lovable-uploads/3f9a3dda-417d-4715-8a76-c746e25136d7.png" 
              alt="Game category" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameCategories;
