
import { Truck, Package, Shield, Network, Building2, Zap } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const Services = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  const services = [
    {
      icon: Truck,
      title: 'Freight & Transportation',
      description: 'Full range of freight solutions from international freight & temperature-controlled first mile to bespoke solutions across ground, sea, and air.',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Package,
      title: 'B2B Supply Chain',
      description: 'Multi-temperature facilities across the Kingdom offer flexible warehousing and transportation solutions for variety of industries and sectors.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Network,
      title: 'E-Commerce Solutions',
      description: 'Ecommerce warehousing and orders fulfillment services bringing the best of technology and innovation together.',
      color: 'from-purple-500 to-violet-500'
    },
    {
      icon: Shield,
      title: 'IT Security Solutions',
      description: 'Network Security, Endpoint Security, Cloud Security, Email Security, Cybersecurity, Data Protection & Compliance solutions.',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      icon: Building2,
      title: 'General Contracting',
      description: 'Trusted leader in general contracting, delivering high-quality, cost-effective solutions tailored to client needs with focus on safety and sustainability.',
      color: 'from-amber-500 to-orange-500'
    },
    {
      icon: Zap,
      title: 'Digital Transformation',
      description: 'Comprehensive technology integration packages to optimize efficiency with managed services and AI-enabled solutions.',
      color: 'from-indigo-500 to-purple-500'
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleCards(prev => [...prev, index]);
          }
        });
      },
      { threshold: 0.2 }
    );

    const cards = sectionRef.current?.querySelectorAll('.service-card');
    cards?.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="solutions" className="py-24 bg-gradient-to-br from-slate-50 to-cyan-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-cyan-200/20 to-blue-200/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-200/20 to-pink-200/20 rounded-full blur-3xl animate-float-delayed"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className="relative inline-block">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Our <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">Solutions</span>
            </h2>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full"></div>
          </div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mt-8 animate-fade-in-up delay-300">
            Comprehensive logistics, technology, and contracting solutions designed to drive innovation 
            and accelerate your business transformation journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              data-index={index}
              className={`service-card group relative p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-700 transform border border-slate-200/50 overflow-hidden ${
                visibleCards.includes(index) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ 
                transitionDelay: visibleCards.includes(index) ? `${index * 150}ms` : '0ms' 
              }}
            >
              {/* Animated background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              {/* Floating icon container */}
              <div className="relative mb-6">
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
                  <service.icon className="h-8 w-8 text-white drop-shadow-sm" />
                </div>
                {/* Icon glow effect */}
                <div className={`absolute inset-0 w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}></div>
              </div>

              <h3 className="text-xl font-semibold text-slate-900 mb-4 group-hover:text-cyan-600 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                {service.description}
              </p>

              {/* Hover arrow indicator */}
              <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
