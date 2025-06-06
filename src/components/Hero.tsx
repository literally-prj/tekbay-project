
import { ArrowRight, Play, Shield, Zap, Globe, ChevronLeft, ChevronRight, Pause, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  
  const backgroundImages = [
    '/lovable-uploads/5ec2875a-d527-4bfd-b18a-8a86e869ae7d.png', // Changed to more relevant tech image
    '/lovable-uploads/43a859b5-46b1-4356-83b5-4591fbef9858.png',
    '/lovable-uploads/9302018b-1ca1-4458-92b9-91dc33875a1f.png'
  ];

  useEffect(() => {
    if (!isAutoPlay) return;
    
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % backgroundImages.length
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [backgroundImages.length, isAutoPlay]);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      (prevIndex + 1) % backgroundImages.length
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? backgroundImages.length - 1 : prevIndex - 1
    );
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlay(!isAutoPlay);
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Rotating background images with higher opacity */}
      <div className="absolute inset-0">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? 'opacity-50' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          />
        ))}
        {/* Lighter overlay for better image visibility */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/70 via-slate-800/60 to-slate-900/70"></div>
      </div>

      {/* Image Navigation Controls */}
      <div className="absolute top-1/2 left-6 transform -translate-y-1/2 z-20">
        <Button
          onClick={prevImage}
          variant="outline"
          size="icon"
          className="bg-black/30 border-white/20 text-white hover:bg-black/50 backdrop-blur-sm"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
      </div>

      <div className="absolute top-1/2 right-6 transform -translate-y-1/2 z-20">
        <Button
          onClick={nextImage}
          variant="outline"
          size="icon"
          className="bg-black/30 border-white/20 text-white hover:bg-black/50 backdrop-blur-sm"
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>

      {/* Image Indicators */}
      <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-3 items-center">
          {backgroundImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToImage(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentImageIndex 
                  ? 'bg-cyan-400 scale-125' 
                  : 'bg-white/50 hover:bg-white/80'
              }`}
            />
          ))}
          <div className="ml-4 flex space-x-2">
            <Button
              onClick={toggleAutoPlay}
              variant="outline"
              size="sm"
              className="bg-black/30 border-white/20 text-white hover:bg-black/50 backdrop-blur-sm text-xs px-3 py-1"
            >
              {isAutoPlay ? <Pause className="h-3 w-3 mr-1" /> : <RotateCcw className="h-3 w-3 mr-1" />}
              {isAutoPlay ? 'Pause' : 'Auto'}
            </Button>
          </div>
        </div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-amber-600/10 to-orange-600/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        {/* Logo */}
        <div className="mb-12 animate-fade-in-up">
          <img 
            src="/lovable-uploads/a79daf2d-99ec-4d4e-a37b-1524822dac84.png" 
            alt="TEKBAY Logo" 
            className="h-40 mx-auto"
          />
        </div>

        {/* Tagline */}
        <h2 className="text-2xl md:text-3xl text-slate-300 mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Supporting Saudi Arabia's Vision 2030
        </h2>

        {/* Main headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          Innovating Tomorrow's
          <span className="block text-gradient mt-2">Infrastructure Today</span>
        </h1>

        {/* Description */}
        <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          Your trusted partner in logistics, supply chain solutions, IT infrastructure, 
          and general contracting - driving efficiency, reliability, and innovation across the Kingdom.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <Link to="/solutions">
            <Button className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white px-8 py-4 text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              Explore Solutions
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          
          <Button variant="outline" className="border-slate-600 text-slate-300 hover:text-white hover:bg-slate-800 px-8 py-4 text-lg rounded-xl backdrop-blur-sm">
            <Play className="mr-2 h-5 w-5" />
            Watch Demo
          </Button>
        </div>

        {/* Stats or features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: '1s' }}>
          {[
            { icon: Shield, title: 'Security First', desc: 'Advanced cybersecurity solutions' },
            { icon: Zap, title: 'Innovation Driven', desc: 'Cutting-edge technology integration' },
            { icon: Globe, title: 'Global Reach', desc: 'Comprehensive logistics network' }
          ].map((item, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 backdrop-blur-sm border border-slate-700">
                <item.icon className="h-8 w-8 text-cyan-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-slate-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-slate-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-slate-600 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
