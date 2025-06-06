
import { ArrowRight, Play, Shield, Zap, Globe, ChevronLeft, ChevronRight, Pause, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  
  const backgroundImages = [
    '/lovable-uploads/5ec2875a-d527-4bfd-b18a-8a86e869ae7d.png',
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
      {/* Rotating background images */}
      <div className="absolute inset-0">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? 'opacity-40' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/85 via-slate-800/75 to-slate-900/85"></div>
      </div>

      {/* Image Navigation Controls */}
      <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-20">
        <Button
          onClick={prevImage}
          variant="outline"
          size="icon"
          className="bg-black/40 border-white/30 text-white hover:bg-black/60 backdrop-blur-sm transition-all duration-300"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
      </div>

      <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-20">
        <Button
          onClick={nextImage}
          variant="outline"
          size="icon"
          className="bg-black/40 border-white/30 text-white hover:bg-black/60 backdrop-blur-sm transition-all duration-300"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>

      {/* Image Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex items-center space-x-4 bg-black/30 backdrop-blur-sm rounded-full px-6 py-3">
          <div className="flex space-x-2">
            {backgroundImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToImage(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === currentImageIndex 
                    ? 'bg-cyan-400 scale-150' 
                    : 'bg-white/60 hover:bg-white/90'
                }`}
              />
            ))}
          </div>
          <div className="h-4 w-px bg-white/30"></div>
          <Button
            onClick={toggleAutoPlay}
            variant="outline"
            size="sm"
            className="bg-transparent border-white/30 text-white hover:bg-white/10 backdrop-blur-sm text-xs px-3 py-1 h-7"
          >
            {isAutoPlay ? <Pause className="h-3 w-3 mr-1" /> : <RotateCcw className="h-3 w-3 mr-1" />}
            {isAutoPlay ? 'Pause' : 'Auto'}
          </Button>
        </div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-600/10 to-blue-600/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        {/* Logo - Properly spaced and visible */}
        <div className="mb-8 animate-fade-in-up">
          <img 
            src="/lovable-uploads/a79daf2d-99ec-4d4e-a37b-1524822dac84.png" 
            alt="TEKBAY Logo" 
            className="h-32 mx-auto drop-shadow-2xl"
          />
        </div>

        {/* Tagline */}
        <h2 className="text-xl md:text-2xl text-slate-300 mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Supporting Saudi Arabia's Vision 2030
        </h2>

        {/* Main headline */}
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          Innovating Tomorrow's
          <span className="block text-gradient mt-2">Infrastructure Today</span>
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-4xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          Your trusted partner in logistics, supply chain solutions, IT infrastructure, 
          and general contracting - driving efficiency, reliability, and innovation across the Kingdom.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <Link to="/solutions">
            <Button className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white px-8 py-3 text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              Explore Solutions
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          
          <Button variant="outline" className="border-slate-500 text-slate-300 hover:text-white hover:bg-slate-800/50 px-8 py-3 text-lg rounded-xl backdrop-blur-sm transition-all duration-300">
            <Play className="mr-2 h-5 w-5" />
            Watch Demo
          </Button>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: '1s' }}>
          {[
            { icon: Shield, title: 'Security First', desc: 'Advanced cybersecurity solutions' },
            { icon: Zap, title: 'Innovation Driven', desc: 'Cutting-edge technology integration' },
            { icon: Globe, title: 'Global Reach', desc: 'Comprehensive logistics network' }
          ].map((item, index) => (
            <div key={index} className="text-center group">
              <div className="w-14 h-14 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-xl flex items-center justify-center mb-3 mx-auto group-hover:scale-110 transition-transform duration-300 backdrop-blur-sm border border-slate-600/30">
                <item.icon className="h-7 w-7 text-cyan-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-slate-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
