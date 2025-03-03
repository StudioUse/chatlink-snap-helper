
const InstagramFeed = () => {
  // Sample Instagram posts data
  const posts = [
    { id: 1, imageUrl: '/lovable-uploads/af31914e-2416-4ba3-927d-d0e49f4de839.png' },
    { id: 2, imageUrl: '/lovable-uploads/6e0a5ee5-d2cd-4925-a411-6793e67beb80.png' },
    { id: 3, imageUrl: '/lovable-uploads/17b64b20-b3c2-41c8-a6e2-32607079949c.png' }
  ];

  return (
    <section className="py-16 bg-jmd-black">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-white mb-10">
          INSTAGRAM
        </h2>
        
        <div className="bg-white rounded-lg p-6 mb-10">
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-16 h-16 rounded-full bg-jmd-orange flex items-center justify-center text-white text-lg font-bold">
              JMD
            </div>
            <div>
              <p className="font-bold">jmd_panel</p>
              <p className="text-gray-600 text-sm">157K followers • 468 posts</p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <div key={post.id} className="overflow-hidden rounded-lg animate-fade-in">
              <img 
                src={post.imageUrl} 
                alt={`Instagram post ${post.id}`} 
                className="w-full h-auto object-cover transform transition-transform duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
