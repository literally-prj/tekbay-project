
import { ArrowRight, Play, ChevronLeft, ChevronRight, Zap, Shield, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
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
      }, 300);
    }, 5000);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      clearInterval(interval);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [images.length]);

  const nextImage = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
      setIsTransitioning(false);
    }, 300);
  };

  const prevImage = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
      setIsTransitioning(false);
    }, 300);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Advanced parallax background with mouse tracking */}
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1500 ease-in-out transform ${
              index === currentImage 
                ? `opacity-100 scale-100 ${isTransitioning ? 'brightness-75 blur-sm' : 'brightness-100'}` 
                : 'opacity-0 scale-105 blur-md'
            }`}
            style={{
              backgroundImage: `url('${image}')`,
              backgroundSize: 'cover',
              backgroundPosition: `${50 + (mousePosition.x - 50) * 0.02}% ${50 + (mousePosition.y - 50) * 0.02}%`,
              transform: `scale(${index === currentImage ? 1 : 1.05}) translateX(${(mousePosition.x - 50) * 0.005}px) translateY(${(mousePosition.y - 50) * 0.005}px)`,
              transition: 'all 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            }}
          >
            <div className={`absolute inset-0 bg-gradient-to-br from-slate-900/90 via-cyan-900/80 to-blue-900/85 transition-all duration-1500 ${
              isTransitioning ? 'opacity-95' : 'opacity-90'
            }`}>
              {/* Advanced tech grid overlay */}
              <div className="absolute inset-0 opacity-10">
                <div className="grid grid-cols-20 grid-rows-20 h-full w-full">
                  {[...Array(400)].map((_, i) => (
                    <div
                      key={i}
                      className="border border-cyan-400/20 animate-pulse"
                      style={{
                        animationDelay: `${Math.random() * 3}s`,
                        animationDuration: `${2 + Math.random() * 2}s`
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Advanced floating tech elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating geometric shapes with enhanced animations */}
        {[...Array(35)].map((_, i) => (
          <div
            key={i}
            className={`absolute transition-all duration-1000 ${
              i % 4 === 0 ? 'w-4 h-4 bg-gradient-to-r from-cyan-400/40 to-blue-400/40 rounded-full' :
              i % 4 === 1 ? 'w-3 h-3 border-2 border-cyan-400/30 rotate-45' :
              i % 4 === 2 ? 'w-2 h-8 bg-gradient-to-b from-purple-400/30 to-transparent' :
              'w-6 h-1 bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent'
            } animate-float`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${15 + Math.random() * 25}s`,
              transform: `translateX(${(mousePosition.x - 50) * 0.02}px) translateY(${(mousePosition.y - 50) * 0.02}px)`,
            }}
          />
        ))}

        {/* Advanced circuit-like patterns */}
        {[...Array(8)].map((_, i) => (
          <div
            key={`circuit-${i}`}
            className="absolute animate-pulse opacity-20"
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + (i % 3) * 30}%`,
              width: '60px',
              height: '2px',
              background: 'linear-gradient(90deg, transparent, #06b6d4, transparent)',
              animationDelay: `${i * 0.5}s`,
              animationDuration: '4s'
            }}
          />
        ))}
      </div>

      {/* Enhanced navigation controls */}
      <button
        onClick={prevImage}
        className="absolute left-8 top-1/2 transform -translate-y-1/2 z-30 group bg-white/5 hover:bg-cyan-500/20 text-white p-5 rounded-2xl transition-all duration-700 backdrop-blur-xl border border-white/10 hover:border-cyan-400/50 hover:scale-110 hover:shadow-2xl hover:shadow-cyan-400/30"
      >
        <ChevronLeft className="h-7 w-7 transition-all duration-500 group-hover:-translate-x-2 group-hover:scale-125 group-hover:text-cyan-300" />
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400/30 to-blue-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl"></div>
      </button>
      
      <button
        onClick={nextImage}
        className="absolute right-8 top-1/2 transform -translate-y-1/2 z-30 group bg-white/5 hover:bg-cyan-500/20 text-white p-5 rounded-2xl transition-all duration-700 backdrop-blur-xl border border-white/10 hover:border-cyan-400/50 hover:scale-110 hover:shadow-2xl hover:shadow-cyan-400/30"
      >
        <ChevronRight className="h-7 w-7 transition-all duration-500 group-hover:translate-x-2 group-hover:scale-125 group-hover:text-cyan-300" />
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400/30 to-blue-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl"></div>
      </button>

      {/* Enhanced progress indicators */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-30 flex space-x-6">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`relative transition-all duration-700 rounded-full overflow-hidden group ${
              index === currentImage 
                ? 'w-16 h-4' 
                : 'w-4 h-4 hover:scale-150'
            }`}
          >
            {index === currentImage ? (
              <>
                <div className="w-full h-full bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 rounded-full animate-gradient-shift"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-300 to-blue-300 rounded-full animate-pulse opacity-60"></div>
                <div className="absolute inset-0 bg-white/20 rounded-full animate-ping"></div>
              </>
            ) : (
              <div className="w-full h-full bg-white/30 hover:bg-gradient-to-r hover:from-cyan-400/70 hover:to-blue-400/70 rounded-full transition-all duration-500 group-hover:shadow-lg group-hover:shadow-cyan-400/30"></div>
            )}
          </button>
        ))}
      </div>
      
      {/* Enhanced main content */}
      <div className={`relative z-20 text-center max-w-7xl mx-auto px-8 transition-all duration-3000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
      }`}>
        <div className="space-y-12">
          {/* Advanced title with tech icons */}
          <div className="relative">
            <div className="flex items-center justify-center space-x-6 mb-8 animate-fade-in-up">
              <Zap className="h-8 w-8 text-cyan-400 animate-pulse" />
              <Shield className="h-10 w-10 text-blue-400 animate-bounce-slow" />
              <Globe className="h-8 w-8 text-purple-400 animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
            
            <h1 className="text-7xl md:text-9xl font-black text-white mb-8 leading-none tracking-tight">
              <span className="inline-block bg-gradient-to-r from-cyan-300 via-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-shift hover:scale-105 transition-all duration-1000 cursor-default drop-shadow-2xl"
                style={{
                  textShadow: '0 0 40px rgba(6, 182, 212, 0.3), 0 0 80px rgba(59, 130, 246, 0.2)',
                  transform: `translateX(${(mousePosition.x - 50) * 0.01}px) translateY(${(mousePosition.y - 50) * 0.01}px)`,
                }}
              >
                TEKBAY
              </span>
            </h1>
            
            {/* Enhanced glow effects */}
            <div className="absolute -inset-12 bg-gradient-to-r from-cyan-400/20 via-blue-400/20 to-purple-400/20 blur-3xl opacity-60 animate-pulse-slow rounded-full"></div>
            <div className="absolute -inset-8 bg-gradient-to-r from-cyan-300/15 to-blue-300/15 blur-2xl opacity-80 animate-pulse-slow rounded-full" style={{ animationDelay: '1s' }}></div>
          </div>
          
          <div className="space-y-6 animate-fade-in-up delay-500">
            <p className="text-2xl md:text-3xl text-cyan-100 font-light tracking-wide drop-shadow-lg">
              <span className="bg-gradient-to-r from-cyan-200 to-blue-200 bg-clip-text text-transparent">
                Advanced Digital Transformation
              </span>
            </p>
            <p className="text-lg md:text-xl text-slate-300 max-w-5xl mx-auto leading-relaxed drop-shadow-sm animate-fade-in-up delay-700">
              Pioneering the future of logistics and supply chain solutions with cutting-edge technology, 
              AI-driven processes, and comprehensive security frameworks. We deliver precision, 
              efficiency, and innovation across transportation, warehousing, cybersecurity, and digital infrastructure.
            </p>
          </div>
        </div>
        
        {/* Enhanced action buttons */}
        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mt-16 animate-fade-in-up delay-1000">
          <Button 
            size="lg" 
            className="group relative overflow-hidden bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 hover:from-cyan-500 hover:via-blue-500 hover:to-purple-500 text-white px-12 py-6 text-xl font-bold rounded-2xl transition-all duration-1000 transform hover:scale-110 hover:shadow-2xl hover:shadow-cyan-500/40 border border-cyan-500/30 btn-glow"
          >
            <span className="relative z-10 flex items-center">
              Explore Solutions
              <ArrowRight className="ml-4 h-6 w-6 transition-all duration-700 group-hover:translate-x-3 group-hover:scale-125" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-cyan-200/20 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 rounded-2xl"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/30 to-purple-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 blur-2xl"></div>
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="group border-2 border-cyan-400/60 text-cyan-300 hover:bg-cyan-900/50 hover:border-cyan-300 hover:text-white px-12 py-6 text-xl rounded-2xl transition-all duration-1000 backdrop-blur-xl hover:shadow-2xl hover:shadow-cyan-400/40 hover:scale-110"
          >
            <Play className="mr-4 h-6 w-6 transition-all duration-700 group-hover:scale-125 group-hover:text-cyan-200" />
            Watch Demo
          </Button>
        </div>

        {/* Tech stats overlay */}
        <div className="absolute bottom-20 left-0 right-0 flex justify-center space-x-12 animate-fade-in-up delay-1500">
          {[
            { label: 'AI Systems', value: '99.9%' },
            { label: 'Uptime', value: '24/7' },
            { label: 'Security', value: 'Military' }
          ].map((stat, index) => (
            <div key={index} className="text-center group cursor-default">
              <div className="text-2xl font-bold text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">
                {stat.value}
              </div>
              <div className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
