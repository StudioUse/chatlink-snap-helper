
import { useState } from 'react';

interface Site {
  name: string;
  sharing: string;
  logo?: string;
  website?: string;
}

const AdminSharing = () => {
  // Define the sites data for each type
  const topSites: Site[] = [
    { name: "WORLD777.NOW", sharing: "25%", logo: "/lovable-uploads/9840ec32-5b80-43af-8716-3bcb5172d98b.png", website: "https://world777.now" },
    { name: "WOLF777.COM", sharing: "27%", logo: "/lovable-uploads/8b7a034d-0c40-4bf2-9f73-04073017c594.png", website: "https://wolf777.com" },
    { name: "TAJ777.NOW", sharing: "22%", logo: "/lovable-uploads/1fff3e55-790d-444f-89ad-0265198c3302.png", website: "https://taj777.now" },
    { name: "D247.COM", sharing: "27%", logo: "/lovable-uploads/39ba1a73-5f7f-4b5e-9d35-72977203f63b.png", website: "https://d247.com" },
    { name: "DIAMONDEXCH99.COM", sharing: "", logo: "/lovable-uploads/d0ac1172-9bfd-49ad-8364-e5898a8bc41c.png", website: "https://diamondexch99.com" }
  ];

  const diamondSites: Site[] = [
    { name: "ALLPANELEXCH.COM", sharing: "27%", website: "https://allpanelexch.com" },
    { name: "DIAMONDEXCH99.COM", sharing: "27%", website: "https://diamondexch99.com" },
    { name: "PS999.CLUB", sharing: "17%", website: "https://ps999.club" }
  ];

  const d247Sites: Site[] = [
    { name: "SETWIN247.COM", sharing: "20%", website: "https://setwin247.com" },
    { name: "PS247.CLUB", sharing: "17%", website: "https://ps247.club" }
  ];

  const worldSites: Site[] = [
    { name: "SETWIN777.CLUB", sharing: "18%", website: "https://setwin777.club" },
    { name: "WOLF777.COM", sharing: "27%", website: "https://wolf777.com" },
    { name: "WORLD777.NOW", sharing: "25%", website: "https://world777.now" },
    { name: "TAJ777.NOW", sharing: "22%", website: "https://taj777.now" },
    { name: "PS777.CLUB", sharing: "17%", website: "https://ps777.club" },
    { name: "ICE777.WORLD", sharing: "15%", website: "https://ice777.world" }
  ];

  const radheSites: Site[] = [
    { name: "SETWIN777.CLUB", sharing: "18%", website: "https://setwin777.club" },
    { name: "WOLF777.COM", sharing: "27%", website: "https://wolf777.com" },
    { name: "WORLD777.NOW", sharing: "25%", website: "https://world777.now" },
    { name: "TAJ777.NOW", sharing: "22%", website: "https://taj777.now" },
    { name: "PS777.CLUB", sharing: "17%", website: "https://ps777.club" },
    { name: "ICE777.WORLD", sharing: "15%", website: "https://ice777.world" }
  ];

  const iceSites: Site[] = [
    { name: "SETWIN999.COM", sharing: "22%", website: "https://setwin999.com" },
    { name: "SETWIN999.CO", sharing: "16%", website: "https://setwin999.co" },
    { name: "ICEEXCH.COM", sharing: "18%", website: "https://iceexch.com" }
  ];

  const skySites: Site[] = [
    { name: "ICEBOOK365.COM", sharing: "25%", website: "https://icebook365.com" }
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
                  <img src={site.logo} alt={site.name} className="max-h-full object-contain" />
                </div>
              ) : (
                <div className="bg-teal-800 p-4 flex items-center justify-center">
                  <p className="text-xl font-bold text-white">{site.name}</p>
                </div>
              )}
              <div className="bg-jmd-orange p-4 text-center">
                <p className="text-xl font-bold text-white mb-2">Minimum Sharing</p>
                <p className="text-2xl font-bold text-white mb-2">{site.sharing}</p>
                <a 
                  href={site.website} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="px-4 py-2 bg-black rounded-md text-white font-bold transition-all duration-300 hover:bg-opacity-80 inline-block"
                >
                  {site.name}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminSharing;
