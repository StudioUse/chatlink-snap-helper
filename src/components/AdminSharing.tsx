
import { Link } from 'react-router-dom';
import { useState } from 'react';

const AdminSharing = () => {
  // Define the sites data for each type
  const topSites = [
    { name: "WORLD777.NOW", sharing: "25%", logo: "/lovable-uploads/9840ec32-5b80-43af-8716-3bcb5172d98b.png" },
    { name: "WOLF777.COM", sharing: "27%", logo: "/lovable-uploads/8b7a034d-0c40-4bf2-9f73-04073017c594.png" },
    { name: "TAJ777.NOW", sharing: "22%", logo: "/lovable-uploads/1fff3e55-790d-444f-89ad-0265198c3302.png" },
    { name: "D247.COM", sharing: "27%", logo: "/lovable-uploads/39ba1a73-5f7f-4b5e-9d35-72977203f63b.png" },
    { name: "DIAMONDEXCH99.COM", sharing: "", logo: "/lovable-uploads/d0ac1172-9bfd-49ad-8364-e5898a8bc41c.png" }
  ];

  const diamondSites = [
    { name: "ALLPANELEXCH.COM", sharing: "27%" },
    { name: "DIAMONDEXCH99.COM", sharing: "27%" },
    { name: "PS999.CLUB", sharing: "17%" }
  ];

  const d247Sites = [
    { name: "SETWIN247.COM", sharing: "20%" },
    { name: "PS247.CLUB", sharing: "17%" }
  ];

  const worldSites = [
    { name: "SETWIN777.CLUB", sharing: "18%" },
    { name: "WOLF777.COM", sharing: "27%" },
    { name: "WORLD777.NOW", sharing: "25%" },
    { name: "TAJ777.NOW", sharing: "22%" },
    { name: "PS777.CLUB", sharing: "17%" },
    { name: "ICE777.WORLD", sharing: "15%" }
  ];

  const radheSites = [
    { name: "SETWIN777.CLUB", sharing: "18%" },
    { name: "WOLF777.COM", sharing: "27%" },
    { name: "WORLD777.NOW", sharing: "25%" },
    { name: "TAJ777.NOW", sharing: "22%" },
    { name: "PS777.CLUB", sharing: "17%" },
    { name: "ICE777.WORLD", sharing: "15%" }
  ];

  const iceSites = [
    { name: "SETWIN999.COM", sharing: "22%" },
    { name: "SETWIN999.CO", sharing: "16%" },
    { name: "ICEEXCH.COM", sharing: "18%" }
  ];

  const skySites = [
    { name: "ICEBOOK365.COM", sharing: "25%" }
  ];

  // State to track which sites to display
  const [activeSiteType, setActiveSiteType] = useState("TOP SITES");

  // Function to get the current sites based on active type
  const getCurrentSites = () => {
    switch(activeSiteType) {
      case "TOP SITES": return topSites;
      case "DIAMOND TYPE": return diamondSites;
      case "D247 TYPE": return d247Sites;
      case "WORLD TYPE": return worldSites;
      case "RADHE TYPE": return radheSites;
      case "ICE TYPE": return iceSites;
      case "SKY TYPE": return skySites;
      default: return topSites;
    }
  };

  return (
    <div className="py-16 bg-jmd-black">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-white">
          ADMIN SHARING
        </h2>
        
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <button 
            className={`px-8 py-3 rounded-md text-white font-bold transition-all duration-300 hover:bg-opacity-90 ${activeSiteType === "TOP SITES" ? 'bg-jmd-orange' : 'bg-gray-800 hover:bg-gray-700'}`}
            onClick={() => setActiveSiteType("TOP SITES")}
          >
            TOP SITES
          </button>
          <button 
            className={`px-8 py-3 rounded-md text-white font-bold transition-all duration-300 hover:bg-opacity-90 ${activeSiteType === "DIAMOND TYPE" ? 'bg-jmd-orange' : 'bg-gray-800 hover:bg-gray-700'}`}
            onClick={() => setActiveSiteType("DIAMOND TYPE")}
          >
            DIAMOND TYPE
          </button>
          <button 
            className={`px-8 py-3 rounded-md text-white font-bold transition-all duration-300 hover:bg-opacity-90 ${activeSiteType === "D247 TYPE" ? 'bg-jmd-orange' : 'bg-gray-800 hover:bg-gray-700'}`}
            onClick={() => setActiveSiteType("D247 TYPE")}
          >
            D247 TYPE
          </button>
          <button 
            className={`px-8 py-3 rounded-md text-white font-bold transition-all duration-300 hover:bg-opacity-90 ${activeSiteType === "WORLD TYPE" ? 'bg-jmd-orange' : 'bg-gray-800 hover:bg-gray-700'}`}
            onClick={() => setActiveSiteType("WORLD TYPE")}
          >
            WORLD TYPE
          </button>
          <button 
            className={`px-8 py-3 rounded-md text-white font-bold transition-all duration-300 hover:bg-opacity-90 ${activeSiteType === "RADHE TYPE" ? 'bg-jmd-orange' : 'bg-gray-800 hover:bg-gray-700'}`}
            onClick={() => setActiveSiteType("RADHE TYPE")}
          >
            RADHE TYPE
          </button>
          <button 
            className={`px-8 py-3 rounded-md text-white font-bold transition-all duration-300 hover:bg-opacity-90 ${activeSiteType === "ICE TYPE" ? 'bg-jmd-orange' : 'bg-gray-800 hover:bg-gray-700'}`}
            onClick={() => setActiveSiteType("ICE TYPE")}
          >
            ICE TYPE
          </button>
          <button 
            className={`px-8 py-3 rounded-md text-white font-bold transition-all duration-300 hover:bg-opacity-90 ${activeSiteType === "SKY TYPE" ? 'bg-jmd-orange' : 'bg-gray-800 hover:bg-gray-700'}`}
            onClick={() => setActiveSiteType("SKY TYPE")}
          >
            SKY TYPE
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {getCurrentSites().map((site, index) => (
            <div key={index} className="flex flex-col rounded-lg overflow-hidden">
              {activeSiteType === "TOP SITES" ? (
                <div className="bg-gray-800 p-4 h-32 flex items-center justify-center">
                  <img src={(site as any).logo} alt={site.name} className="max-h-full object-contain" />
                </div>
              ) : (
                <div className="bg-teal-800 p-4 flex items-center justify-center">
                  <p className="text-xl font-bold text-white">{site.name}</p>
                </div>
              )}
              <div className="bg-jmd-orange p-4 text-center">
                <p className="text-xl font-bold text-white mb-2">Minimum Sharing</p>
                <p className="text-2xl font-bold text-white mb-2">{site.sharing}</p>
                <button className="px-4 py-2 bg-black rounded-md text-white font-bold transition-all duration-300 hover:bg-opacity-80">
                  {site.name}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminSharing;
