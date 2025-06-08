
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { name: 'Solutions', href: '/solutions' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
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
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 group">
            <img 
              src="/lovable-uploads/a79daf2d-99ec-4d4e-a37b-1524822dac84.png" 
              alt="TEKBAY Logo" 
              className="h-12 group-hover:scale-105 transition-transform duration-300"
            />
          </Link>

          {/* Desktop navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="relative px-4 py-2 text-lg font-semibold text-slate-300 hover:text-cyan-400 transition-all duration-300 group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
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
              <Link
                key={item.name}
                to={item.href}
                className="block px-6 py-3 text-lg font-semibold text-slate-300 hover:text-cyan-400 hover:bg-cyan-400/10 rounded-lg transition-all duration-300"
                onClick={() => setIsOpen(false)}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
