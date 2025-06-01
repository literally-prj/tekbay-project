import { CheckCircle, Award, Users, Lightbulb } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const About = () => {
  const [visibleStats, setVisibleStats] = useState<number[]>([]);
  const [visibleValues, setVisibleValues] = useState<number[]>([]);
  const statsRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);

  const stats = [
    { number: '99.9%', label: 'System Uptime', icon: '⚡' },
    { number: '50+', label: 'Projects Delivered', icon: '🚀' },
    { number: '24/7', label: 'Operations', icon: '🤖' },
    { number: '∞', label: 'Scalability', icon: '🌐' },
  ];

  const values = [
    {
      icon: Lightbulb,
      title: 'Vision',
      description: 'To be regionally recognized digital, cloud and cybersecurity solutions provider, preparing businesses for tomorrow.',
    },
    {
      icon: Users,
      title: 'Mission',
      description: 'We drive digital transformation through innovative solutions and communication services that support business performance and global growth.',
    },
    {
      icon: Award,
      title: 'Commitment',
      description: 'We address diverse and complex business needs with tailored digital and cybersecurity solutions, empowering customers to stay secure and competitive in their digital transformation.',
    },
    {
      icon: CheckCircle,
      title: 'Excellence',
      description: 'Industry leadership through precision, efficiency, and reliability. We simplify logistics so you can focus on growth, offering transparent, scalable solutions.',
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

    return () => {
      statsObserver.disconnect();
      valuesObserver.disconnect();
    };
  }, []);

  return (
    <section id="about" className="py-32 bg-gradient-to-br from-slate-900 via-gray-900 to-black relative overflow-hidden">
      {/* Professional background effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-600/30 to-blue-600/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-600/30 to-pink-600/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center space-x-6 mb-10 animate-fade-in-up">
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-cyan-400"></div>
            <div className="text-2xl">🏢</div>
            <div className="w-16 h-0.5 bg-gradient-to-r from-cyan-400 to-transparent"></div>
          </div>
          
          <h2 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tight">
            About <span className="text-gradient">TEKBAY</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-slate-300 max-w-5xl mx-auto leading-relaxed mt-12 animate-fade-in-up delay-300">
            Your trusted partner in logistics and supply chain solutions, focused on precision, efficiency, and reliability. 
            As the industry's premier technology integrator, we offer comprehensive digital transformation services.
          </p>
        </div>

        {/* Stats */}
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
              <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-500">
                {stat.icon}
              </div>
              <div className="text-4xl md:text-6xl font-black text-gradient mb-3 group-hover:scale-110 transition-transform duration-500">
                {stat.number}
              </div>
              <div className="text-slate-300 text-sm font-medium uppercase tracking-widest group-hover:text-cyan-300 transition-colors duration-500">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Values grid */}
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
              <div className="relative p-8 glass-card rounded-3xl hover:border-cyan-400/50 transition-all duration-700 hover-lift overflow-hidden">
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-all duration-700 shadow-2xl">
                    <value.icon className="h-10 w-10 text-white" />
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-cyan-300 transition-colors duration-500 text-center">
                  {value.title}
                </h3>
                <p className="text-slate-300 leading-relaxed group-hover:text-slate-200 transition-colors duration-500 text-center">
                  {value.description}
                </p>

                {/* Professional hover effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Vision 2030 showcase - removed NEOM */}
        <div className="mt-24 text-center">
          <div className="inline-flex items-center space-x-8 px-10 py-6 glass rounded-3xl border border-slate-700/50 hover:border-cyan-400/30 transition-all duration-700">
            <span className="text-slate-400 text-lg font-semibold">Supporting:</span>
            {['Saudi Vision 2030', 'Digital Economy', 'Smart Cities'].map((initiative, index) => (
              <div key={index} className="px-6 py-3 bg-gradient-to-r from-cyan-600/20 to-purple-600/20 rounded-xl border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-500 hover:scale-105">
                <span className="text-gradient font-bold text-sm">{initiative}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
