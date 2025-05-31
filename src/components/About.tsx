
import { CheckCircle, Award, Users, Lightbulb } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const About = () => {
  const [visibleStats, setVisibleStats] = useState<number[]>([]);
  const [visibleValues, setVisibleValues] = useState<number[]>([]);
  const statsRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '5+', label: 'Years Experience' },
    { number: '24/7', label: 'Support' },
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
      description: 'We address diverse and complex business needs with tailored digital and cybersecurity solutions, empowering customers to stay secure and competitive.',
    },
    {
      icon: CheckCircle,
      title: 'Reliability',
      description: 'Advanced tracking, skilled team, and strong delivery network ensure timely, dependable service from freight forwarding to last-mile delivery.',
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
    <section id="about" className="py-24 bg-gradient-to-br from-slate-900 via-cyan-900 to-blue-900 relative overflow-hidden">
      {/* Enhanced background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/3 left-1/5 w-64 h-64 bg-cyan-500 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 right-1/5 w-80 h-80 bg-blue-500 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse-slow delay-2000"></div>
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-4 h-4 border border-cyan-400/20 ${
              i % 3 === 0 ? 'rotate-45' : i % 3 === 1 ? 'rounded-full' : ''
            } animate-float`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${20 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="relative inline-block">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">TEKBAY</span>
            </h2>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"></div>
          </div>
          <p className="text-xl text-cyan-100 max-w-4xl mx-auto leading-relaxed mt-8 animate-fade-in-up delay-300">
            As the industry's premier technology integrator, we are also the leading provider of On-Demand 
            Business infrastructures, affording our customers customized technology integration packages to 
            optimize their efficiency.
          </p>
        </div>

        {/* Enhanced Stats */}
        <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div 
              key={index}
              data-index={index}
              className={`stat-item text-center group cursor-default transition-all duration-700 ${
                visibleStats.includes(index) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ 
                transitionDelay: visibleStats.includes(index) ? `${index * 200}ms` : '0ms' 
              }}
            >
              <div className="relative">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="text-cyan-200 text-sm font-medium uppercase tracking-wide group-hover:text-white transition-colors duration-300">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Vision, Mission, Commitment */}
        <div ref={valuesRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div 
              key={index}
              data-index={index}
              className={`value-item text-center group transition-all duration-700 ${
                visibleValues.includes(index) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ 
                transitionDelay: visibleValues.includes(index) ? `${index * 150}ms` : '0ms' 
              }}
            >
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                  <value.icon className="h-8 w-8 text-white drop-shadow-sm" />
                </div>
                <div className="absolute inset-0 w-16 h-16 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl mx-auto opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"></div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                {value.title}
              </h3>
              <p className="text-cyan-200 leading-relaxed group-hover:text-cyan-100 transition-colors duration-300">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
