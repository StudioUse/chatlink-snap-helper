
import { Link } from 'react-router-dom';

const AdminSharing = () => {
  return (
    <div className="py-16 bg-jmd-black">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-white">
          ADMIN SHARING
        </h2>
        
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <button className="px-8 py-3 bg-jmd-orange rounded-md text-white font-bold transition-all duration-300 hover:bg-opacity-90">
            TOP SITES
          </button>
          <button className="px-8 py-3 bg-gray-800 rounded-md text-white font-bold transition-all duration-300 hover:bg-gray-700">
            DIAMOND TYPE
          </button>
          <button className="px-8 py-3 bg-gray-800 rounded-md text-white font-bold transition-all duration-300 hover:bg-gray-700">
            D247 TYPE
          </button>
          <button className="px-8 py-3 bg-gray-800 rounded-md text-white font-bold transition-all duration-300 hover:bg-gray-700">
            RADHE TYPE
          </button>
          <button className="px-8 py-3 bg-gray-800 rounded-md text-white font-bold transition-all duration-300 hover:bg-gray-700">
            WORLD TYPE
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Sharing Card 1 */}
          <div className="flex rounded-lg overflow-hidden">
            <div className="w-1/3 bg-teal-800 p-4 flex items-center justify-center">
              <p className="text-xl font-bold text-white">JMD365</p>
            </div>
            <div className="w-2/3 bg-jmd-orange p-4 text-center">
              <p className="text-xl font-bold text-white mb-2">Minimum Sharing</p>
              <p className="text-2xl font-bold text-white mb-2">0.12</p>
              <button className="px-4 py-2 bg-black rounded-md text-white font-bold transition-all duration-300 hover:bg-opacity-80">
                JMD777.IN
              </button>
            </div>
          </div>
          
          {/* Sharing Card 2 */}
          <div className="flex rounded-lg overflow-hidden">
            <div className="w-1/3 bg-teal-800 p-4 flex items-center justify-center">
              <p className="text-xl font-bold text-white">JMD365</p>
            </div>
            <div className="w-2/3 bg-jmd-orange p-4 text-center">
              <p className="text-xl font-bold text-white mb-2">Minimum Sharing</p>
              <p className="text-2xl font-bold text-white mb-2">0.18</p>
              <button className="px-4 py-2 bg-black rounded-md text-white font-bold transition-all duration-300 hover:bg-opacity-80">
                JMD365.IN
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSharing;
