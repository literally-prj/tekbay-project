
import { ArrowRight, Play, ChevronLeft, ChevronRight, Zap, Shield, Globe } from 'lucide-react';
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
      }, 200);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  const nextImage = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
      setIsTransitioning(false);
    }, 200);
  };

  const prevImage = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
      setIsTransitioning(false);
    }, 200);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background images */}
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-out ${
              index === currentImage 
                ? `opacity-100 scale-100 ${isTransitioning ? 'brightness-90' : 'brightness-100'}` 
                : 'opacity-0 scale-105'
            }`}
            style={{
              backgroundImage: `url('${image}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-800/85 to-slate-900/90" />
          </div>
        ))}
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400/30 rounded-full animate-float"
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + (i % 3) * 25}%`,
              animationDelay: `${i * 0.8}s`,
            }}
          />
        ))}
      </div>

      {/* Navigation controls */}
      <button
        onClick={prevImage}
        className="absolute left-8 top-1/2 transform -translate-y-1/2 z-30 glass p-4 rounded-xl hover-lift text-cyan-300 hover:text-cyan-100"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      
      <button
        onClick={nextImage}
        className="absolute right-8 top-1/2 transform -translate-y-1/2 z-30 glass p-4 rounded-xl hover-lift text-cyan-300 hover:text-cyan-100"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Progress indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex space-x-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentImage 
                ? 'w-12 h-3 bg-gradient-to-r from-cyan-400 to-blue-500' 
                : 'w-3 h-3 bg-white/40 hover:bg-white/60'
            }`}
          />
        ))}
      </div>
      
      {/* Main content */}
      <div className={`relative z-20 text-center container-max px-8 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        <div className="space-y-8">
          {/* Tech icons */}
          <div className="flex items-center justify-center space-x-6 animate-fade-in-up">
            <Zap className="h-6 w-6 text-cyan-400 animate-pulse-slow" />
            <Shield className="h-8 w-8 text-blue-400 animate-bounce-slow" />
            <Globe className="h-6 w-6 text-cyan-400 animate-pulse-slow" />
          </div>
          
          {/* Main title */}
          <div className="space-y-6">
            <h1 className="text-6xl md:text-8xl font-black text-white leading-tight tracking-tight">
              <span className="text-gradient">TEKBAY</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-cyan-100 font-medium max-w-2xl mx-auto leading-relaxed">
              Digital Transformation Solutions
            </p>
            
            <p className="text-lg text-slate-300 max-w-4xl mx-auto leading-relaxed animate-fade-in-up">
              Your trusted partner in logistics and supply chain solutions, focused on precision, efficiency, and reliability. 
              We offer end-to-end services to help businesses operate smarter and save costs.
            </p>
          </div>
        </div>
        
        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12 animate-fade-in-up">
          <Button 
            size="lg" 
            className="btn-primary text-white px-10 py-4 text-lg font-semibold rounded-xl"
          >
            <span className="flex items-center">
              Explore Solutions
              <ArrowRight className="ml-3 h-5 w-5" />
            </span>
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="glass border-cyan-400/40 text-cyan-300 hover:bg-cyan-400/10 hover:border-cyan-300 px-10 py-4 text-lg rounded-xl"
          >
            <Play className="mr-3 h-5 w-5" />
            Watch Demo
          </Button>
        </div>

        {/* Stats */}
        <div className="flex justify-center space-x-12 mt-16 animate-fade-in-up">
          {[
            { label: 'Uptime', value: '99.9%' },
            { label: 'Support', value: '24/7' },
            { label: 'Vision', value: '2030' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl font-bold text-cyan-400 mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-slate-400">
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
