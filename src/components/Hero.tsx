
import { ArrowRight, Play, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  
  const images = [
    'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&h=800&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&h=800&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&h=800&fit=crop&crop=center'
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [images.length]);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background images with enhanced transitions */}
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-2000 ease-in-out ${
              index === currentImage 
                ? 'opacity-100 scale-100' 
                : 'opacity-0 scale-105'
            }`}
            style={{
              backgroundImage: `url('${image}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70"></div>
          </div>
        ))}
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${15 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      {/* Enhanced navigation controls */}
      <button
        onClick={prevImage}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20 group bg-white/10 hover:bg-white/20 text-white p-4 rounded-full transition-all duration-500 backdrop-blur-sm border border-white/20 hover:border-cyan-400/50 hover:scale-110"
      >
        <ChevronLeft className="h-6 w-6 transition-transform group-hover:-translate-x-1" />
      </button>
      
      <button
        onClick={nextImage}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 z-20 group bg-white/10 hover:bg-white/20 text-white p-4 rounded-full transition-all duration-500 backdrop-blur-sm border border-white/20 hover:border-cyan-400/50 hover:scale-110"
      >
        <ChevronRight className="h-6 w-6 transition-transform group-hover:translate-x-1" />
      </button>

      {/* Enhanced image indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`relative transition-all duration-500 ${
              index === currentImage 
                ? 'w-12 h-3 bg-gradient-to-r from-cyan-400 to-blue-400' 
                : 'w-3 h-3 bg-white/50 hover:bg-white/75 hover:scale-125'
            } rounded-full`}
          />
        ))}
      </div>
      
      <div className={`relative z-10 text-center max-w-6xl mx-auto px-6 transition-all duration-1500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        <div className="space-y-8">
          <div className="relative">
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight">
              <span className="inline-block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient-shift hover:scale-105 transition-transform duration-500 cursor-default">
                TEKBAY
              </span>
            </h1>
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 blur-3xl opacity-30 animate-pulse-slow"></div>
          </div>
          
          <div className="space-y-4">
            <p className="text-xl md:text-2xl text-cyan-100 font-light animate-fade-in-up delay-300">
              A Digital Transformation Partner
            </p>
            <p className="text-lg text-slate-300 max-w-4xl mx-auto leading-relaxed animate-fade-in-up delay-500">
              Your trusted partner in logistics and supply chain solutions, focused on precision, 
              efficiency, and reliability. We offer end-to-end services including transportation, 
              warehousing, distribution, IT security, and general contracting to help businesses operate smarter.
            </p>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12 animate-fade-in-up delay-700">
          <Button 
            size="lg" 
            className="group relative overflow-hidden bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white px-10 py-5 text-lg font-semibold rounded-full transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
          >
            <span className="relative z-10 flex items-center">
              Explore Our Services
              <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-2" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="group border-2 border-cyan-400/50 text-cyan-300 hover:bg-cyan-900/30 hover:border-cyan-400 px-10 py-5 text-lg rounded-full transition-all duration-500 backdrop-blur-sm hover:shadow-lg hover:shadow-cyan-400/25"
          >
            <Play className="mr-3 h-5 w-5 transition-transform group-hover:scale-110" />
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
