
import { useState, useEffect } from 'react';
import { Menu, X, Zap, Shield, Globe } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { name: 'Solutions', href: '#solutions' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      scrolled 
        ? 'glass border-b border-cyan-400/20' 
        : 'bg-slate-900/80 backdrop-blur-xl border-b border-slate-700/20'
    }`}>
      <div className="container-max px-6">
        <div className="flex justify-between items-center h-20">
          {/* Logo with consistent theme */}
          <div className="flex-shrink-0 group flex items-center space-x-3">
            <div className="flex items-center space-x-2">
              <Zap className="h-6 w-6 text-cyan-400" />
              <Shield className="h-5 w-5 text-blue-400" />
              <Globe className="h-4 w-4 text-cyan-400" />
            </div>
            <span className="text-2xl font-black text-gradient cursor-pointer group-hover:scale-105 transition-transform duration-300">
              TEKBAY
            </span>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="relative px-4 py-2 text-lg font-semibold text-slate-300 hover:text-cyan-400 transition-all duration-300 group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="glass p-3 rounded-xl text-slate-300 hover:text-cyan-400 transition-colors duration-300"
            >
              <div className="relative w-6 h-6">
                <Menu className={`absolute inset-0 transition-all duration-300 ${isOpen ? 'opacity-0 rotate-180' : 'opacity-100 rotate-0'}`} size={24} />
                <X className={`absolute inset-0 transition-all duration-300 ${isOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-180'}`} size={24} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile navigation */}
        <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="glass-card px-4 pt-4 pb-6 space-y-2 mt-4 rounded-xl">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-6 py-3 text-lg font-semibold text-slate-300 hover:text-cyan-400 hover:bg-cyan-400/10 rounded-lg transition-all duration-300"
                onClick={() => setIsOpen(false)}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
