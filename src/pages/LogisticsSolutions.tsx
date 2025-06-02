
import { Truck, Ship, Plane, Package, Globe, ArrowRight } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const LogisticsSolutions = () => {
  const services = [
    {
      title: 'Third-Party Logistics (3PL)',
      description: 'Comprehensive third-party logistics services for efficient supply chain management.',
      icon: Package
    },
    {
      title: 'Fourth-Party Logistics (4PL)',
      description: 'Strategic fourth-party logistics management and optimization solutions.',
      icon: Globe
    },
    {
      title: 'Nationwide Coverage',
      description: 'Access to storage facilities and transportation in major cities as well as remote locations.',
      icon: Truck
    },
    {
      title: 'SFDA Approved & ISO Certified',
      description: 'High standardized climate-controlled warehousing under one roof.',
      icon: Package
    },
    {
      title: 'Cold-Chain Logistics Management Coverage',
      description: 'Frozen, ambient & chilled storage and transportation solutions.',
      icon: Package
    }
  ];

  const freightServices = [
    {
      title: 'Ground Freight',
      description: 'Access the largest transportation network in the GCC and the Middle East.',
      icon: Truck
    },
    {
      title: 'Sea Freight',
      description: 'Choose from a wide variety of services (FCL & LCL) that matches the size and weight of your goods.',
      icon: Ship
    },
    {
      title: 'Air Freight',
      description: 'Ship your cargo to any place in the world with delivery speed that meets your requirements.',
      icon: Plane
    },
    {
      title: 'RORO',
      description: 'Transport your trucks, trailers, tractors and cars as well as rolling assets through Starlinks.',
      icon: Truck
    },
    {
      title: 'Cross-Border Transportation',
      description: 'Offering a vast range of dry and temperature-controlled fleets covering the GCC.',
      icon: Globe
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-black text-white mb-8">
            Logistics <span className="text-gradient">Solutions</span>
          </h1>
          <div className="space-y-6 text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-12">
            <p>
              TEKBAY is your trusted partner in logistics and supply chain solutions, focused on precision, 
              efficiency, and reliability. We offer end-to-end services including transportation, warehousing, 
              and distribution to help businesses operate smarter and save costs.
            </p>
            <p>
              With advanced tracking, a skilled team, and a strong delivery network, we ensure timely, 
              dependable service from freight forwarding to last-mile delivery—tailored to your needs.
            </p>
            <p>
              We simplify logistics so you can focus on growth, offering transparent, scalable solutions that 
              keep your business moving forward.
            </p>
          </div>
        </div>
      </section>

      {/* B2B Supply Chain Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 text-center">
            B2B Supply <span className="text-gradient">Chain</span>
          </h2>
          <p className="text-xl text-slate-300 text-center mb-16 max-w-4xl mx-auto">
            Our multi-temperature facilities across the Kingdom offer our clients flexible warehousing 
            and transportation solutions, which cater to a variety of industries and sectors.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="glass-card p-8 rounded-2xl hover:border-orange-400/50 transition-all duration-700 hover-lift group"
              >
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-600 to-red-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-orange-300 transition-colors duration-300">
                    {service.title}
                  </h3>
                </div>
                <p className="text-slate-300 leading-relaxed group-hover:text-slate-200 transition-colors duration-300">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Freight and Transportation Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 text-center">
            Freight and <span className="text-gradient">Transportation</span>
          </h2>
          <p className="text-xl text-slate-300 text-center mb-16 max-w-4xl mx-auto">
            Full range of Freight and Transportation solutions from international freight & temperature-controlled 
            first mile to bespoke solutions across ground, sea, and air.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {freightServices.map((service, index) => (
              <div 
                key={index}
                className="glass-card p-8 rounded-2xl hover:border-orange-400/50 transition-all duration-700 hover-lift group"
              >
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-600 to-red-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-orange-300 transition-colors duration-300">
                    {service.title}
                  </h3>
                </div>
                <p className="text-slate-300 leading-relaxed group-hover:text-slate-200 transition-colors duration-300">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LogisticsSolutions;
