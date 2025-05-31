
import { ArrowRight, Play, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  const images = [
    'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&h=800&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&h=800&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&h=800&fit=crop&crop=center'
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentImage((prev) => (prev + 1) % images.length);
        setIsTransitioning(false);
      }, 250);
    }, 5000); // Changed to 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  const nextImage = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
      setIsTransitioning(false);
    }, 250);
  };

  const prevImage = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
      setIsTransitioning(false);
    }, 250);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced background images with smoother transitions */}
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out transform ${
              index === currentImage 
                ? `opacity-100 scale-100 ${isTransitioning ? 'brightness-90' : 'brightness-100'}` 
                : 'opacity-0 scale-110'
            }`}
            style={{
              backgroundImage: `url('${image}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: `blur(${index === currentImage ? '0px' : '2px'})`,
            }}
          >
            <div className={`absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70 transition-opacity duration-1000 ${
              isTransitioning ? 'opacity-90' : 'opacity-100'
            }`}></div>
          </div>
        ))}
      </div>

      {/* Enhanced floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full animate-float ${
              i % 3 === 0 ? 'w-3 h-3 bg-cyan-400/30' : 
              i % 3 === 1 ? 'w-2 h-2 bg-blue-400/25' : 
              'w-1 h-1 bg-white/40'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 15}s`,
              animationDuration: `${20 + Math.random() * 15}s`
            }}
          />
        ))}
      </div>

      {/* Enhanced navigation controls with better animations */}
      <button
        onClick={prevImage}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20 group bg-white/5 hover:bg-white/15 text-white p-4 rounded-full transition-all duration-700 backdrop-blur-md border border-white/10 hover:border-cyan-400/40 hover:scale-110 hover:shadow-lg hover:shadow-cyan-400/20"
      >
        <ChevronLeft className="h-6 w-6 transition-all duration-500 group-hover:-translate-x-1 group-hover:scale-110" />
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400/20 to-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </button>
      
      <button
        onClick={nextImage}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 z-20 group bg-white/5 hover:bg-white/15 text-white p-4 rounded-full transition-all duration-700 backdrop-blur-md border border-white/10 hover:border-cyan-400/40 hover:scale-110 hover:shadow-lg hover:shadow-cyan-400/20"
      >
        <ChevronRight className="h-6 w-6 transition-all duration-500 group-hover:translate-x-1 group-hover:scale-110" />
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400/20 to-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </button>

      {/* Enhanced image indicators with progress animation */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`relative transition-all duration-700 rounded-full overflow-hidden ${
              index === currentImage 
                ? 'w-12 h-3' 
                : 'w-3 h-3 hover:scale-125'
            }`}
          >
            {index === currentImage ? (
              <>
                <div className="w-full h-full bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-300 to-blue-300 rounded-full animate-pulse opacity-50"></div>
              </>
            ) : (
              <div className="w-full h-full bg-white/40 hover:bg-white/60 rounded-full transition-colors duration-300"></div>
            )}
          </button>
        ))}
      </div>
      
      <div className={`relative z-10 text-center max-w-6xl mx-auto px-6 transition-all duration-2000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}>
        <div className="space-y-8">
          <div className="relative">
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight">
              <span className="inline-block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient-shift hover:scale-105 transition-all duration-700 cursor-default drop-shadow-lg">
                TEKBAY
              </span>
            </h1>
            <div className="absolute -inset-6 bg-gradient-to-r from-cyan-400/15 to-blue-400/15 blur-3xl opacity-40 animate-pulse-slow rounded-full"></div>
          </div>
          
          <div className="space-y-4">
            <p className="text-xl md:text-2xl text-cyan-100 font-light animate-fade-in-up delay-500 drop-shadow-sm">
              A Digital Transformation Partner
            </p>
            <p className="text-lg text-slate-300 max-w-4xl mx-auto leading-relaxed animate-fade-in-up delay-700 drop-shadow-sm">
              Your trusted partner in logistics and supply chain solutions, focused on precision, 
              efficiency, and reliability. We offer end-to-end services including transportation, 
              warehousing, distribution, IT security, and general contracting to help businesses operate smarter.
            </p>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12 animate-fade-in-up delay-1000">
          <Button 
            size="lg" 
            className="group relative overflow-hidden bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white px-10 py-5 text-lg font-semibold rounded-full transition-all duration-700 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/30 border border-cyan-500/20"
          >
            <span className="relative z-10 flex items-center">
              Explore Our Services
              <ArrowRight className="ml-3 h-5 w-5 transition-all duration-500 group-hover:translate-x-2 group-hover:scale-110" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-full"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl"></div>
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="group border-2 border-cyan-400/50 text-cyan-300 hover:bg-cyan-900/40 hover:border-cyan-400 px-10 py-5 text-lg rounded-full transition-all duration-700 backdrop-blur-md hover:shadow-lg hover:shadow-cyan-400/30 hover:scale-105"
          >
            <Play className="mr-3 h-5 w-5 transition-all duration-500 group-hover:scale-110 group-hover:text-cyan-200" />
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
