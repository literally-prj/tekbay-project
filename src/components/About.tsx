import { CheckCircle, Award, Users, Lightbulb } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const About = () => {
  const [visibleStats, setVisibleStats] = useState<number[]>([]);
  const [visibleValues, setVisibleValues] = useState<number[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const statsRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);

  const stats = [
    { number: '99.9%', label: 'System Uptime', icon: '⚡' },
    { number: '500+', label: 'Projects Delivered', icon: '🚀' },
    { number: '24/7', label: 'AI Monitoring', icon: '🤖' },
    { number: '∞', label: 'Scalability', icon: '🌐' },
  ];

  const values = [
    {
      icon: Lightbulb,
      title: 'Neural Vision',
      description: 'Pioneering the next generation of digital transformation through quantum-ready infrastructure and neural network integration across all business verticals.',
    },
    {
      icon: Users,
      title: 'Adaptive Mission',
      description: 'Leveraging advanced AI algorithms and machine learning protocols to create self-optimizing supply chain ecosystems that evolve with market dynamics.',
    },
    {
      icon: Award,
      title: 'Quantum Commitment',
      description: 'Delivering military-grade security with quantum encryption, zero-trust architecture, and predictive threat intelligence for unparalleled protection.',
    },
    {
      icon: CheckCircle,
      title: 'Hyperscale Reliability',
      description: 'Autonomous systems with self-healing networks, predictive maintenance algorithms, and distributed ledger technology ensuring 99.99% operational excellence.',
    },
  ];

  useEffect(() => {
    const statsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleStats(prev => [...prev, index]);
          }
        });
      },
      { threshold: 0.5 }
    );

    const valuesObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleValues(prev => [...prev, index]);
          }
        });
      },
      { threshold: 0.3 }
    );

    const statsItems = statsRef.current?.querySelectorAll('.stat-item');
    const valueItems = valuesRef.current?.querySelectorAll('.value-item');
    
    statsItems?.forEach(item => statsObserver.observe(item));
    valueItems?.forEach(item => valuesObserver.observe(item));

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      statsObserver.disconnect();
      valuesObserver.disconnect();
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section id="about" className="py-32 bg-gradient-to-br from-slate-900 via-gray-900 to-black relative overflow-hidden">
      {/* Revolutionary background effects */}
      <div className="absolute inset-0 opacity-20">
        {/* Neural network visualization */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 1000">
          {[...Array(100)].map((_, i) => (
            <g key={i}>
              <circle 
                cx={Math.random() * 1000} 
                cy={Math.random() * 1000} 
                r="1.5" 
                fill="#06b6d4"
                className="animate-neural"
                style={{ animationDelay: `${Math.random() * 10}s` }}
              />
              {i < 50 && (
                <line
                  x1={Math.random() * 1000}
                  y1={Math.random() * 1000}
                  x2={Math.random() * 1000}
                  y2={Math.random() * 1000}
                  stroke="url(#neuralGradient)"
                  strokeWidth="0.5"
                  opacity="0.4"
                  className="animate-pulse"
                  style={{ animationDelay: `${Math.random() * 5}s` }}
                />
              )}
            </g>
          ))}
          <defs>
            <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06b6d4" />
              <stop offset="50%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Advanced floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className={`absolute ${
              i % 4 === 0 ? 'w-6 h-6 bg-gradient-to-r from-cyan-400/30 to-blue-400/30 rounded-full animate-quantum' :
              i % 4 === 1 ? 'w-4 h-4 border-2 border-purple-400/30 rotate-45 animate-neural' :
              i % 4 === 2 ? 'w-3 h-12 bg-gradient-to-b from-green-400/30 to-transparent animate-matrix' :
              'w-8 h-2 bg-gradient-to-r from-transparent via-pink-400/30 to-transparent animate-float'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 15}s`,
              animationDuration: `${20 + Math.random() * 20}s`,
              transform: `translateX(${(mousePosition.x - 50) * 0.03}px) translateY(${(mousePosition.y - 50) * 0.03}px)`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Enhanced header */}
        <div className="text-center mb-20">
          <div className="relative inline-block">
            <div className="flex items-center justify-center space-x-6 mb-10 animate-fade-in-up">
              <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-cyan-400 animate-pulse"></div>
              <div className="text-4xl holographic">⚡</div>
              <div className="w-16 h-0.5 bg-gradient-to-r from-cyan-400 to-transparent animate-pulse"></div>
            </div>
            
            <h2 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tight">
              About <span className="holographic">TEKBAY</span>
            </h2>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 rounded-full animate-gradient-shift"></div>
          </div>
          <p className="text-xl md:text-2xl text-slate-300 max-w-5xl mx-auto leading-relaxed mt-12 animate-fade-in-up delay-300">
            The quantum leap in digital transformation. We architect tomorrow's infrastructure today, 
            deploying next-generation AI, quantum-ready systems, and autonomous operations that redefine industry standards.
          </p>
        </div>

        {/* Revolutionary stats */}
        <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24">
          {stats.map((stat, index) => (
            <div 
              key={index}
              data-index={index}
              className={`stat-item text-center group cursor-default transition-all duration-1000 ${
                visibleStats.includes(index) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-12'
              }`}
              style={{ 
                transitionDelay: visibleStats.includes(index) ? `${index * 300}ms` : '0ms' 
              }}
            >
              <div className="relative mb-4">
                <div className="text-6xl mb-2 group-hover:scale-110 transition-transform duration-500">
                  {stat.icon}
                </div>
              </div>
              <div className="relative">
                <div className="text-4xl md:text-6xl font-black holographic mb-3 group-hover:scale-110 transition-transform duration-500 neon-text">
                  {stat.number}
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></div>
              </div>
              <div className="text-slate-300 text-sm font-medium uppercase tracking-widest group-hover:text-cyan-300 transition-colors duration-500">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced values grid */}
        <div ref={valuesRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {values.map((value, index) => (
            <div 
              key={index}
              data-index={index}
              className={`value-item group transition-all duration-1000 ${
                visibleValues.includes(index) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-12'
              }`}
              style={{ 
                transitionDelay: visibleValues.includes(index) ? `${index * 200}ms` : '0ms' 
              }}
            >
              <div className="relative p-8 bg-gradient-to-br from-slate-800/30 to-slate-900/50 rounded-3xl border border-slate-700/50 backdrop-blur-xl hover:border-cyan-400/50 transition-all duration-700 hover-tech overflow-hidden">
                {/* Tech grid overlay */}
                <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-700">
                  <div className="tech-grid w-full h-full"></div>
                </div>

                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 group-hover:rotate-3 transition-all duration-700 shadow-2xl cyber-glow">
                    <value.icon className="h-10 w-10 text-white drop-shadow-lg" />
                  </div>
                  <div className="absolute inset-0 w-20 h-20 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-2xl mx-auto opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-700"></div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-cyan-300 transition-colors duration-500 text-center">
                  {value.title}
                </h3>
                <p className="text-slate-300 leading-relaxed group-hover:text-slate-200 transition-colors duration-500 text-center">
                  {value.description}
                </p>

                {/* Holographic effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Advanced tech showcase */}
        <div className="mt-24 text-center">
          <div className="inline-flex items-center space-x-8 px-10 py-6 bg-gradient-to-r from-slate-800/50 to-slate-900/50 rounded-3xl backdrop-blur-xl border border-slate-700/50 hover:border-cyan-400/30 transition-all duration-700">
            <span className="text-slate-400 text-lg font-semibold">Powered by:</span>
            {['Neural AI', 'Quantum Computing', 'Blockchain 3.0', 'Edge Networks'].map((tech, index) => (
              <div key={index} className="px-6 py-3 bg-gradient-to-r from-cyan-600/20 to-purple-600/20 rounded-xl backdrop-blur-sm border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-500 hover:scale-105">
                <span className="holographic font-bold text-sm">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
