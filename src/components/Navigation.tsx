
import { useState, useEffect } from 'react';
import { Menu, X, Zap, Shield, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const navItems = [
    { name: 'Solutions', href: '#solutions' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-700 ${
      scrolled 
        ? 'bg-slate-900/95 backdrop-blur-2xl border-b border-cyan-400/30 shadow-2xl shadow-cyan-400/10' 
        : 'bg-slate-900/80 backdrop-blur-xl border-b border-slate-700/30'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          {/* Enhanced logo with tech elements */}
          <div className="flex-shrink-0 group flex items-center space-x-3">
            <div className="flex items-center space-x-2">
              <Zap className="h-6 w-6 text-cyan-400 animate-pulse" />
              <Shield className="h-5 w-5 text-blue-400 animate-bounce-slow" />
              <Globe className="h-4 w-4 text-purple-400 animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
            <span className={`text-3xl font-black transition-all duration-500 cursor-pointer holographic group-hover:scale-110`}
              style={{
                transform: `translateX(${(mousePosition.x - 50) * 0.01}px)`,
              }}
            >
              TEKBAY
            </span>
          </div>

          {/* Enhanced desktop navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-10">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`relative px-4 py-3 text-lg font-semibold transition-all duration-500 group nav-link ${
                    scrolled 
                      ? 'text-slate-300 hover:text-cyan-400' 
                      : 'text-slate-400 hover:text-cyan-300'
                  }`}
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 transition-all duration-500 group-hover:w-full rounded-full"></span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-purple-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg blur-xl"></div>
                </a>
              ))}
            </div>
          </div>

          {/* Revolutionary CTA button */}
          <div className="hidden md:block">
            <Button className="group relative overflow-hidden bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 hover:from-cyan-500 hover:via-blue-500 hover:to-purple-500 text-white rounded-2xl px-8 py-3 text-lg font-bold transition-all duration-700 hover:scale-110 hover:shadow-2xl hover:shadow-cyan-400/50 btn-glow btn-neural">
              <span className="relative z-10 flex items-center">
                <Zap className="mr-2 h-5 w-5" />
                Launch Project
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-cyan-200/20 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl"></div>
            </Button>
          </div>

          {/* Enhanced mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-3 rounded-2xl transition-all duration-500 ${
                scrolled 
                  ? 'text-slate-300 hover:text-cyan-400 hover:bg-slate-800/50' 
                  : 'text-slate-400 hover:text-white hover:bg-white/10'
              } backdrop-blur-xl border border-slate-700/30 hover:border-cyan-400/30`}
            >
              <div className="relative w-7 h-7">
                <Menu className={`absolute inset-0 transition-all duration-500 ${isOpen ? 'opacity-0 rotate-180 scale-75' : 'opacity-100 rotate-0 scale-100'}`} size={28} />
                <X className={`absolute inset-0 transition-all duration-500 ${isOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-180 scale-75'}`} size={28} />
              </div>
            </button>
          </div>
        </div>

        {/* Enhanced mobile navigation */}
        <div className={`md:hidden overflow-hidden transition-all duration-700 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className={`px-4 pt-4 pb-6 space-y-2 mt-4 rounded-2xl backdrop-blur-2xl border glass-tech ${
            scrolled 
              ? 'bg-slate-900/95 border-cyan-400/30' 
              : 'bg-slate-800/95 border-slate-700/50'
          }`}>
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className={`block px-6 py-4 text-lg font-semibold rounded-xl transition-all duration-500 hover-tech ${
                  scrolled 
                    ? 'text-slate-300 hover:text-cyan-400 hover:bg-slate-800/50' 
                    : 'text-slate-400 hover:text-cyan-300 hover:bg-white/10'
                } border border-transparent hover:border-cyan-400/30`}
                onClick={() => setIsOpen(false)}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {item.name}
              </a>
            ))}
            <div className="pt-4">
              <Button className="w-full bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 hover:from-cyan-500 hover:via-blue-500 hover:to-purple-500 text-white rounded-2xl py-4 text-lg font-bold transition-all duration-700 hover:scale-105 btn-glow">
                <Zap className="mr-2 h-5 w-5" />
                Launch Project
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
