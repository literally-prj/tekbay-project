
import { ArrowRight, Play, Shield, Zap, Globe, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const backgroundImages = [
    '/lovable-uploads/43a859b5-46b1-4356-83b5-4591fbef9858.png',
    '/lovable-uploads/9302018b-1ca1-4458-92b9-91dc33875a1f.png',
    '/lovable-uploads/5ec2875a-d527-4bfd-b18a-8a86e869ae7d.png'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % backgroundImages.length
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

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

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Rotating background images */}
      <div className="absolute inset-0">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentImageIndex ? 'opacity-50 scale-105' : 'opacity-0 scale-100'
            }`}
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/85 via-slate-800/75 to-slate-900/85 animate-pulse-slow"></div>
      </div>

      {/* Image Navigation Controls */}
      <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-20 animate-fade-in-up">
        <Button
          onClick={prevImage}
          variant="outline"
          size="icon"
          className="bg-black/40 border-white/30 text-white hover:bg-black/60 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:rotate-12"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
      </div>

      <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-20 animate-fade-in-up">
        <Button
          onClick={nextImage}
          variant="outline"
          size="icon"
          className="bg-black/40 border-white/30 text-white hover:bg-black/60 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:-rotate-12"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>

      {/* Image Indicators - Simplified without auto/pause button */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce-slow">
        <div className="flex items-center space-x-2 bg-black/30 backdrop-blur-sm rounded-full px-4 py-2">
          {backgroundImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToImage(index)}
              className={`w-3 h-3 rounded-full transition-all duration-500 hover:scale-150 ${
                index === currentImageIndex 
                  ? 'bg-cyan-400 scale-125 animate-pulse' 
                  : 'bg-white/60 hover:bg-white/90'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Animated background elements with more movement */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-600/15 to-blue-600/15 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-600/15 to-pink-600/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-emerald-600/10 to-teal-600/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Content with enhanced animations */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        {/* Logo - Enhanced with bounce animation */}
        <div className="mb-8 animate-fade-in-up hover:scale-110 transition-transform duration-300">
          <img 
            src="/lovable-uploads/a79daf2d-99ec-4d4e-a37b-1524822dac84.png" 
            alt="TEKBAY Logo" 
            className="h-32 mx-auto drop-shadow-2xl animate-bounce-slow"
          />
        </div>

        {/* Tagline with typing effect animation */}
        <h2 className="text-xl md:text-2xl text-slate-300 mb-6 animate-fade-in-up animate-pulse-slow" style={{ animationDelay: '0.2s' }}>
          Supporting Saudi Arabia's Vision 2030
        </h2>

        {/* Main headline with gradient animation */}
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          Innovating Tomorrow's
          <span className="block text-gradient mt-2 animate-gradient-shift">Infrastructure Today</span>
        </h1>

        {/* Description with wave animation */}
        <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-4xl mx-auto leading-relaxed animate-fade-in-up hover:text-white transition-colors duration-500" style={{ animationDelay: '0.6s' }}>
          Your trusted partner in logistics, supply chain solutions, IT infrastructure, 
          and general contracting - driving efficiency, reliability, and innovation across the Kingdom.
        </p>

        {/* CTA Buttons with enhanced hover effects */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <Link to="/solutions">
            <Button className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white px-8 py-3 text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:rotate-1 animate-pulse-slow">
              Explore Solutions
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          
          <Button variant="outline" className="border-slate-500 text-slate-300 hover:text-white hover:bg-slate-800/50 px-8 py-3 text-lg rounded-xl backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:-rotate-1">
            <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            Watch Demo
          </Button>
        </div>

        {/* Features with staggered animations */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: '1s' }}>
          {[
            { icon: Shield, title: 'Security First', desc: 'Advanced cybersecurity solutions', delay: '0s' },
            { icon: Zap, title: 'Innovation Driven', desc: 'Cutting-edge technology integration', delay: '0.2s' },
            { icon: Globe, title: 'Global Reach', desc: 'Comprehensive logistics network', delay: '0.4s' }
          ].map((item, index) => (
            <div key={index} className="text-center group animate-bounce-slow" style={{ animationDelay: item.delay }}>
              <div className="w-14 h-14 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-xl flex items-center justify-center mb-3 mx-auto group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 backdrop-blur-sm border border-slate-600/30 animate-float" style={{ animationDelay: `${index * 2}s` }}>
                <item.icon className="h-7 w-7 text-cyan-400 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors">{item.title}</h3>
              <p className="text-slate-400 text-sm group-hover:text-slate-300 transition-colors">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
