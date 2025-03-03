
import HeroSection from '@/components/HeroSection';
import WhatsAppButton from '@/components/WhatsAppButton';

const AdminVideos = () => {
  // Sample videos data
  const videos = [
    { id: 1, title: "Admin Panel Overview", thumbnail: "/lovable-uploads/6e0a5ee5-d2cd-4925-a411-6793e67beb80.png" },
    { id: 2, title: "User Management Tutorial", thumbnail: "/lovable-uploads/3f9a3dda-417d-4715-8a76-c746e25136d7.png" },
    { id: 3, title: "Transaction Processing Guide", thumbnail: "/lovable-uploads/17b64b20-b3c2-41c8-a6e2-32607079949c.png" },
    { id: 4, title: "Report Generation Tutorial", thumbnail: "/lovable-uploads/af31914e-2416-4ba3-927d-d0e49f4de839.png" },
  ];

  return (
    <div className="min-h-screen">
      <HeroSection 
        title="Admin Video Tutorials"
        subtitle="Learn How To Use Our Systems Effectively"
        cta={{ text: "Contact Support", link: "/contact-us" }}
      />
      
      <div className="py-16 bg-jmd-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">
              <span className="text-jmd-orange">Training</span> Videos
            </h2>
            <p className="text-gray-300">
              Watch our comprehensive tutorial videos to learn how to efficiently use our admin panels and manage your business effectively.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {videos.map((video) => (
              <div key={video.id} className="card-highlight group cursor-pointer animate-fade-in">
                <div className="aspect-video overflow-hidden rounded-md mb-4 relative">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 rounded-full bg-jmd-orange flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-jmd-orange transition-colors">{video.title}</h3>
                <p className="text-gray-400 mt-2">Learn how to effectively use our platform features.</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <WhatsAppButton phoneNumber="917737992646" />
    </div>
  );
};

export default AdminVideos;
