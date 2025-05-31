
import { Truck, Package, Shield, Network, Building2, Zap, ArrowUpRight, Cpu, Database, Cloud } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const Services = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);

  const services = [
    {
      icon: Truck,
      title: 'Freight & Transportation',
      description: 'AI-powered logistics solutions with real-time tracking, predictive analytics, and automated route optimization across global networks.',
      features: ['Real-time IoT tracking', 'Predictive maintenance', 'Smart route optimization'],
      color: 'from-orange-500 to-red-500',
      techIcon: Cpu
    },
    {
      icon: Package,
      title: 'Smart Supply Chain',
      description: 'Next-generation warehousing with robotics automation, blockchain transparency, and machine learning demand forecasting.',
      features: ['Robotic automation', 'Blockchain tracking', 'ML forecasting'],
      color: 'from-green-500 to-emerald-500',
      techIcon: Database
    },
    {
      icon: Network,
      title: 'E-Commerce Intelligence',
      description: 'Advanced fulfillment systems powered by AI algorithms, quantum computing readiness, and omnichannel integration.',
      features: ['AI-driven fulfillment', 'Quantum-ready systems', 'Omnichannel sync'],
      color: 'from-purple-500 to-violet-500',
      techIcon: Cloud
    },
    {
      icon: Shield,
      title: 'Cybersecurity Matrix',
      description: 'Military-grade security infrastructure with zero-trust architecture, AI threat detection, and quantum encryption protocols.',
      features: ['Zero-trust security', 'AI threat detection', 'Quantum encryption'],
      color: 'from-cyan-500 to-blue-500',
      techIcon: Shield
    },
    {
      icon: Building2,
      title: 'Smart Contracting',
      description: 'Intelligent construction management with IoT sensors, digital twins, and sustainable tech integration for future-ready buildings.',
      features: ['IoT construction', 'Digital twin models', 'Sustainable tech'],
      color: 'from-amber-500 to-orange-500',
      techIcon: Building2
    },
    {
      icon: Zap,
      title: 'Neural Transformation',
      description: 'Revolutionary digital transformation using neural networks, edge computing, and adaptive AI systems for exponential growth.',
      features: ['Neural networks', 'Edge computing', 'Adaptive AI systems'],
      color: 'from-indigo-500 to-purple-500',
      techIcon: Zap
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setTimeout(() => {
              setVisibleCards(prev => [...prev, index]);
            }, index * 200);
          }
        });
      },
      { threshold: 0.2 }
    );

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    const cards = sectionRef.current?.querySelectorAll('.service-card');
    cards?.forEach(card => observer.observe(card));

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      observer.disconnect();
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section ref={sectionRef} id="solutions" className="py-32 bg-gradient-to-br from-slate-900 via-gray-900 to-black relative overflow-hidden">
      {/* Advanced tech background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Neural network pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 1000 1000">
            {[...Array(50)].map((_, i) => (
              <g key={i}>
                <circle 
                  cx={Math.random() * 1000} 
                  cy={Math.random() * 1000} 
                  r="2" 
                  fill="#06b6d4"
                  className="animate-pulse"
                  style={{ animationDelay: `${Math.random() * 3}s` }}
                />
                {[...Array(3)].map((_, j) => (
                  <line
                    key={j}
                    x1={Math.random() * 1000}
                    y1={Math.random() * 1000}
                    x2={Math.random() * 1000}
                    y2={Math.random() * 1000}
                    stroke="#06b6d4"
                    strokeWidth="0.5"
                    opacity="0.3"
                    className="animate-pulse"
                    style={{ animationDelay: `${Math.random() * 2}s` }}
                  />
                ))}
              </g>
            ))}
          </svg>
        </div>

        {/* Floating tech elements */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-600/10 to-blue-600/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-green-600/10 to-emerald-600/10 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Enhanced header */}
        <div className="text-center mb-24">
          <div className="relative inline-block">
            <div className="flex items-center justify-center space-x-4 mb-8 animate-fade-in-up">
              <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-cyan-400"></div>
              <Cpu className="h-8 w-8 text-cyan-400 animate-pulse" />
              <div className="w-12 h-0.5 bg-gradient-to-r from-cyan-400 to-transparent"></div>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tight">
              Advanced <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient-shift">Solutions</span>
            </h2>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full animate-pulse"></div>
          </div>
          <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto mt-12 leading-relaxed animate-fade-in-up delay-300">
            Revolutionary technology solutions engineered for the digital future. 
            Experience next-generation logistics, security, and transformation powered by artificial intelligence.
          </p>
        </div>

        {/* Enhanced service grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div 
              key={index}
              data-index={index}
              className={`service-card group relative p-10 bg-gradient-to-br from-slate-800/50 to-slate-900/80 rounded-3xl transition-all duration-1000 transform border border-slate-700/50 overflow-hidden backdrop-blur-xl hover:border-cyan-400/50 ${
                visibleCards.includes(index) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-12'
              }`}
              style={{ 
                transitionDelay: visibleCards.includes(index) ? `${index * 100}ms` : '0ms',
                transform: hoveredCard === index 
                  ? `translateY(-12px) rotateX(5deg) scale(1.02)` 
                  : 'translateY(0) rotateX(0deg) scale(1)',
              }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Animated background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-700 rounded-3xl`}></div>
              
              {/* Tech grid overlay */}
              <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-700">
                <div className="grid grid-cols-8 grid-rows-8 h-full w-full">
                  {[...Array(64)].map((_, i) => (
                    <div
                      key={i}
                      className="border border-cyan-400/20"
                      style={{
                        animationDelay: `${Math.random() * 2}s`,
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Holographic effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-pulse"></div>
              
              {/* Enhanced icon container */}
              <div className="relative mb-8 flex items-center space-x-4">
                <div className={`relative w-20 h-20 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-700 shadow-2xl`}>
                  <service.icon className="h-10 w-10 text-white drop-shadow-lg" />
                  <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                
                <div className="flex-1">
                  <service.techIcon className={`h-8 w-8 text-cyan-400 opacity-60 group-hover:opacity-100 transition-all duration-500 animate-pulse`} />
                </div>
              </div>

              {/* Enhanced content */}
              <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-cyan-300 transition-colors duration-500">
                {service.title}
              </h3>
              
              <p className="text-slate-300 leading-relaxed mb-6 group-hover:text-slate-200 transition-colors duration-500">
                {service.description}
              </p>

              {/* Tech features */}
              <div className="space-y-3 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-3 opacity-0 group-hover:opacity-100 transition-all duration-700" style={{ transitionDelay: `${featureIndex * 100}ms` }}>
                    <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full animate-pulse"></div>
                    <span className="text-sm text-cyan-200 font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Enhanced action button */}
              <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-700">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl flex items-center justify-center shadow-2xl hover:shadow-cyan-400/50 transition-all duration-500 hover:scale-110">
                  <ArrowUpRight className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Glow effects */}
              <div className={`absolute inset-0 bg-gradient-to-r ${service.color} rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-700`}></div>
            </div>
          ))}
        </div>

        {/* Enhanced tech showcase */}
        <div className="mt-24 text-center">
          <div className="inline-flex items-center space-x-8 px-8 py-4 bg-slate-800/50 rounded-2xl backdrop-blur-xl border border-slate-700/50">
            <span className="text-slate-400">Powered by:</span>
            {['AI', 'IoT', 'Blockchain', 'Quantum'].map((tech, index) => (
              <div key={index} className="px-4 py-2 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-lg">
                <span className="text-cyan-300 font-semibold text-sm">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
