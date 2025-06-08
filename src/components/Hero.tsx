
import { ArrowRight, Shield, Zap, Globe, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const backgroundImages = [
    '/lovable-uploads/9302018b-1ca1-4458-92b9-91dc33875a1f.png',
    '/lovable-uploads/5ec2875a-d527-4bfd-b18a-8a86e869ae7d.png',
    '/lovable-uploads/43a859b5-46b1-4356-83b5-4591fbef9858.png'
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
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/85 via-slate-800/75 to-slate-900/85"></div>
      </div>

      {/* Image Navigation Controls */}
      <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-20">
        <Button
          onClick={prevImage}
          variant="outline"
          size="icon"
          className="bg-black/40 border-white/30 text-white hover:bg-black/60 backdrop-blur-sm transition-all duration-300 hover:scale-110"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
      </div>

      <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-20">
        <Button
          onClick={nextImage}
          variant="outline"
          size="icon"
          className="bg-black/40 border-white/30 text-white hover:bg-black/60 backdrop-blur-sm transition-all duration-300 hover:scale-110"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>

      {/* Image Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex items-center space-x-2 bg-black/30 backdrop-blur-sm rounded-full px-4 py-2">
          {backgroundImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToImage(index)}
              className={`w-3 h-3 rounded-full transition-all duration-500 hover:scale-150 ${
                index === currentImageIndex 
                  ? 'bg-cyan-400 scale-125' 
                  : 'bg-white/60 hover:bg-white/90'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Content - Fixed positioning, no animations */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        {/* Logo */}
        <div className="mb-8">
          <img 
            src="/lovable-uploads/a79daf2d-99ec-4d4e-a37b-1524822dac84.png" 
            alt="TEKBAY Logo" 
            className="h-32 mx-auto drop-shadow-2xl"
          />
        </div>

        {/* Tagline */}
        <h2 className="text-xl md:text-2xl text-slate-300 mb-6">
          Supporting Saudi Arabia's Vision 2030
        </h2>

        {/* Main headline */}
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
          Innovating Tomorrow's
          <span className="block text-gradient mt-2">Infrastructure Today</span>
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-4xl mx-auto leading-relaxed">
          Your trusted partner in logistics, supply chain solutions, IT infrastructure, 
          and general contracting - driving efficiency, reliability, and innovation across the Kingdom.
        </p>

        {/* CTA Button - Only one button */}
        <div className="flex justify-center items-center mb-12">
          <Link to="/solutions">
            <Button className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white px-8 py-3 text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              Explore Solutions
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            { icon: Shield, title: 'Security First', desc: 'Advanced cybersecurity solutions' },
            { icon: Zap, title: 'Innovation Driven', desc: 'Cutting-edge technology integration' },
            { icon: Globe, title: 'Global Reach', desc: 'Comprehensive logistics network' }
          ].map((item, index) => (
            <div key={index} className="text-center group">
              <div className="w-14 h-14 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-xl flex items-center justify-center mb-3 mx-auto group-hover:scale-125 transition-all duration-500 backdrop-blur-sm border border-slate-600/30">
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
