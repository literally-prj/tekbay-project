
import { Shield, Building2, Truck, Network, ArrowUpRight, Cpu } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const services = [
    {
      icon: Shield,
      title: 'IT & Cybersecurity',
      description: 'Comprehensive cybersecurity and IT infrastructure solutions including data center services, networking, and security.',
      features: ['Data Center & Cloud Solutions', 'Enterprise Networking', 'Cybersecurity & Compliance', 'Professional Services', 'Digital Transformation'],
      color: 'from-cyan-500 to-blue-500',
      link: '/it-cybersecurity'
    },
    {
      icon: Building2,
      title: 'General Contracting',
      description: 'Trusted leader in general contracting, delivering high-quality, cost-effective solutions with focus on safety and sustainability.',
      features: ['Industrial Material Supply', 'Specialized Contracting', 'Turnkey Construction', 'MEP Services', 'Project Management'],
      color: 'from-amber-500 to-orange-500',
      link: '/general-contracting'
    },
    {
      icon: Truck,
      title: 'Logistics Solutions',
      description: 'Full range of freight and transportation solutions from international freight to bespoke solutions across ground, sea, and air.',
      features: ['Ground Freight Access', 'Sea Freight (FCL & LCL)', 'Air Freight Delivery', 'RORO Transport', 'Cross-Border Solutions'],
      color: 'from-orange-500 to-red-500',
      link: '/logistics-solutions'
    },
    {
      icon: Network,
      title: 'E-Commerce Solutions',
      description: 'Ecommerce warehousing and order fulfillment services bringing the best of technology and innovation together.',
      features: ['Storage & Fulfillment', 'Last Mile Delivery', 'International Shipping'],
      color: 'from-purple-500 to-violet-500',
      link: '/ecommerce-solutions'
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
            }, index * 150);
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = sectionRef.current?.querySelectorAll('.service-card');
    cards?.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="solutions" className="section-padding bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Simplified background for better performance */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 container-max">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center space-x-4 mb-6 animate-fade-in-up">
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-cyan-400"></div>
            <Cpu className="h-8 w-8 text-cyan-400" />
            <div className="w-12 h-0.5 bg-gradient-to-r from-cyan-400 to-transparent"></div>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
            Our <span className="text-gradient">Solutions</span>
          </h2>
          
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed animate-fade-in-up">
            Comprehensive solutions across logistics, supply chain, IT, and contracting services 
            engineered for Saudi Arabia's Vision 2030.
          </p>
        </div>

        {/* Service grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Link 
              key={index}
              to={service.link}
              data-index={index}
              className={`service-card group glass-card p-8 rounded-2xl transition-all duration-500 transform hover-lift ${
                visibleCards.includes(index) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ 
                transitionDelay: visibleCards.includes(index) ? `${index * 100}ms` : '0ms',
              }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Icon container */}
              <div className="relative mb-6 flex items-center justify-between">
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                
                <div className={`opacity-0 group-hover:opacity-100 transition-all duration-300 ${hoveredCard === index ? 'translate-x-0' : 'translate-x-4'}`}>
                  <div className="w-10 h-10 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg flex items-center justify-center">
                    <ArrowUpRight className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-slate-300 leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Features */}
              <div className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className={`flex items-center space-x-3 opacity-0 group-hover:opacity-100 transition-all duration-300`} style={{ transitionDelay: `${featureIndex * 100}ms` }}>
                    <div className="w-1.5 h-1.5 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"></div>
                    <span className="text-sm text-cyan-200 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </Link>
          ))}
        </div>

        {/* Tech showcase */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center space-x-6 glass px-8 py-4 rounded-xl">
            <span className="text-slate-400 font-medium">Supporting:</span>
            {['Vision 2030', 'Digital Transformation', 'Smart Cities'].map((tech, index) => (
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
