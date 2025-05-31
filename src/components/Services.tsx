
import { Truck, Package, Shield, Network, Building2, Zap } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Truck,
      title: 'Freight & Transportation',
      description: 'Full range of freight solutions from international freight & temperature-controlled first mile to bespoke solutions across ground, sea, and air.',
    },
    {
      icon: Package,
      title: 'B2B Supply Chain',
      description: 'Multi-temperature facilities across the Kingdom offer flexible warehousing and transportation solutions for variety of industries and sectors.',
    },
    {
      icon: Network,
      title: 'E-Commerce Solutions',
      description: 'Ecommerce warehousing and orders fulfillment services bringing the best of technology and innovation together.',
    },
    {
      icon: Shield,
      title: 'IT Security Solutions',
      description: 'Network Security, Endpoint Security, Cloud Security, Email Security, Cybersecurity, Data Protection & Compliance solutions.',
    },
    {
      icon: Building2,
      title: 'General Contracting',
      description: 'Trusted leader in general contracting, delivering high-quality, cost-effective solutions tailored to client needs with focus on safety and sustainability.',
    },
    {
      icon: Zap,
      title: 'Digital Transformation',
      description: 'Comprehensive technology integration packages to optimize efficiency with managed services and AI-enabled solutions.',
    },
  ];

  return (
    <section id="solutions" className="py-24 bg-gradient-to-br from-slate-50 to-cyan-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Our <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">Solutions</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive logistics, technology, and contracting solutions designed to drive innovation 
            and accelerate your business transformation journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-200/50"
            >
              <div className="mb-6">
                <div className="w-14 h-14 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-7 w-7 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4 group-hover:text-cyan-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
