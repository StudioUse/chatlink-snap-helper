
const BookiePanelInfo = () => {
  return (
    <div className="py-16 bg-jmd-black">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-white">
          <span className="text-jmd-orange">WHAT IS</span> BOOKIE PANEL AND HOW IT'S WORK
        </h2>
        
        <div className="max-w-5xl mx-auto mt-10">
          <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
            <iframe 
              src="https://www.youtube.com/embed/eKqY-oP1d_Y" 
              title="Bookie Panel Information"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookiePanelInfo;
