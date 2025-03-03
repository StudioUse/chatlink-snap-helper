
interface Feature {
  title: string;
  description: string;
}

const FeatureCards = ({ features }: { features: Feature[] }) => {
  return (
    <section className="py-16 gradient-bg relative">
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="section-title text-white mb-16">
          <span className="text-jmd-orange">Why Choose</span> JMDPANEL ?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="card-highlight animate-fade-in backdrop-blur-sm relative overflow-hidden group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute -top-10 -right-10 w-20 h-20 bg-jmd-orange/10 rounded-full blur-xl group-hover:bg-jmd-orange/20 transition-all duration-500"></div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;
