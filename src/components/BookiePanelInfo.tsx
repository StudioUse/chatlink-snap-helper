
const BookiePanelInfo = () => {
  return (
    <div className="py-16 bg-jmd-black">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-white">
          <span className="text-jmd-orange">WHAT IS</span> BOOKIE PANEL AND HOW IT'S WORK
        </h2>
        
        <div className="max-w-4xl mx-auto mt-8">
          <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
            <iframe 
              src="https://www.youtube.com/embed/eKqY-oP1d_Y" 
              title="Bookie Panel Information"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookiePanelInfo;
